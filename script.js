const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\\ s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 

    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 

    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 

    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 

    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\\ s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Settiamo le costanti
const items= document.getElementById("items");
const previus= document.getElementById("previus");
const next= document.getElementById("next");
const thumbnail= document.getElementById("thumbnail");

// Con il ciclo forEach andiamo a prendere gli elementi negli oggetti
images.forEach((element)=>{
    const item =`<div class= "item">
                    <img src="${element.image}" alt="image">
                    <h4>${element.title}</h4>
                    <span>${element.text}</span>
                </div>`
                
                
    items.innerHTML += item;

    const thumb = `<div class="thumb opacity"><img src="${element.image}" alt="image"></div>`;
    thumbnail.innerHTML += thumb;
});

let firstImage= 0;

// Selezioniamo gli elementi creati
const containerItems = document.querySelectorAll("#items .item");
containerItems[firstImage].classList.add('active');

// Selezioniamo anche per la thumbnail
const opacity= document.querySelectorAll(".thumb")
opacity[firstImage].classList.remove('opacity');

// Facciamo funzionare le frecce
next.addEventListener('click', nextFunction)

function nextFunction(){

    // Rimuoviamo la classe active alla prima immagine
    containerItems[firstImage].classList.remove('active');

    // Aggiungiamo la classe opacity alla prima immagine di thumbnail
    opacity[firstImage].classList.add('opacity');


    // Passiamo all'item successivo
    firstImage++;

    // Quando la classe active arriverà all'ultimo elemento
    if(firstImage == images.length){

        // Gli diciamo di tornare a 0 per creare il loop
        firstImage = 0;
    }

    // Aggiungiamo active all'item successivo
    containerItems[firstImage].classList.add('active');
    // Leviamo l'opacità all'item successivo
    opacity[firstImage].classList.remove('opacity');
  
}

previus.addEventListener('click', previusFunction)

function previusFunction(){
    
    // Rimuoviamo la classe active alla prima immagine
    containerItems[firstImage].classList.remove('active');

    // Aggiungiamo la classe opacity alla prima immagine di thumbnail
    opacity[firstImage].classList.add('opacity');

    // Diciamo di farlo per le precedenti in questo caso
    firstImage--;

    // Quando la classe active arriverà al primo elemento
    if(firstImage < 0){

        // Gli diciamo tornare all'ultima immagine
        firstImage = images.length -1;
    }

     // La riaggiungiamo per creare il loop
    containerItems[firstImage].classList.add('active');

     // La leviamo sempre per il loop
     opacity[firstImage].classList.remove('opacity');
}