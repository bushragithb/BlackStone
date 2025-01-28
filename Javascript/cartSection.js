/*CART SECTION*/
let shop=document.getElementById('product_list')
let basket=JSON.parse(localStorage.getItem("key"))||[];

let generateShop=()=>{
    return(shop.innerHTML=shopItemsData.map((allItems=>{
        let {id,name,price,img,imghover}=allItems;
        let search=basket.find((value)=>value.id===id)||[];
        return`
        <div id="product_id_${id}" class="prod_desc">
        <div>
          <a href="/Files/productSection.html">
            <img
              class="cart_image"
              src=${img}
              alt=""
            />
          </a>
        </div>
        <div>
          <h4 class="product_title">
            <a href="/Files/productSection.html">${name}</a>
          </h4>
          <p class="product_price">
            <a href="/Files/productSection.html">$${price} USD</a>
          </p>
          <a  onclick="increament(${id})"><button class="add_cart button button_purple button_stretch">
           Add to cart
          </button></a>
        </div>
        <div class="quantity_prod-none input-value quantity-display">
    <span class="plus" onclick="increament(${id})">+</span>
    <span  class="input" id=${id} >${search.item===undefined?0:search.item}</span>
    <span class="minus" onclick="decreament(${id})">-</span>
  </div>
      </div>
        `;
    }))

    .join(""))
}
generateShop();
let increament=(id)=>{

    let selectedItem=id;
    let search=basket.find((value)=>value.id===selectedItem)  
  if(search===undefined){
    basket.push({
        id:selectedItem,
        item:1
     })
  }
  else{
    search.item+=1;
  }
    
  viewcart();
  viewOption.style.display = "block";
     update(selectedItem);

     localStorage.setItem("key",JSON.stringify(basket));
    }
let decreament=(id)=>{
    let selectedItem=id;
    let search=basket.find((value)=>value.id===selectedItem)  
    if(search===undefined) return;
    else if(search.item===0) return;
  else{
    search.item-=1;
  }
  update(selectedItem);
  basket=basket.filter((x)=>x.item!==0);
  
  localStorage.setItem("key",JSON.stringify(basket));
    
}
let update=(id)=>{
 let search=basket.find((value)=>value.id===id)
 document.getElementById(id).innerHTML=search.item;
 //console.log(search.item)
 calcuation(); 
 viewcart();
 localStorage.setItem("key",JSON.stringify(basket));
}
let calcuation=()=>{
let cartIcon=document.getElementById('cart_text')

let quantity=basket.map((value)=>value.item).reduce((value,y)=>value+y,0)
cartIcon.innerHTML=quantity;

}
calcuation();
let viewOption = document.getElementById("cart_box");

let viewcart = () => {
  let quantity = basket.map((value) => value.item).reduce((value, y) => value + y, 0);

  if (quantity > 0) {
    let { id } = basket[basket.length - 1];
    let search = shopItemsData.find((y) => y.id === id) || {};

    viewOption.innerHTML = `
    <div class="cart_boxwrap">
      <div class="cross_icon">
        <span class="item_check">
          <svg
            class="icon_cross"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0.3"
              d="m5 12 4.7 4.5 9.3-9"
            />
          </svg>
          <p>Item added to your cart</p>
        </span>
        <span id="cross_btn" onclick="closeBox()">
          <svg
            class="icon_cross"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M6 18 18 6m0 12L6 6"
            />
          </svg>
        </span>
      </div>
      <div class="image_cart_flex">
        <img src=${search.img} alt="" />
        <h4>${search.name}</h4>
      </div>
      <div class="btn_incart">
        <a href="/Files/cart.html">
          <button class="button button_purple button_stretch">
            View Cart ( ${quantity} )
          </button>
        </a>
        <button class="button button_purple button_stretch">Check out</button>
        <a class="prod_link" href="/Files/Shop.html">Continue Shopping</a>
      </div>
      </div>
    `;
  } else {
    // If the basket is empty, clear the cart box
    viewOption.style.display = "none";
  }
};

viewcart();


let toggleCartBox = () => {
  if (viewOption.style.display === "none" ) {
    viewcart(); 
    viewOption.style.display = "block";
  } else {
    viewOption.style.display = "none";
  }
};

let closeBox = () => {
  viewOption.style.display = "none";
};


/*HEADER SECTION*/

let header=document.getElementById("header");

const headerContainer = document.createElement("div");
headerContainer.classList.add("header");

const h2Element = document.createElement("h2");
h2Element.innerHTML = "Introducing BlackStone";

const h1Element = document.createElement("h1");
h1Element.innerHTML = "The fashionable <br /> solution to pesky <br /> drawstring loss!";

const aElement = document.createElement("a");
aElement.href = "/Files/Shop.html";

const buttonElement = document.createElement("button");
buttonElement.classList.add("button", "button_white", "button_stretch");
buttonElement.innerHTML = "Shop";

aElement.appendChild(buttonElement);

headerContainer.appendChild(h2Element);
headerContainer.appendChild(h1Element);
headerContainer.appendChild(aElement);

header.appendChild(headerContainer)

/* SECTION B*/
let hero=document.getElementById("section-b")
hero.innerHTML=`<div class="grid_1x2 section-b">
<div class="hero-img-wrap">
  <img class="hero-img" src="/Images/Strings-8.25-GIF.webp" alt="" />
</div>
<div class="hero-wrap">
  <div class="hero">
    <h1>Hold Onto Your Style</h1>
    <p>
      BlackStonenene keep your strings on your clothes and accessorize, well,
      anything they fit.
    </p>
    <a href="/Files/Shop.html"><button class="button button_purple button_stretch">Shop</button></a>
  </div>
</div>
 </div>`


/**marquee*/
let scrollbar=document.getElementById("scrollBar")

const scrollBarContainer = document.createElement("div");
scrollBarContainer.classList.add("scrollBar");

for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.innerHTML = "COLLECT THEM";
    scrollBarContainer.appendChild(span);
}

scrollbar.appendChild(scrollBarContainer);


/**SectionE**/

const sectionE = document.getElementById("sectionE");

const partFlex = document.createElement("div");
partFlex.classList.add("part-flex");

const partsData = [
    {
        imgSrc: "https://cdn.shopify.com/s/files/1/0652/3872/8949/files/2_0f6fc64a-8ea6-41b1-a225-c5338412a380.webp?v=1692212359",
        heading: "Next Day Dispatch",
        content: "All orders placed before 3pm EST Monday to Friday are processed next day."
    },
    {
        imgSrc: "https://cdn.shopify.com/s/files/1/0652/3872/8949/files/1_b00750ff-c964-4172-b850-90722146b384.webp?v=1692212359",
        heading: "Fast Delivery",
        content: "A free fully trackable 2-3 day delivery service is available on all orders."
    },
    {
        imgSrc: "https://cdn.shopify.com/s/files/1/0652/3872/8949/files/3_5c14ebfd-84c6-47b7-979c-0e2d84c30a3b.webp?v=1692212359",
        heading: "Exchange & Returns",
        content: "We are here to help. Reach out to us directly at info@BlackStonene.com"
    }
];
partsData.forEach(part => {
   
    const partDiv = document.createElement("div");
    partDiv.classList.add("part-se");

    const img = document.createElement("img");
    img.src = part.imgSrc;
    img.alt = "icon";
    img.classList.add("img-icon");

    const headingSpan = document.createElement("span");
    headingSpan.classList.add("part-heading");
    headingSpan.textContent = part.heading;

    const contentSpan = document.createElement("span");
    contentSpan.classList.add("part-content");
    contentSpan.textContent = part.content;

    partDiv.appendChild(img);
    partDiv.appendChild(headingSpan);
    partDiv.appendChild(contentSpan);

    partFlex.appendChild(partDiv);
});

sectionE.appendChild(partFlex);



