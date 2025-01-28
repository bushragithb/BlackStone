let basket=JSON.parse(localStorage.getItem("key"))||[];

let ShoppingItem=document.getElementById("product_section")
let label=document.getElementById("total-price")
let cartHeading=document.getElementById("cart_start")
let calcuation=()=>{
    let cartIcon=document.getElementById('cart_text')  
    let quantity=basket.map((value)=>value.item).reduce((value,y)=>value+y,0)
    cartIcon.innerHTML=quantity;
    }
    calcuation();

    let heading=document.createElement("div")
    heading.classList.add("cart-heading")
    let headingCart=document.createElement("h1")
    headingCart.innerHTML="Your Cart"

    heading.appendChild(headingCart)
    cartHeading.appendChild(heading)

    let table=document.createElement("table")
    table.innerHTML=`
    <colgroup>
    <col />
    <col class="quantity-display" />
    <col />
  </colgroup>
  <tr>
    <th>Product</th>
    <th class="quantity-display">Quantity</th>
    <th>Total</th>
  </tr>`
  heading.appendChild(table)
  cartHeading.appendChild(heading)

    let generateCartItems=()=>{
      
if(basket.length!==0){
    return(ShoppingItem.innerHTML=basket.map((x)=>{
        //console.log(x)
        let  {id,item}=x;
        let search=shopItemsData.find((y)=>y.id===id)||[];
        return `<div> <table>
        <colgroup>
          <col />
          <col class="quantity-display" />
          <col />
        </colgroup>
        <tr>
          <td>
            <div class="image_cart_flex">
              <img src=${search.img} alt="" />
              <div class="heading_wrap">
                <h4>${search.name}</h4>
                <h5>$${search.price} USD</h5>
                <div class="quantity_wrap quantity-none">
              <div class="quantity_prod">
              <span class="plus" onclick="increament(${id})">+</span>  
              <span  class="input" id=${id} >${item}</span>
              <span class="minus" onclick="decreament(${id})">-</span> 
              <svg
              onclick="removeItem(${id})"
                class="icon_trash"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
              </div>            
              </div>
              </div>
              
            </div>
          </td>
          <td class="quantity-display">
            <div class="quantity_wrap">
              <div class="quantity_prod">
              <span class="plus" onclick="increament(${id})">+</span>  
              <span  class="input" id=${id} >${item}</span>
              <span class="minus" onclick="decreament(${id})">-</span>
               
              </div>
              <svg
              onclick="removeItem(${id})"
                class="icon_trash"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
            </div>
          </td>
          <td>$${item*search.price} USD</td>
        </tr>
      </table>
      </div>
      `
    }).join(""))
    
}
else{
    ShoppingItem.innerHTML=``
    cartHeading.innerHTML=``
    label.innerHTML=`<div class="empty-cart"><h1>Your cart is empty</h1>
    <a href="/"><button class="button_black">Continue Shopping</button></a></div>`
}
    }
    generateCartItems();
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
      generateCartItems();
         
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
      generateCartItems();
      update(selectedItem);
      basket=basket.filter((x)=>x.item!==0);
      
      localStorage.setItem("key",JSON.stringify(basket));
        
    }
    let update=(id)=>{
     let search=basket.find((value)=>value.id===id)
     document.getElementById(id).innerHTML=search.item;
     //console.log(search.item)
     calcuation(); 
     TotalAmount(); 
     localStorage.setItem("key",JSON.stringify(basket));
    }
    let removeItem=(id)=>{
        let selectedItem=id;
        //console.log( selectedItem)
         basket=basket.filter((x)=>x.id!==selectedItem);
         generateCartItems();
         calcuation();
         localStorage.setItem("key",JSON.stringify(basket));
    }
    let TotalAmount=()=>{
if(basket.length!==0){
    let amount=basket.map((x)=>{
        let {item,id}=x;
        let search=shopItemsData.find((y)=>y.id===id)||[];
        return item * search.price;
       

    }).reduce((x,y)=>x+y,0);
    console.log(amount);
    label.innerHTML=`<div class="item-cart">
     <h3>Estimated Total</h3>
    <h5>$ ${amount} USD</h5></div>`
    // generateCartItems();
    // calcuation();
    // localStorage.setItem("key",JSON.stringify(basket));

}

else return;
    }
    TotalAmount();