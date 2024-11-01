document.addEventListener('DOMContentLoaded', function() {

    console.log("DOM loaded");

    let Button = document.getElementById("btn-mode");

    Button.addEventListener("click", changeMode);

    function changeMode() {
        let element = document.querySelector('body');
        element.classList.toggle('darkmode');
    }

});
