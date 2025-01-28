// const slides = document.querySelectorAll(".slide");
// const sectionC = document.querySelector(".sectionC");
// let counter = 0;

// slides.forEach((slide, index) => {
//     for(let i=0;i<slide.length;i++){
//         if(counter===0){

//         }
//     }
//     if (index === 0) {
//         slide.style.top = "0";
//         slide.style.right = "0";
//         slide.style.width = "100px";
//         slide.style.height = "100px";
//         slide.style.filter = "blur(5px)";
//     } else if (index === 1) {
//         slide.style.top = "50%";
//         slide.style.left = "50%";
//         slide.style.transform = "translate(-50%, -50%)";
//     } else if (index === 2) {
//         slide.style.bottom = "0";
//         slide.style.right = "0";
//         slide.style.width = "50px";
//         slide.style.height = "50px";
//         slide.style.filter = "blur(5px)";
//     }
// });

// const slideImage = () => {
//     slides.forEach((slide, index) => {
    //     if (index === counter) {
    //         slide.style.zIndex = "1";
    //         slide.style.top = "50%";
    //         slide.style.left = "50%";
    //         slide.style.transform = "translate(-50%, -50%)";
    //         slide.style.width = "";
    //         slide.style.height = "";
    //         slide.style.filter = "";
    //     } else if (index === (counter + 1) % slides.length) {
    //         slide.style.top = "100%";
    //         slide.style.right = "0";
    //         slide.style.transform = "translate(0, -100%)";
    //     } else if (index === (counter + 2) % slides.length) {
    //         slide.style.top = "0";
    //         slide.style.right = "0";
    //         slide.style.transform = "none";
    //         slide.style.width = "50px";
    //         slide.style.height = "50px";
    //         slide.style.filter = "blur(5px)";
    //     } else {
    //         slide.style.zIndex = "0";
    //     }
    // });

//     sectionC.style.backgroundColor = colors[counter];
// };

const createSlider = () => {
    const sectionC = document.createElement('div');
    sectionC.classList.add('sectionC');
    sectionC.id = 'sectionC';

    const sectionWrap = document.createElement('div');
    sectionWrap.classList.add('sectionc-wrap');

    const sectionGrid = document.createElement('div');
    sectionGrid.classList.add('sectionC-grid');

    const sectionContent = document.createElement('div');
    sectionContent.classList.add('sectionc-content');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Tiny Accessory <br /> Enormous <br /> Expression`;

    const p = document.createElement('p');
    p.innerHTML = `Excite your wardrobe. Express your <br /> uniqueness and have fun with your style! <br /> Collect signature BlackStone before they <br /> run out.`;

    const aElement = document.createElement("a");
    aElement.href = "/Files/Shop.html";

    const button = document.createElement('button');
    button.classList.add('button', 'button_white', 'button_stretch');
    button.innerHTML = 'Shop';

    aElement.appendChild(button)

    sectionContent.appendChild(h1);
    sectionContent.appendChild(p);
    sectionContent.appendChild(aElement);

    const imageSlider = document.createElement('div');
    imageSlider.classList.add('image-slider');

    const imageSources = [
        "https://cdn.shopify.com/s/files/1/0652/3872/8949/files/HEART_FRNT.webp?v=1693313653",
        "https://cdn.shopify.com/s/files/1/0652/3872/8949/files/DONUT_FRNT.webp?v=1693313653",
        "https://cdn.shopify.com/s/files/1/0652/3872/8949/files/BASKETBALL_FRNT.webp?v=1693313653",
        "https://cdn.shopify.com/s/files/1/0652/3872/8949/files/EMOJI_FRNT.webp?v=1693313653",
        "https://cdn.shopify.com/s/files/1/0652/3872/8949/files/AFFIRMATION__I_AM.webp?v=1693313653"
    ];

    imageSources.forEach((src, index) => {
        const img = document.createElement('img');
        img.classList.add('slide', `pic-${index + 1}`);
        img.src = src;
        img.alt = 'Slider Images';
        imageSlider.appendChild(img);
    });

    const arrowButtons = document.createElement('div');
    arrowButtons.classList.add('sectionc-icons');

    const prevButton = document.createElement('button');
    prevButton.classList.add('arrow-btn');
    prevButton.innerHTML = `
        <svg class="arrow-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
        </svg>
    `;
    prevButton.addEventListener('click', goPrev);

    const nextButton = document.createElement('button');
    nextButton.classList.add('arrow-btn');
    nextButton.innerHTML = `
        <svg class="arrow-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12H5m14 0-4 4m4-4-4-4"/>
        </svg>
    `;
    nextButton.addEventListener('click', goNext);

    arrowButtons.appendChild(prevButton);
    arrowButtons.appendChild(nextButton);

    sectionGrid.appendChild(sectionContent);
    sectionGrid.appendChild(imageSlider);

    sectionWrap.appendChild(sectionGrid);
    sectionWrap.appendChild(arrowButtons);

    sectionC.appendChild(sectionWrap);

    return sectionC;
};
let counter=0;
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
    sectionC.style.backgroundColor = colors[counter];
};

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImage();
};

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage();
};

const sectionC = createSlider();
document.getElementById("sectionC").appendChild(sectionC);


const slides = sectionC.querySelectorAll('.slide');
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const colors = ["#9300F5", "#00DDE2", "#FFD600", "#FF03E7", "#00AAE6"];
