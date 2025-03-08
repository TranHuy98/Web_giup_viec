let productList = document.getElementsByClassName('service-card-box');

// console.log(productList);

for(let i=0;i<productList.length;i++){
  // console.log(productList[i]);
}



let pID;

for(let i=0;i<productList.length;i++){

    productList[i].onclick = function (){
    window.location.href = `./pages/detail.html?service=${i}`;
    i++
  }
}
