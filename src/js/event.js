import { getEvents } from "./api"
import { page, reset } from "./pagination"
import {qwery} from "./search"

const events = document.querySelector(".event-list");

function markupCreate(data) {
    const markup = data.map(({ name, id }) => `
    <li id=${id}>
    <p>${name}</p>
    </li>`).join("");

    events.innerHTML = markup;
    
}

 export async function getData(page, qwery) { 
    const data = await getEvents(page, qwery);
    if (page === 1) {
        reset(data.page.totalElements)
    }
    markupCreate(data._embedded.events)
}

getData(page, qwery)