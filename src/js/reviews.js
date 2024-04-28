
import axios from 'axios';
import {getApi} from './api'
import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import 'swiper/css/mousewheel'

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

 

const list = document.querySelector(".swiper-wrapper");

async function addCardsOnPage() {
    try {
        const data = await getApi();
     list.insertAdjacentHTML("beforeend", createMarkup(data));
    }
    
    catch (error) {
        iziToast.show({
    title: 'Hey',
    message: 'What would you like to add?'
});
        
    }
    
}
 
function createMarkup(arr) {
  return arr.map(({ id, author, avatar_url, review }) => `
    <div class="swiper-slide">
    <li class="card" data-id ="${id}">
    <img class="card_img" src="${avatar_url}" alt="photo"/>
    <h3 class="card_title">${author}</h3>
    <p class="card_text">${review}</p> 
    </li>
    </div>
    `)
        .join("") 
}

addCardsOnPage()

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
 modules: [Navigation, Pagination, Keyboard, Mousewheel],
  navigation: {
  nextEl: '.end',
 prevEl: '.start',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    }
  },
  mousewheel: {
    sensitivity: 1
  }


});