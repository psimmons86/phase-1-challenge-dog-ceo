console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

// fetch("https://dog.ceo/api/breeds/image/random/4", {} )
// .then (res => res.json(())
// .then(function(dogResponse)) {
//     console.log(dogResponse)

// }

// fetch('https://dog.ceo/api/breeds/image/random/4')

// fetch(imgUrl) 
// .then(resp => resp.json())
// .then(json => console.log(json));


const breedUrl = 'https://dog.ceo/api/breeds/list/all';

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json()) 
.then(function(dogList) {
    // debugger
    // console.log(dogList)
    let dogsUL = document.querySelector("ul#dog-breeds")
    // for 
    let dogLine = document.createElement("li")
    // debugger
    dogLine.innerHTML = dogList.message.map 
    debugger
    dogsUL.append(dogLine)
})
// .then(json => console.log(dogList));

     

