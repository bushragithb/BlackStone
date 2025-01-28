/*SECTION A*/
const aboutHeader = document.getElementById("about-header");

const headerImg = document.createElement("img");
headerImg.src = "https://zed.com.pk/cdn/shop/files/hoodies-and-jackets.jpg?v=1613728729";
headerImg.alt = "image";

aboutHeader.appendChild(headerImg);

/*SECTION B*/

const aboutProduct = document.getElementById("about-product")

const aboutFlex = document.createElement("div");
aboutFlex.classList.add("about-flex");

const productContent = document.createElement("div");
productContent.classList.add("product-content");

const productHeading = document.createElement("h1");
productHeading.innerHTML = "Our Products";

const productParagraphs = [
    "Have you ever experienced that sinking feeling when you pull your favorite hoodie out of the washer, to find one of the drawstrings wholly lost? We've all felt that frustration. But fear not, the solution has arrived, called BlackStone™.",
    "Say goodbye to those moments of drawstring dread, as BlackStone™ is here to end the hassle once and for all. From hoodies to footwear, BlackStone™ has you covered, literally.",
    "BlackStone™ are stylish collectible accessories that prevent the loss of drawstrings, while accessorizing your look. They are collectible and come in different shapes, designs and colors, creating limitless possibilities for all ages, styles, and brand partnership opportunities."
];

productContent.appendChild(productHeading);
productParagraphs.forEach(text => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    productContent.appendChild(paragraph);
});

const productImg = document.createElement("div");
productImg.classList.add("product-img");

const img = document.createElement("img");
img.src = "/Images/shirts.webp";
img.alt = "";

productImg.appendChild(img);

aboutFlex.appendChild(productContent);
aboutFlex.appendChild(productImg);

aboutProduct.appendChild(aboutFlex);


/*SECTION C*/

const aboutUsWrap = document.getElementById("about-us-wrap")

const aboutUs = document.createElement("div");
aboutUs.classList.add("about-us");

const aboutUsHeading = document.createElement("h1");
aboutUsHeading.textContent = "ABOUT US";

const aboutUsParagraph = document.createElement("p");
aboutUsParagraph.textContent = "We've created a product that embodies limitless possibilities. As the ultimate brand for fashionable yet functional collectible drawstring accessories, we're reshaping how individuals express their unique style in exciting new ways. Our vision is to cultivate a world where people of all ages and backgrounds confidently embrace their individuality, crafting their own one-of-a-kind creations. We fulfill this vision through innovative designs, collectibility, and an unwavering commitment to self-expression.";

aboutUs.appendChild(aboutUsHeading);
aboutUs.appendChild(aboutUsParagraph);

aboutUsWrap.appendChild(aboutUs);


const abtValues = document.getElementById("abt-values");


const valueHeading = document.createElement("div");
valueHeading.classList.add("value-heading");

const valuesHeading = document.createElement("h1");
valuesHeading.textContent = "OUR VALUES";

valueHeading.appendChild(valuesHeading);

const grid = document.createElement("div");
grid.classList.add("grid-3x2");

const values = [
    { title: "UNAPOLOGETIC OPTIMISTS", text: "We envision a limitless world of possibilities, unlocked through a ripple effect of positive change, fostering belonging and community celebration, cherishing the inherent differences as shared experiences." },
    { title: "INHERENTLY FUNCTIONAL", text: "We embrace functionality in our designs and operations, ensuring that our accessories serve a practical purpose while elevating personal style." },
    { title: "BRILLIANTLY VIBRANT", text: "Our energy is vibrant and infectious, spreading positivity and enthusiasm wherever we go." },
    { title: "IMAGINATIVELY EXPRESSIVE", text: "We empower individuals to be expressive and showcase their unique identities through our diverse range of BlackStonene, enabling them to tell their own fashion narratives." },
    { title: "DELIGHTFULLY INCLUSIVE", text: "We celebrate the uniqueness of every individual and stand together with all diverse expressions, empowering everyone to embrace themselves and one-of-a-kind style." },
    { title: "ENTHUSIASTICALLY COLLECTIBLE", text: "We take pride in creating collectible shareable moments, each piece thoughtfully designed to embrace the uniqueness of each individual." }
];

values.forEach((value,index) => {
    const valueDiv = document.createElement("div");
    valueDiv.classList.add(`about-${index + 1}`, "about-parts");

    const valueTitle = document.createElement("h2");
    valueTitle.textContent = value.title;

    const valueText = document.createElement("p");
    valueText.textContent = value.text;

    valueDiv.appendChild(valueTitle);
    valueDiv.appendChild(valueText);

    grid.appendChild(valueDiv);
});

abtValues.appendChild(valueHeading);
abtValues.appendChild(grid);


document.body.appendChild(aboutHeader);
document.body.appendChild(aboutProduct);
document.body.appendChild(aboutUsWrap);
document.body.appendChild(abtValues);
