const emailInput = document.querySelector(".email-form").children[0];
const errorImg = document.querySelector(".email-form").children[1];
const submitBtn = document.querySelector(".email-form").children[2];
const validText = document.querySelector(".email-form").children[3];
console.log(submitBtn)
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function validation() {
    if (!emailInput.value.match(pattern)) {
        emailInput.classList.add("wrong");
        validText.classList.add("wrong");
        errorImg.classList.add("wrong");
    } else {
        emailInput.classList.remove("wrong");
        validText.classList.remove("wrong");
        errorImg.classList.remove("wrong");
    }
}