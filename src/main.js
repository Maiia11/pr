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


const baseUrl = "https://portfolio-js.b.goit.study/api/reviews";

axios.get(`${baseUrl}`, {
    headers: {
        Accept: "application/json"
    },
    method: "Get"
})

    .then(data => {
    console.log(data);
    })
.catch (error => {
    console.log(error);
})

