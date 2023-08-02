const saladInfo = [
  {
    id: 0,
    name: "Green Goddess Chicken Salad",
    price: 32,
    description:
      "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.",
  },
  {
    id: 1,
    name: "Asian Cucumber Salad",
    price: 35,
    description:
      "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
  },
];

function updateColors(element, color1, color2) {
  if (element.classList.contains(color1)) {
    element.classList.remove(color1);
    element.classList.add(color2);
  } else if (element.classList.contains(color2)) {
    element.classList.remove(color2);
    element.classList.add(color1);
  }
}

function loadSaladInfo(saladId) {
  const saladPrice = saladInfo[saladId].price;
  const saladName = saladInfo[saladId].name;
  const saladDescription = saladInfo[saladId].description;
  const saladImage = `./images/main${saladId}.png`;
  document.querySelector(".saladPrice span").innerHTML = saladPrice;
  document.querySelector(".saladName").innerHTML = saladName;
  document.querySelector(".saladDescription").innerHTML = saladDescription;
  document.querySelector(".mainSaladImage").src = saladImage;
}

const totalSaladCount = 10;
const rotationPerSalad = 360 / totalSaladCount;
let startingSalad = 0;
let saladId;
const previousSaladButton = document.querySelector(".navPrevious");
const nextSaladButton = document.querySelector(".navNext");
previousSaladButton.addEventListener("click", () => {
  startingSalad = startingSalad - 1;
  saladId = Math.abs(startingSalad % 2);
  loadSaladInfo(saladId);
  let totalRotation = rotationPerSalad * startingSalad + "deg";
  document.querySelector(".allThumbsImage").style.rotate = totalRotation;
  const lightBackground = document.querySelector(".saladThumbnails");
  updateColors(
    lightBackground,
    "background--lightorange",
    "background--lightgreen"
  );

  const dynamicTextColor = document.querySelectorAll(".dynamicTextColor");
  dynamicTextColor.forEach((tagItem) => {
    updateColors(tagItem, "text--orange", "text--green");
  });

  const dynamicBgColor = document.querySelectorAll(".dynamicBgColor");
  dynamicBgColor.forEach((tagItem) => {
    updateColors(tagItem, "background--orange", "background--green");
  });
});
nextSaladButton.addEventListener("click", () => {
  startingSalad = startingSalad + 1;
  saladId = Math.abs(startingSalad % 2);
  loadSaladInfo(saladId);

  let totalRotation = rotationPerSalad * startingSalad + "deg";
  document.querySelector(".allThumbsImage").style.rotate = totalRotation;

  const lightBackground = document.querySelector(".saladThumbnails");
  updateColors(
    lightBackground,
    "background--lightorange",
    "background--lightgreen"
  );

  const dynamicTextColor = document.querySelectorAll(".dynamicTextColor");
  dynamicTextColor.forEach((tagItem) => {
    updateColors(tagItem, "text--orange", "text--green");
  });

  const dynamicBgColor = document.querySelectorAll(".dynamicBgColor");
  dynamicBgColor.forEach((tagItem) => {
    updateColors(tagItem, "background--orange", "background--green");
  });
});
