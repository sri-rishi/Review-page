const review = [
    {
        id: 1,
        image: "images/susan-review.png",
        author: "Susan Smith",
        job: 'WEB DEVELOPER',
        info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    },
    {
        id: 2,
        image: "images/anna-review.png",
        author: "Anna Johnson",
        job: "WEB DESIGNER",
        info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
    },
    {
        id: 3,
        image: "images/peter-review.png",
        author: "Peter Jones",
        job: "INTERN",
        info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        id: 4,
        image: "images/bill-review.png",
        author: "Bill Anderson",
        job: "THE BOSS",
        info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
]

const image = document.getElementById("image");
const author = document.getElementById('author');
const job = document.getElementById("job");
const info = document.getElementById("info");

const btnAfter = document.getElementById("btn-after");
const btnPrevious = document.getElementById("btn-previous");
const randomBtn = document.getElementById("btn-random")
let currentItem = 0;



const showPerson = (person) => {
    const item = review[person];
    image.src = item.image;
    author.textContent = item.author;
    job.textContent = item.job;
    info.textContent = item.info
}

btnAfter.addEventListener('click', () => {

    currentItem++;
    if(currentItem > review.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

btnPrevious.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener('click', () => {

currentItem = Math.floor(Math.random() * review.length);
showPerson(currentItem);
})