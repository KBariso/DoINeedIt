const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('../utils');
const { login, logout, restoreUser, demoLogin } = require('../auth')

const router = express.Router();
/* GET users listing. */
router.get('/signup', csrfProtection, function(req, res, next) {
  const user = db.User.build();
  res.render('user-signup', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken()
  });
});

const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for First Name')
    .isLength({ max: 50 })
    .withMessage('First Name must not be more than 50 characters long'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Last Name')
    .isLength({ max: 50 })
    .withMessage('Last Name must not be more than 50 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Username')
    .isLength({ max: 50 })
    .withMessage('Username must not be more than 50 characters long')
    .custom((value) => {
      return db.User.findOne({ where: { username: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Username is already in use by another account');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ min: 8 })
    .withMessage('Confirm Password must be at least 8 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];


router.post('/signup', csrfProtection, userValidators, asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, username, password } = req.body;

  const user = db.User.build({
    fullName: `${firstName.charAt(0).toUpperCase() + firstName.slice(1)} ${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`,
    email,
    username
  });

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();

    const newWishlist = await db.Wishlist.create({
      name: "New Wishlist",
      userId: user.id
    })

    login(req, res, user);
    res.locals.authenticated = true;
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('user-signup', {
      title: 'Sign Up',
      user,
      errors,
      firstName,
      lastName,
      email,
      username,
      csrfToken: req.csrfToken(),
    });
  }
}));

router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', { title: 'Log In', csrfToken: req.csrfToken() });
});

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address')
    .isEmail()
    .withMessage('Email Address is not a valid email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password')
]

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const validatorErrors = validationResult(req);
  const errors = [];


  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
      if (passwordMatch) {
        login(req, res, user);
        return res.redirect('/');
      }
    }

    errors.push(`Login failed for provided email and password.`)
  } else {
    errors = validatorErrors.array().map(error => error.msg);
  }

  res.render('user-login', {
    title: 'Log in',
    csrfToken: req.csrfToken(),
    email,
    errors
   })
}))

router.post('/demo-login', csrfProtection, asyncHandler(async (req, res, next) => {


      demoLogin(req, res);
      return res.redirect('/');


  // res.redirect('/');
}));



router.post('/logout', (req, res) => {
  logout(req, res);
  res.redirect('/');
})

module.exports = router;
