
const newsletter = document.getElementById("newsletter");


const container = document.createElement("div");
container.classList.add("container", "newsletter-flex");

const heading = document.createElement("h2");
heading.innerHTML = "Don't Miss a Drop";


const paragraph = document.createElement("p");
paragraph.innerHTML = "Stay up to date on the latest product releases, special offers & news by signing up for our newsletter.";

console.log(paragraph)

const inputContainer = document.createElement("div");
inputContainer.classList.add("input-container");
inputContainer.id = "input-container";

const emailInput = document.createElement("input");
emailInput.type = "text";
emailInput.classList.add("input");
emailInput.id = "emailInput";
emailInput.placeholder = "Email";

const spanMessage = document.createElement("span");
spanMessage.id = "emailErrorMessage";
spanMessage.classList.add("error-message");



let validateForm=()=> {
  let emailInput = document.getElementById('emailInput');
  let emailErrorMessage = document.getElementById('emailErrorMessage');
  let inputContainer=document.getElementById('input-container');
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value === '') {
      emailErrorMessage.textContent = 'Email is required';
      emailErrorMessage.style.display = 'block';
      emailInput.style.border='2px solid red';
      emailInput.style.borderTop='none';
  }
  else if(!emailPattern.test(emailInput.value)){
   emailErrorMessage.textContent = "Email is invalid";
   emailErrorMessage.style.display = "block";
}
else{
  emailErrorMessage.style.display="none"
}
   if(emailInput.value !== '' && emailPattern.test(emailInput.value)) {
    
    return(inputContainer.innerHTML=`<h3>You're in the know</h3>
    <span>Now you will be the first to receive updates on the hottest new arrivals, inspiration and all the latest offers.</span>`)
  }
}

const button = document.createElement("button");
button.classList.add("btn-signup");
button.textContent = "Sign Up";
button.addEventListener('click', validateForm);


inputContainer.appendChild(emailInput);
inputContainer.appendChild(spanMessage);
inputContainer.appendChild(button);

container.appendChild(heading);
container.appendChild(paragraph);
container.appendChild(inputContainer);

newsletter.appendChild(container);
