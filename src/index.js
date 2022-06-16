console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
.then( response => response.json())
.then(displayDogImg)

function displayDogImg(dogs){
    dogs.message.forEach( dog => {
        let dogId = document.querySelector("#dog-image-container")
        let img = document.createElement('img')
        img.src = dog;
        img.className = "image-fluid";

        dogId.appendChild(img)
        
    });
}


const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then( response => response.json())
.then(displayDogBreed)

function displayDogBreed(bread){
    for(let breed in bread.message){
        let list = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.innerHTML =  breed
        list.appendChild(li)
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    let selectElements = document.querySelector('#breed-dropdown');
    if(selectElements){
        selectElements.addEventListener('change', selected)
    
    }
    
    function selected(){
      let filterItems = selectElements.value;
      fetch(breedUrl)
        .then( response => response.json())
        .then(displayDogBreedCode)
    
        function displayDogBreedCode(bread){
            console.log(filterItems)
            document.getElementById("dog-breeds").innerHTML = '';
            for(let breed in bread.message){
                if(breed.charAt(0) === filterItems.charAt(0)){
                    let lists = document.getElementById('dog-breeds')
                    let lis = document.createElement('li')
                    lis.innerHTML =  breed
                    console.log(breed)
                    lists.appendChild(lis)
                }
                
             }
         }
     }
 })