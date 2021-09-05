// document -- root html

// get elements by query selector
// const div = document.querySelectorAll("div");
// console.log(div);

// get an element by ID
const id = document.getElementById("page-title");
console.log(id);

// get elements by CSS class name
// const div = document.querySelectorAll(".error");
// console.log(div);



//  get elements by thier tag name

// const div = document.getElementsByTagName("p");
// console.log(div);
// change inner text


//change innerHtml

// const div = document.querySelector(".content");
// console.log(div);

// div.innerText = "<h3>THis is sample</h3>"
// div.innerHTML = "<h3>THis is sample</h3>"


//manuplate css class

const div = document.querySelector(".content");
console.log(div.classList);
console.log(div.innerText)

const btn = document.getElementById("t-btn");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    div.classList.toggle("error");
})


//event listeners

const allPs = document.querySelectorAll("p");
allPs.forEach(function (el) {

    el.addEventListener("mouseenter", (event) => {
        el.style.padding = "20px";
    });

     el.addEventListener("mouseleave", (event) => {
        el.style.padding = "10px";
    });


    if (el.innerText.includes("error")) {
        el.classList.add("error");
    } else if (el.innerText.includes("info")) {
        el.classList.add("info");
    } else if (el.innerText.includes("warning")) {
        el.classList.add("warning");
    } else if (el.innerText.includes("message")) {
        el.classList.add("message");
    } else if (el.innerText.includes("success")) {
        el.classList.add("success");
    } else {
        el.classList = [];
    }
});




