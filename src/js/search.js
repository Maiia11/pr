import {getData} from "./event"
import {page} from "./pagination"

const form = document.querySelector("#form-search");
const events = document.querySelector(".event-list");

form.addEventListener("submit", handleSubmit);

 export let qwery = "";

function handleSubmit(event) {
    event.preventDefault();
    
    qwery = event.target.elements.qwerySearch.value;
    events.innerHTML = "";
    getData(page, qwery)
}
