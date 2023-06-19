window.onscroll = function() {
    progsFun();
    statsFun();
    upButt();
}
//Up Button
let upButt = function() {
    landingHeight = document.querySelector(".landing").offsetHeight;
    if(window.scrollY+(landingHeight/2) < landingHeight) {
        up.style.display = "none";
        up.style.opacity = "0";
    }else {
        up.style.display = "block";
        if(window.scrollY+(landingHeight/2)+10 > landingHeight) {
            up.style.opacity = "1";
        }
    }
}
let up = document.querySelector(".up");
up.onclick = function() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

//Links
let links = document.querySelectorAll(".header nav ul li a");
let idsSections = document.querySelectorAll("body>div");
let ids = new Array();
for(let i = 0; i<idsSections.length; i++) {
    if(idsSections[i].hasAttribute("id")) {
        ids.push(idsSections[i].getAttribute("id"));
    }
}
for(let i = 0; i<links.length; i++) {
    links[i].onclick = function() {
        ulM.classList.remove("show-menu");
        iconM.classList.toggle("toggle-menu-color");
        for(let j = 0; j<ids.length; j++) {
            if(this.innerHTML.toLowerCase() === ids[j]) {
                location.href = `#${ids[j]}`;
            }
        }
        
    }
}


//SearchInput
let iconS = document.querySelector(".fa-search");
let inputS = document.querySelector('[type="search"]');
iconS.onclick = function() {
    inputS.classList.toggle("show");
    this.classList.toggle("icon-color");
}
inputS.onblur = function() {
    inputS.classList.remove("show");
    iconS.classList.remove("icon-color");
}

//menu
let iconM = document.querySelector(".toggle-menu");
let ulM = document.querySelector(".header nav ul");
iconM.onclick = function() {
    ulM.classList.toggle("show-menu");
    this.classList.toggle("toggle-menu-color");
}

//Our-Skills
let ourSkills = document.querySelector(".our-skills");
let progs = document.querySelectorAll(".prog-holder .prog span");
let progsFun = function() {
    if(Number.parseInt(window.scrollY)+200 >= ourSkills.offsetTop) {
        progs.forEach(function(prog) {
            prog.style.width = prog.getAttribute("data-prog");
        })
    }
}

//State
let stats = document.querySelector(".stats");
let statsValues = document.querySelectorAll(".stats .box .number");
let numbers = new Array();
statsValues.forEach(function(num) {
    numbers.push(Number.parseInt(num.innerHTML))
})
let statsFun = function() {
    if(Number.parseInt(window.scrollY) >= stats.offsetTop) {
        numbers.forEach(function(num) {
            for(let i = 0; i<num; i++) {
                statsValues[1].innerHTML = `${i}`
            }
        })
    }
}


