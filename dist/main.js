"use strict";
let btns = document.querySelectorAll('#myBtnContainer span');
btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        // remove class active fromm last active
        var current = document.querySelectorAll('#myBtnContainer .active');
        current[0].classList.remove('active');
        // get all elements will be filtered
        let allElm = document.querySelectorAll('#project-cards .filterDiv');
        // check type of sellected btn
        if (btn.getAttribute('data-tp') === 'all') {
            // add show class to all elements
            allElm.forEach((elm) => {
                elm.classList.add('show');
            });
        }
        else {
            // show class will be added to current type of filter
            allElm.forEach((elm) => {
                let s = btn.getAttribute('data-tp');
                if (s !== null) {
                    if (elm.classList.contains(s)) {
                        elm.classList.add('show');
                    }
                    else {
                        elm.classList.remove('show');
                    }
                }
            });
        }
        // add class active to current btn
        btn.classList.add('active');
    });
});
// feedback
let feedbacks = [
    {
        imgSrc: "../imgs/home1.png",
        position: "CEO at Google",
        name: "Harriet Maxwell",
        desc: "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you."
    },
    {
        imgSrc: "../imgs/home1.png",
        position: "facebook",
        name: "k Maxwell",
        desc: "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you."
    },
    {
        imgSrc: "../imgs/home1.png",
        position: "freelance",
        name: "Hasan",
        desc: "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you."
    }
];
show_feedbacks(feedbacks);
changeCards();
function show_feedbacks(feedbacks) {
    // adding first 10 profiles on the page
    let feedbackCards = document.getElementById("feedback-cards");
    feedbackCards.innerHTML = '';
    // console.log("feedbacks.length : " + feedbacks.length);
    // Show the first 10 profiles on the page
    for (let i = 0; i < feedbacks.length; i++) {
        let cardContent = `
            <div class="pic"><img src="${feedbacks[i].imgSrc}"></div>
            <div class="disc">
                <p>${feedbacks[i].desc}</p>
                <h3>${feedbacks[i].name}</h3>
                <span>${feedbacks[i].position}</span>
            </div> `;
        let card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = cardContent;
        feedbackCards.appendChild(card);
        if (i === 1)
            break;
    }
}
function changeCards() {
    const myTimeout = setTimeout(function () {
        // shift feedbacks array 1 element backward
        feedbacks.push(feedbacks.shift());
        // update feeds on screen
        show_feedbacks(feedbacks);
        changeCards();
    }, 3000);
}
// next and previous feeds
let pervFeed = document.getElementById("prev-feed");
let nextFeed = document.getElementById("next-feed");
// add event to next and previous buttons
nextFeed.addEventListener('click', function () {
    // shift feedbacks array 1 element backward
    feedbacks.push(feedbacks.shift());
    // update feeds on screen
    show_feedbacks(feedbacks);
});
pervFeed.addEventListener('click', function () {
    // shift feedbacks array 1 element forward
    feedbacks.unshift(feedbacks.pop());
    // update feeds on screen
    show_feedbacks(feedbacks);
});
// map
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
window.initMap = initMap;
//# sourceMappingURL=main.js.map