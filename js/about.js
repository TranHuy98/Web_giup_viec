// about info

const infoCards = document.getElementsByClassName("info-card");

const detailField = document.getElementsByClassName("detail");

const infoArr = [
  {
    heading: "Nhiệm vụ",
  },
  {
    heading: "Thông tin",
  },
  {
    heading: "Chi phí",
  },
  {
    heading: "Trách nhiệm",
  },
];

for (let i = 0; i < infoCards.length; i++) {
  infoCards[i].onclick = () => {
    document.querySelector(".about-info-left h2").innerHTML =
      infoArr[i].heading;

    
    for(let i = 0; i < infoCards.length; i++){
      detailField[i].style.display = "none";
    }

    detailField[i].style.display = "block";
  };
}
