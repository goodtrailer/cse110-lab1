window.onload = () => {
    const form = document.getElementById("form-subscribe");
    form.addEventListener("submit", onSubmit);
}

function onSubmit() {
    const email = document.getElementById("form-subscribe-email").value;
    alert("Subscriber \"added\": " + email);
}
