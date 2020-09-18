// local info data

const reviewData = [
    {
        id: 1,
        name: 'Totan Debnath',
        job: 'Software Engineer',
        img: 'images/totan.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 2,
        name: 'Rana Barman',
        job: 'UX Designer',
        img: 'images/rana.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 3,
        name: 'Rangeet Nandy',
        job: 'Web Developer',
        img: 'images/rangeet.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 4,
        name: 'Sourav Pramanik',
        job: 'Web Designer',
        img: 'images/pramanik.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 5,
        name: 'Bikram Saha',
        job: 'Andoid Developer',
        img: 'images/bikram.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 6,
        name: 'Andrew Strauss',
        job: 'Dibugger',
        img: 'images/andrew.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 7,
        name: 'Sourav Kundu',
        job: 'Full STACK Web Developer',
        img: 'images/person1.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 8,
        name: 'Surajit Kundu',
        job: 'Data Scientist',
        img: 'images/surajit.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 9,
        name: 'Alina Gomez',
        job: 'Software Developer',
        img: 'images/alina.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 10,
        name: 'Aloke Raha',
        job: 'ML Expert',
        img: 'images/aloke.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    },
    {
        id: 11,
        name: 'Angela Amet',
        job: 'Full STACK Web Developer',
        img: 'images/angela.png',
        info:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deserunt aperiam itaque odio in aliquam mollitia nobis sed eligendi quis."
    }
];


const imageSelector = document.getElementById('image');
const authorSelector = document.getElementById('author');
const jobSelector = document.getElementById('job');
const infoSelector = document.getElementById('info');

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const randomButton = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    personData();
});

function personData() {
    const item = reviewData[currentItem];
    imageSelector.src = item.img;
    authorSelector.textContent = item.name;
    jobSelector.textContent = item.job;
    infoSelector.textContent = item.info;
}

// const randomNumber = () => {
//     currentItem = Math.floor(Math.random()*12);
// }

nextButton.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviewData.length - 1) {
        currentItem = 0;
    }
    personData();
    // console.log(currentItem);
});

prevButton.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        // console.log(currentItem);

        currentItem = reviewData.length - 1;
    }
    personData();
    // console.log(currentItem);

});

randomButton.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * 11);
    personData();
})