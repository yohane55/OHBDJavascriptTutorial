// // asynchronus  
// //--- code that doesnt run blocking the other
// //--- code that takes some time to complete
// //--- exection result can be accessed using callbacks or promise



// // how do we create asynchronous code??

// const isFactor = (num1, num2, cb) => {
//     if (num1 % num2 === 0) {
//         cb(undefined, `${num2} is factor of ${num1} `);
//     } else {
//         cb(`${num2} is NOT factor of ${num1} `, undefined);
//     }
// }

// // isFactor(12, 5, (err, succes) => {
// //     if (err) {
// //         alert(err);
// //     } else {

// //         alert(succes)
// //     }
// // });


// //Promise


// const isFactorPromis = (num1, num2) => {
//     return new Promise((resolve, reject) => {
//         if (num1 % num2 === 0) {
//             resolve(`${num2} is factor of ${num1}`);
//         } else {
//             reject(`${num2} is NOT factor of ${num1} `);
//         }
//     })

// }


// isFactorPromis(12, 5)
//     .then(data => console.log(data))
//     .then(data => { isFactorPromis(13, 8) })
//     .then(data=> isFactorPromis(13,8))
//     .then(data=> isFactorPromis(13,8))
//     .then(data=> isFactorPromis(13,8))
//     .then(data=> isFactorPromis(13,8))
//     .then(data=> isFactorPromis(13,8))
//     .then(data=> isFactorPromis(13,8))
//     .catch(err => console.log(err));


const newRow = document.querySelector(".news-row");
const reloadBtn = document.querySelector(".reloadBtn");
const detailView = document.querySelector(".detail-view");

reloadBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loadData();

})

const showLoading = () => {
    newRow.innerHTML = `<div class="center">
    <div class="loader"></div>
    <div>Loading...</div>
    </div>`
}

const getNews = (url) => {
    showLoading();
    return fetch(url)
}

const updateContent = (el, news) => {
    //image
    const img = document.createElement("img");
    img.classList.add("topround")
    img.style.height = "240px"
    img.setAttribute("src", news.enclosure.link)
    el.appendChild(img)


    //title
    const title = document.createElement("div");
    title.classList.add("title")
    title.innerText = news.title;
    title.style.paddingLeft = "10px";
    title.style.paddingRight = "10px";

    el.appendChild(title)

    const content = document.createElement("div");

    content.innerText = news.content;
    content.style.paddingLeft = "10px";
    content.style.paddingRight = "10px";

    el.appendChild(content)
}

const showData = (data) => {
    console.log(data);

    if (data && data.items) {
        newRow.innerHTML = ``;
        for (let i = 0; i < data.items.length; i++) {
            const news = data.items[i];
            const el = document.createElement("div");
            el.classList.add("card");
            el.addEventListener("click", (event) => {

                detailView.innerHTML = '';
                updateContent(detailView, news)

            })

            //image
            const img = document.createElement("img");
            img.classList.add("topround")
            img.setAttribute("src", news.enclosure.link)
            el.appendChild(img)


            //title
            const title = document.createElement("div");
            title.classList.add("title")
            title.innerText = news.title;
            title.style.paddingLeft = "10px";
            title.style.paddingRight = "10px";

            el.appendChild(title)

            const content = document.createElement("div");
            content.classList.add("text-content")
            content.innerText = news.content;
            content.style.paddingLeft = "10px";
            content.style.paddingRight = "10px";

            el.appendChild(content)

            newRow.appendChild(el);

        };

    } else {

    }
}

const showNoData = (message) => {
    newRow.innerHTML = `<div class="center">
    
    <div class="error">${message}</div>
    </div>`
}

const voaFeedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Famharic.voanews.com%2Fapi%2Fzy--yeqv%24y"

const dwFeedUrl = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.dw.com%2Fxml%2Frss-amh-news"

const loadData = () => {
    getNews(voaFeedUrl).then(data => data.json())
        .then(data => showData(data))

        .catch(err => showNoData(
            err.message || err || "Something went wrong!"));
}

loadData();
