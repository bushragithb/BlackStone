let basket=JSON.parse(localStorage.getItem("key"))||[];

let calcuation=()=>{
  let cartIcon=document.getElementById('cart_text')
  
  let quantity=basket.map((value)=>value.item).reduce((value,y)=>value+y,0)
  cartIcon.innerHTML=quantity;
  
  }
  calcuation();
let productItem=document.getElementById('product_section')
console.log(productItem)
generateProduct = (id, item) => {
  let search = basket.find((value) => value.id === id);
  let quantity = search ? search.item : 0; 

  productItem.innerHTML = `
      <div class="grid_1x2 height-grid">
          <div class="prod_imgcontainer">
              <img src="/Images/model1.webp" alt="" />
          </div>
          <div class="info_wrap">
              <p>BlackStone, LLC</p>
              <h1>Mock Neck</h1>
              <h5>$12.99 USD</h5>
              <p><a href="#">Shipping</a> calculated at checkout.</p>
              <p>
                  Pay in 4 interest-free installments for orders over
                  <b>$50.00</b> with shop-pay <br />
                  <a href="">Learn more</a>
              </p>
              <p>Quantity</p>
              <div class="quantity_prod">
                  <span class="plus" onclick="increament(${id})">+</span>  
                  <span class="input" id=${id}>${quantity}</span>
                  <span class="minus" onclick="decreament(${id})">-</span>          
              </div>
              <a onclick="increament(${id})">
                  <button class="add_cart button button_purple button_stretch">Add to cart</button>
              </a>
              <button class="button_stretch button_blue">Buy With Shop Pay</button>
              <p><a href="#">More Payment Options</a></p>
              <ul class="list">
                  <p class="info_paragraph">
                      It’s all love when you keep your drawstrings close with the
                      heart design. Available 3 colors to create the perfect
                      functional fashion accessory.
                  </p>
                  <li>Decorative drawstring accessory that prevents the loss drawstrings in clothing, bags and almost anything with a drawstring</li>
                  <li>Squeezable clasps for application and removal that can adjust to the size of the drawstring</li>
                  <li>Washing machine and dryer safe</li>
                  <li>Made of ABS plastic</li>
                  <li>Simple squeeze action used to apply, remove and adjust drawstring application.</li>
                  <li>Each order comes with 2 pair (4) BlackStone</li>
                  <li>The sphere shaped BlackStone are 20.3mm in diameter or .7 inches</li>
                  <li>BlackStone designs are washing machine and dryer safe. Design life depends on the amount of heat exposure.</li>
                  <li>/!\ WARNING: CHOKING HAZARD - SMALL PARTS</li>
              </ul>
          </div>
      </div>`;
};

generateProduct(1,0);

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
     
       generateProduct(1,0)
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
      generateProduct(1,0)
      update(selectedItem);
      basket=basket.filter((x)=>x.item!==0);
      
      localStorage.setItem("key",JSON.stringify(basket));
        
    }
    let update=(id)=>{
     let search=basket.find((value)=>value.id===id)
     document.getElementById(id).innerHTML=search.item;
  
     calcuation(); 
  
     localStorage.setItem("key",JSON.stringify(basket));
    }