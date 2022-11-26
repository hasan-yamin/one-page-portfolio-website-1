/// Header ///
let headerBtns: HTMLLIElement[] = <HTMLLIElement[]><unknown>document.querySelectorAll('#nav-bar ul li')
headerBtns.forEach(btn => {
    // console.log(btn)
    btn.addEventListener('click', function () {
        // remove class active fromm last active
        var current: HTMLLIElement[] = <HTMLLIElement[]><unknown>document.querySelectorAll('#nav-bar ul li.active')
        current[0].classList.remove('active')
        // add class active to current btn
        btn.classList.add('active')
    })
})
/// End Header ///

/// about me ///
let showAboutDetails: HTMLButtonElement = <HTMLButtonElement><unknown>document.getElementById('show-about-details')
showAboutDetails.addEventListener('click', function () {
    console.log('test')
    let AboutDetails: HTMLDivElement = <HTMLDivElement><unknown>document.getElementById('about-full-details')
    AboutDetails.style.display = 'block'
})
/// End About me ///



let btns: HTMLSpanElement[] = <HTMLSpanElement[]><unknown>document.querySelectorAll('#myBtnContainer span')

btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        // remove class active fromm last active
        var current: HTMLSpanElement[] = <HTMLSpanElement[]><unknown>document.querySelectorAll('#myBtnContainer .active')
        current[0].classList.remove('active')

        // get all elements will be filtered
        let allElm: HTMLDivElement[] = <HTMLDivElement[]><unknown>document.querySelectorAll('#project-cards .filterDiv')

        // check type of sellected btn
        if (btn.getAttribute('data-tp') === 'all') {
            // add show class to all elements
            allElm.forEach((elm) => {
                elm.classList.add('show')
            })
        } else {
            // show class will be added to current type of filter
            allElm.forEach((elm) => {
                let s: string | null = btn.getAttribute('data-tp')
                if (s !== null) {
                    if (elm.classList.contains(s)) {
                        elm.classList.add('show')
                    } else {
                        elm.classList.remove('show')
                    }
                }

            })
        }
        // add class active to current btn
        btn.classList.add('active')
    })
})

// feedback
let feedbacks: {
    imgSrc: string;
    position: string;
    name: string;
    desc: string;
}[] = [
        {
            imgSrc: "../imgs/about1.png",
            position: "CEO at Google",
            name: "Hasan KY",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum labore nulla optio iure nemo quisquam, dolor deserunt beatae ipsum eligendi, quos voluptates, corrupti nobis excepturi? Reprehenderit ipsa accusamus quasi esse."
        },
        {
            imgSrc: "../imgs/about1.png",
            position: "facebook",
            name: "Osama A",
            desc: " dolor sit amet Lorem ipsum, consectetur adipisicing elit. Eum labore nulla optio iure nemo quisquam, dolor deserunt beatae ipsum eligendi, quos voluptates, corrupti nobis excepturi? Reprehenderit ipsa accusamus quasi esse."
        },
        {
            imgSrc: "../imgs/about1.png",
            position: "freelance",
            name: "Ahmad KK",
            desc: "consectetur adipisicing elit. Lorem ipsum dolor sit amet,  Eum labore nulla optio iure nemo quisquam, dolor deserunt beatae ipsum eligendi, quos voluptates, corrupti nobis excepturi? Reprehenderit ipsa accusamus quasi esse."
        }
    ]

show_feedbacks(feedbacks);
changeCards()
function show_feedbacks(feedbacks: any[]) {
    // adding first 10 profiles on the page
    let feedbackCards: HTMLDivElement | null = <HTMLDivElement>document.getElementById("feedback-cards");
    feedbackCards.innerHTML = ''
    // console.log("feedbacks.length : " + feedbacks.length);
    // Show the first 10 profiles on the page
    for (let i = 0; i < feedbacks.length; i++) {
        let cardContent: string = `
            <div class="pic"><img src="${feedbacks[i].imgSrc}"></div>
            <div class="disc">
                <p>${feedbacks[i].desc}</p>
                <h3>${feedbacks[i].name}</h3>
                <span>${feedbacks[i].position}</span>
            </div> `
        let card: HTMLDivElement = document.createElement('div')
        card.classList.add("card")
        card.innerHTML = cardContent
        feedbackCards.appendChild(card);
        if (i === 1)
            break
    }
}
function changeCards() {
    const myTimeout = setTimeout(function () {
        // shift feedbacks array 1 element backward
        feedbacks.push(feedbacks.shift());
        // update feeds on screen
        show_feedbacks(feedbacks);
        changeCards()
    }, 3000)
}


// next and previous feeds
let pervFeed: HTMLDivElement | null = <HTMLDivElement>document.getElementById("prev-feed");
let nextFeed: HTMLDivElement | null = <HTMLDivElement>document.getElementById("next-feed");
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
function initMap(): void {
    // The location of Uluru
    const uluru = { lat: 24, lng: 130 };
    // The map, centered at Uluru
    const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
            zoom: 4,
            center: uluru,
        }
    );

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

declare global {
    interface Window {
        initMap: () => void;
    }
}
window.initMap = initMap;

/// contact me ///
function sendContactMsg(msg: { name: string, email: string, sub: string, content: string }) {
    // msg.preventDefault
    // send to data base
    console.log('name: ' + msg.name)
    console.log('email: ' + msg.email)
    console.log('sub: ' + msg.sub)
    console.log('content: ' + msg.content)
}

/// End contact me ///

