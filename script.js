let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".circle");

//make sure current active count should not exceed circles length
//setting current active length to the circles length

let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

//make sure current active count should not be less than 1 when clicking previous btn
//setting current active length to 1

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

//loop through all circles, if index of each one is less than current active cirlcle then add active class to it
const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

 //current active is 1 then disable previous btn
 //if currentactive and circle length are equal then disable next btn

 const actives = document.querySelectorAll(".active");
  progress.style.width =((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
};
