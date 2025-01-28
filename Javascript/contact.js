let contact=document.getElementById("contact");

let contactHedaing=document.createElement("h1")
contactHedaing.innerHTML=`Contact Us`;

let contactSubHedaing=document.createElement("h3")
contactSubHedaing.innerHTML=`We would love to hear from You!`;

let contactDiv=document.createElement("div")
contactDiv.classList.add("contact-form");
contactDiv.id = "contact-form";

let input=document.createElement("input")
input.type = "text";
input.id = "first-name";
input.classList.add("input");
input.placeholder = "First Name";

let messageSpanFn =document.createElement("span")
messageSpanFn.id="name-message";
messageSpanFn.classList.add("error-message")

let inputEmail=document.createElement("input")
inputEmail.type = "email";
inputEmail.id = "email";
inputEmail.classList.add("input");
inputEmail.placeholder = "Email";

let messageSpanE =document.createElement("span")
messageSpanE.id="email-message";
messageSpanE.classList.add("error-message")

contactDiv.appendChild(input)
contactDiv.appendChild(messageSpanFn)
contactDiv.appendChild(inputEmail)
contactDiv.appendChild(messageSpanE)

let contactFormValidate=()=>{
    let errorMessageName=document.getElementById("name-message");
    let errorMessageEmail=document.getElementById("email-message");
    let errorName=document.getElementById("first-name")
    let errorEmail=document.getElementById("email")
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(errorName.value===""){
    errorMessageName.textContent="First Name  is required"
    errorMessageName.style.display="block";
}
else{
    errorMessageName.style.display="none";
}
if(errorEmail.value===""){
    errorMessageEmail.textContent="Email is required"
errorMessageEmail.style.display="block";
}
else if(!emailPattern.test(errorEmail.value)){
    errorMessageEmail.textContent = "Email is invalid";
          errorMessageEmail.style.display = "block";
}
else {
    errorMessageEmail.textContent = "";
    errorMessageEmail.style.display = "none";
  }
  if (errorName.value !== "" && emailPattern.test(errorEmail.value)) {
    let thankYouMessage = document.createElement("div");
    thankYouMessage.innerHTML = `
        <h1>Contact Us</h1>
        <h3>Thank You!</h3>
        <span>The form has been Submitted</span>
    `;
    contact.innerHTML = ''; 
    contact.appendChild(thankYouMessage);
  }
    
}

let contactButton = document.createElement("button");
contactButton.classList.add("btn-signup");
contactButton.innerHTML = "Get In Touch";
contactButton.addEventListener('click', contactFormValidate);
console.log(contactButton);

contactDiv.appendChild(contactButton)
contact.appendChild(contactHedaing)
contact.appendChild(contactSubHedaing)
contact.appendChild(contactDiv)