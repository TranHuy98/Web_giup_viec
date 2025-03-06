
import detailList from "./detail-list.js";

console.log(detailList);

const params = new URLSearchParams(window.location.search);

let serviceID = params.get('service') ?? 0;

console.log(serviceID);

document.getElementById('detailContent').innerHTML = detailList[serviceID];

// document.getElementById('detailContent').innerHTML = detailContent;

// document.getElementById('service-id').innerHTML = serviceID;