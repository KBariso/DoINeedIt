'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Items', [
     {
       name: 'SO Averyy Ankle Boots',
       price: 25.49,
       link: 'https://www.kohls.com/product/prd-4911608/so-averyy-womens-ankle-boots.jsp?color=Black&prdPV=1',
       purchased: false,
       categoryId: 6,
       wishListId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Singstation Karaoke System',
      price: 129.99,
      purchased: false,
      categoryId: 11,
      wishListId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'All The Missing Girls by Megan Miranda',
      price: 9.45,
      link: 'https://www.amazon.com/All-Missing-Girls-Megan-Miranda/dp/1501107976',
      purchased: false,
      categoryId: 3,
      wishListId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'The Lifeboat by Charlotte Rogan',
      price: 15.26,
      link: 'https://www.amazon.com/Lifeboat-Novel-Charlotte-Rogan/dp/0316185906',
      purchased: false,
      categoryId: 3,
      wishListId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Cat's Cradle by Kurt Vonnegut",
      price: 9.29,
      link: 'https://www.amazon.com/Cats-Cradle-Novel-Kurt-Vonnegut/dp/038533348X',
      purchased: false,
      categoryId: 3,
      wishListId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pokemon The First Movie',
      price: 10.22,
      link: 'https://www.amazon.com/Pokemon-First-Movie-Mewtwo-vs/dp/6305756430',
      purchased: false,
      categoryId: 2,
      wishListId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Psychonauts 2',
      price: 59.99,
      link: 'https://store.steampowered.com/app/607080/Psychonauts_2/',
      purchased: false,
      categoryId: 2,
      wishListId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Epson Home Cinema 5050UB',
      price: 3000,
      purchased: false,
      categoryId: 1,
      wishListId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung QN90A QLED',
      price: 2199.99,
      link: 'https://www.bestbuy.com/site/samsung-65-class-qn90a-neo-qled-4k-uhd-smart-tizen-tv/6452320.p?acampID=0&cmp=RMX&irclickid=3Z4XFZ1f5xyLTPo0TWXZ0S3wUkGww2Tpuzkzz80&irgwc=1&loc=RTINGS.com&mpid=1989377&ref=198&refdomain=rtings.com&skuId=6452320',
      purchased: false,
      categoryId: 1,
      wishListId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sony HT-A7000',
      price: 1298,
      purchased: false,
      categoryId: 1,
      wishListId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Radeon RX 6800 XT',
      price: 1649,
      link: 'https://www.amazon.com/dp/B08QV6T8TG?tag=georiot-us-default-20&th=1&psc=1&ascsubtag=tomshardware-us-6158457424630456000-20&geniuslink=true',
      purchased: false,
      categoryId: 1,
      wishListId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'How Beautiful We Were',
      price: 23.49,
      purchased: true,
      categoryId: 3,
      wishListId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Intimacies',
      price: 15.95,
      purchased: true,
      categoryId: 3,
      wishListId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'The Love Songs of W.E.B. Du Bois',
      price: 21.27,
      purchased: true,
      categoryId: 3,
      wishListId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Cole Haan Nantucket 2.0',
      price: 89.99,
      link: 'https://www.dsw.com/en/us/product/cole-haan-nantucket-2.0-sneaker/501870?activeColor=200',
      purchased: false,
      categoryId: 6,
      wishListId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Vans Ward Lo Suede',
      price: 64.99,
      link: 'https://www.dsw.com/en/us/product/vans-ward-lo-suede-sneaker---mens/366689?activeColor=001',
      purchased: false,
      categoryId: 6,
      wishListId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Birkenstock Boston Clog',
      price: 144.99,
      link: 'https://www.dsw.com/en/us/product/birkenstock-boston-clog---mens/499207?activeColor=200',
      purchased: true,
      categoryId: 6,
      wishListId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ribs',
      price: 17.50,
      purchased: true,
      categoryId: 8,
      wishListId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Brie Cheese',
      price: 24.35,
      purchased: false,
      categoryId: 8,
      wishListId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Potatoes',
      price: 5,
      purchased: false,
      categoryId: 8,
      wishListId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Drop Stop',
      price: 24.99,
      link: 'https://www.amazon.com/Drop-Stop-Original-Patented-Filler/dp/B00BYH6C1E/ref=sr_1_2?keywords=car+accessories&qid=1639643774&sr=8-2',
      purchased: false,
      categoryId: 10,
      wishListId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Crewneck Long Sleeve Sweater Dress',
      price: 49,
      link: 'https://www.nordstrom.com/s/bp-easy-crewneck-long-sleeve-sweater-dress/5699532?origin=category-personalizedsort&breadcrumb=Home%2FWomen%2FClothing%2FDresses&color=210',
      purchased: false,
      categoryId: 6,
      wishListId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Hyundai Kona',
      price: 28450,
      purchased: false,
      categoryId: 10,
      wishListId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bowl of Beauty',
      price: 17.60,
      purchased: true,
      categoryId: 5,
      wishListId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bird of Paradise',
      price: 5.98,
      purchased: true,
      categoryId: 5,
      wishListId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Lettuce and Greens Vegetable Seeds',
      price: 10.95,
      purchased: true,
      categoryId: 5,
      wishListId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'All Purpose Garden Soil',
      price: 8.97,
      purchased: true,
      categoryId: 5,
      wishListId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marvin the Moose Plush',
      price: 7.25,
      link: 'https://www.chewy.com/kong-cozie-marvin-moose-plush-dog-toy/dp/47739',
      purchased: false,
      categoryId: 9,
      wishListId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Monk The Complete DVD Series',
      price: 49.96,
      link: 'https://www.walmart.com/ip/Monk-The-Complete-Series-DVD/603488925',
      purchased: false,
      categoryId: 2,
      wishListId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Airpods',
      price: 179,
      link: 'https://www.apple.com/shop/product/MME73AM/A/airpods-3rd-generation',
      purchased: false,
      categoryId: 1,
      wishListId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Gucci Ghost Silver Ring',
      price: 270,
      link: 'https://www.nordstrom.com/s/gucci-ghost-silver-ring/5757228?origin=category-personalizedsort&breadcrumb=Home%2FMen%2FAccessories%2FJewelry%20%26%20Cuff%20Links%2FRings&color=040',
      purchased: false,
      categoryId: 6,
      wishListId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Viktor & Rolf Flowerbomb',
      price: 85,
      purchased: false,
      categoryId: 7,
      wishListId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Bleu De Chanel',
      price: 100,
      purchased: false,
      categoryId: 7,
      wishListId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dior Sauvage',
      price: 155,
      purchased: true,
      categoryId: 7,
      wishListId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Ainope Gravity Phone Holder",
      price: 14.44,
      purchased: false,
      categoryId: 10,
      wishListId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Rove Dash Cam",
      price: 119.99,
      link: 'https://www.amazon.com/R2-4K-Dashboard-Camera-Recorder-Vision/dp/B074JT3698/ref=sr_1_3?_encoding=UTF8&c=ts&keywords=Vehicle+Electronics&qid=1639645229&s=electronics&sr=1-3&ts_id=3248684011',
      purchased: false,
      categoryId: 10,
      wishListId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mkbrother 5% tint",
      price: 36.48,
      purchased: false,
      categoryId: 10,
      wishListId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Baden Volleyball Set",
      price: 120.20,
      purchased: false,
      categoryId: 5,
      wishListId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Nexgrill 4-Burner Gas Grill",
      price: 349,
      link: 'https://www.homedepot.com/p/Nexgrill-4-Burner-Propane-Gas-Grill-in-Stainless-Steel-with-Side-Burner-720-0830X/314142054',
      purchased: false,
      categoryId: 5,
      wishListId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Items', null, {});
  }
};
