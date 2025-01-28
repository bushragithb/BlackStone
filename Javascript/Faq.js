
const faq = document.getElementById("faq");

const heading = document.createElement("h1");
heading.textContent = "FAQ's";

const subTitle = document.createElement("span");
subTitle.textContent = "Want to know more about BlackStone? Don't worry, we got you covered!";

const imageContainer = document.createElement("div");
imageContainer.classList.add("faq-image");

const image = document.createElement("img");
// image.src = "https://www.BlackStonene.com/cdn/shop/files/BlackStone_HOW_TO_BG.webp?v=1692735504&width=3000";
image.alt = "";

imageContainer.appendChild(image);
faq.appendChild(heading);
faq.appendChild(subTitle);
faq.appendChild(imageContainer);



let faqParts=document.getElementById("faq-part");
let generateParts=()=>{
  return(
    faqParts.innerHTML=accordionData.map((accordionItems=>{
      let {question,answer}=accordionItems;
      return` <div class="part">
      <span class="part-header">
        <h3>${question}</h3>
        <svg
          class="icon-chevron shrink"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 9-7 7-7-7"
          />
        </svg>

        <svg
          class="icon-chevron expand"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m5 15 7-7 7 7"
          />
        </svg>
      </span>

      <p class="faq-part-content">
        ${answer}
      </p>
    </div>`
    })).join("")
  )
}
generateParts();


let accordion=document.getElementsByClassName("part");
for( let i=0;i<accordion.length;i++){
  accordion[i].addEventListener('click',function(){
    this.classList.toggle('active');
    let expandIcon = document.getElementsByClassName('.expand')
    let shrinkIcon = document.getElementsByClassName('.shrink');
    expandIcon.style.display = content.classList.contains('active') ? 'block' : 'none';
    shrinkIcon.style.display = content.classList.contains('active') ? 'none' : 'block';

  })
}