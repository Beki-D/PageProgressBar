document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")){
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
            
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}

//The progress bar code
var progressBar = document.getElementById("progress-bar");
var conicProgressBar = document.getElementById("conic-bar");

window.onscroll = e => {
    let scrollHeight = document.body.scrollHeight;
    let innerHeight = window.innerHeight;
    let scrollY = window.scrollY;

    progressBar.style.setProperty("--width", `${scrollY / (scrollHeight - innerHeight) *100}%`);
    conicProgressBar.style.setProperty("--width", `${scrollY / (scrollHeight - innerHeight) *100}%`);
}