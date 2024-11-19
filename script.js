document.getElementById(contract-form).addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").ariaValueMax;
    const email = document.getElementById("email").ariaValueMax;
    const message = document.getElementById("message").ariaValueMax;

    if (name && email && message) {
        document.getElementById("form-message").textContent = "We will get back to you as soon as possible";
        document.getElementById("form-message").style.color = "black";

    document.getElementById("contact-form").requestFullscreen();
    }
    else {
        document.getElementById(form-message).textContent = "You must fill this in";
        document.getElementById("form-mesage").style.color = "red";
    }

})