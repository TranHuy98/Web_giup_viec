

const params = new URLSearchParams(window.location.search);

let serviceID = params.get('service') ?? 0;

console.log(serviceID);

document.getElementById('service-id').innerHTML = serviceID;