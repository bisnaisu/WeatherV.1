console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const searchData = document.querySelector('input')
const messageOne = document.querySelector('#msg1')
const messageTwo = document.querySelector('#msg2')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = searchData.value
    fetch(`http://localhost:3000/weather?address=${data}`).then((response) =>{
        response.json().then(data =>{
            if(data.error){
                messageOne.textContent = data.error
                messageTwo.textContent = '----------'
            }else{
                messageOne.textContent = `Location : ${data.location}`
                messageTwo.textContent=`Forecast : ${data.forecastData}`
            }
        })
    }).catch(e=>{
        messageOne.textContent = 'Couldnt find location'
        messageTwo.textContent = ' : "" ( '
    })
    console.log('Testing');
})

