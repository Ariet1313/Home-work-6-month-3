


document.querySelector('.contact_container_form').addEventListener('submit',(event)=>{
    event.preventDefault()
    const fullName = document.querySelector('.contact_container_form input').value
    const textAreaValue = document.getElementById('desc_telega').value

    const params = {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            chat_id:-4210520413 ,
            text:`
            Фото${fullName}\nОписание :${textAreaValue}
            `
        })
    }

    fetch('https://api.telegram.org/bot7207231079:AAFR21ydwp2ekBoB3ZTgIuQcPFQiCT9DD7U/sendMessage',params).then((res)=>{
        console.log(res);
    })

})
