//API URL
document.addEventListener('DOMContentLoaded',function(){
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
    const options = {
	    method: 'GET',//Get Method -> to retreive the data
	    headers: {
		    'X-RapidAPI-Key': '7806afbf6dmsh188f3d7d27fdbeep164c6bjsn7ecc3ec66c81',
		    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	    }
    };

    let result;
    const gameList = document.getElementById('game-list');
    function displayGames(games){
      gameList.innerHTML = '';
      games.forEach(game =>{
        const div = document.createElement('div');
        //to get names/title of the games
        const li =document.createElement('li');
        li.textContent = game.title;
        div.appendChild(li);
        //to add images of the games
        const image = document.createElement('img');
        image.src=game.thumbnail;
        image.alt=game.title;
        gameList.appendChild(image);
        //to get the game url
        const a = document.createElement('a');
        a.href= game.game_url;
        a.textContent = game.title;
        //to display the game url in a new tab
        a.target="_blank";
        div.appendChild(a);  
        //to get description about the game
        const p = document.createElement('p');
        p.textContent = game.short_description;
        div.appendChild(p); 
        gameList.appendChild(div); 
      });
    }
    fetchData();
  });
  
//load event for slideinleft
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.querySelector('.animate-1');
    const image = new Image();
    image.src = 'images/Marvel Spider-Man Miles Morales Key Art.jpg';
    image.onload = function () {
      textElement.classList.add('show');
    };
});

//wrapper

function handleIntersection(entries4, observer4) {
  entries4.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateX(100%)';
      observer.unobserve(entry.target);
    }
  });
}

const observer4 = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

const targetElement4 = document.querySelector('.wrapper');

if (targetElement4) {
  observer4.observe(targetElement4);
}

//wrapper-2
function handleIntersection(entries3, observer3) {
  entries3.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}

const observer3 = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

const targetElement3 = document.querySelector('.wrapper-2');

if (targetElement3) {
  observer3.observe(targetElement3);
}

//ANIMATIONS-> slideinleft

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in-left');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Use querySelectorAll to get all the elements with the class 'anim-slideInLeft'
const targetElements = document.querySelectorAll('.anim-slideInLeft');

// Use a forEach loop to observe each element
targetElements.forEach(targetElement => {
  observer.observe(targetElement);
});











  //animations -> slideinright

  function handleIntersection2(entries2, observer2) {
    entries2.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in-right');
        observer2.unobserve(entry.target);
      }
    });
 }

 const observer2 = new IntersectionObserver(handleIntersection2, { threshold: 0.5 });

 // Use querySelectorAll to get all the elements with the class 'anim-slideInRight'
 const targetElements2 = document.querySelectorAll('.anim-slideInRight');

 // Use a forEach loop to observe each element
 targetElements2.forEach(targetElement2 => {
    observer2.observe(targetElement2);
 });

 // Load event for slideinright
 document.addEventListener('DOMContentLoaded', function () {
    const textElements = document.querySelectorAll('.animate-2');
    const image = new Image();
    image.src = 'images/spider-man-remastered.jpeg';
    image.onload = function () {
      textElements.forEach(textElement => {
        textElement.classList.add('show-2');
      });
    };
 });


//toggle function
function toggleButton() {
  const button = document.querySelector('.button');
  button.classList.toggle('show');
}


//Asynchronous Function

async function fetchData() {
    try {
        const response = await fetch(url, options);
        result = await response.json();
        //to display the all data in an API
        
        displayGames(result);
    } catch (error) {
        console.error(error);
    }
}

const searchInput = document.querySelector('.input-search');

searchInput.addEventListener('keyup',(e)=>{
    const searchString = e.target.value.toLowerCase();
    const filterGames =result.filter((game) =>{
        return (game.title.toLowerCase().includes(searchString)|| game.short_description.toLowerCase().includes(searchString));
    });
    displayGames(filterGames);
});
