import axios from 'axios';



// // Discovery API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)
// // API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
// // Потрібно відрендерити колекцію  івентів і реалізувати пагінацію за допомогою бібліотеки
// // tui - pagination(https://www.npmjs.com/package/tui-pagination),
// // Запити робимо використовуючи бібліотеку axios (https://www.npmjs.com/package/axios , https://axios-http.com/uk/docs/intro)
// // і конструкції async\await; try\catch

// const { default: axios } = require("axios");


// import "./js/api"

// import "./js/event"

// import "./js/pagination"

// import "./js/search.js"


// const baseUrlReviews = "https://portfolio-js.b.goit.study/api/reviews";
// const container = document.querySelector(".swiper-wrapper");

//  export async function getApi() {
//     const { data } = await axios.get(`${baseUrlReviews}`, {
//     headers: {
//         Accept: "application/json"
//     },
//     method: "Get"
//     })
//     return data;

    
// }

// function createMarkup(arr) {
//     return arr.map(({ id, author, avatar_url, review }) => `
//     <div class="swiper-slide">
//     <li class="card" data-id ="${id}">
//     <img class="card_img" src="${avatar_url}" alt="photo">
//     <h3 class="card_title">${author}</h3>
//     <p class="card_text">${review}</p> 
//     </li>
//     </div>
//     `)
//         .join("")
    
// }

//  async function add() {
//      const res = await getApi();
//      container.insertAdjacentHTML("beforeend", createMarkup(res));
    
// }

// add()
