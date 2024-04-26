// import axios from 'axios';

// const baseUrl = "https://app.ticketmaster.com/discovery/v2/";

// const apiKey = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';


// // url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey={apikey}"

//  export async function getId(id) {
//     const response = await axios.get(`${baseUrl}events.json?id=${id}&apikey=${apiKey}`);
//     return response.data;
    
// }
// getId('Z7r9jZ1AdJ9AK')

// export async function getEvents(page, qwery) {
//     const response = await axios.get(`${baseUrl}events.json?page=${page}&apikey=${apiKey}&keyword${qwery}`);
//     return response.data;
    
// }

// // getEvents(1)


import Swiper from 'swiper';
import 'swiper/css';

new Swiper('.swiper', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});