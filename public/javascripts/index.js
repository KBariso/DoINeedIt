window.addEventListener("load", (event)=>{
    const checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', e => {
            const item = e.target;
            console.log(item.id)
            console.log(item.value)
            if(item.checked) item.value = false
            else item.value = true;
            console.log(item.checked)
            console.log(item.value)
            console.log(item.get)
        })
    })
})
