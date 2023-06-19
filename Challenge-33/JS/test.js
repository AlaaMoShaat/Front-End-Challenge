function showFun(a) {
    let main = document.getElementsByClassName("main")[0];
    main.setAttribute("src", a.getAttribute("src"));
}

let i = 0;
let imgs = document.getElementsByClassName("img");
setInterval(function () {
    let src = imgs[i].getAttribute("src");
    document.getElementById("big").setAttribute("src", src);
    i++;
    console.log(i);
    if (i == imgs.length) {
        i = 0;
    }
}, 1000);