// const handleOnMouseMove = e => {
//     const { currentTarget: target } = e;

//     const rect = target.getBoundingClientRect(),
//         x = e.clientX - rect.left,
//         y = e.clientY - rect.top;

//     target.style.setProperty("--mouse-x", `${x}px`);
//     target.style.setProperty("--mouse-y", `${y}px`);
// }

// for (const card of document.getElementsByClassName('card')) {
//     card.onmousemove = e => handleOnMouseMove(e);
// }

document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")){
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
            
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}


//Progress bar part

//Unnecessary code
// var body = document.body, html = document.documentElement;
// var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

// let totalHeight = document.documentElement.scrollHeight;
// let scrollHeight = document.documentElement.scrollTop;
// console.log(height,"h .", totalHeight,"th .", scrollHeight,"st");
// progressBar.style.setProperty("--scroll-total", `${totalHeight}`);

var progressBar = document.getElementById("progress-bar");

window.onscroll = e => {
    let scrollHeight = document.documentElement.scrollHeight;//.body
    let innerHeight = window.innerHeight;
    let scrollY = window.scrollY;
    progressBar.style.setProperty("--scroll-y", `${scrollHeight}`);

    progressBar.style.setProperty("--width", `${scrollY / (scrollHeight - innerHeight) *100}%`);
    
}

