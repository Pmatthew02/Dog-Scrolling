function get_random(){
    url = 'https://dog.ceo/api/breeds/image/random'
    
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        display_image(data.message)
    })
    .catch(function(error){
        console.log('Error:' + error)
    })
}
function display_image(image_url){
    document.getElementById('image').src = image_url
}



const text = document.querySelector('.scrolling')
const strText = text.textContent;
const splitText = strText.split('')
text.textContent = ''
for(let i = 0; i < splitText.length; i++){
    text.innerHTML += '<span>'+ splitText[i] + '</span>'
}

let char = 0
let timer = setInterval(onTick,50)

function onTick(){
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if(char === splitText.length){
        complete()
        return;
    }
}

function complete(){
     clearInterval(timer)
     timer = null
}