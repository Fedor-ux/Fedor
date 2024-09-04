const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your form has been submitted successfully!");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
function giveMeResult(){
  let userName = document.getElementById("fName").value;
  document.getElementById('user2Name').innerText = userName;
  let userLastName = document.getElementById("lName").value;
  document.getElementById('user2LastName').innerText = userLastName;
  let userdateBithd = document.getElementById("date").value;
  document.getElementById('user2dateBithd').innerText = userdateBithd;
  let userGender = document.getElementById("gender").value;
  document.getElementById('user2Gender').innerText = userGender;
  let userEmail = document.getElementById("email").value;
  document.getElementById('user2Email').innerText = userEmail;
  let userNumber = document.getElementById("phone").value;
  document.getElementById('user2Number').innerText = userNumber;
  let userSalary = document.getElementById("check-salary0").value;
  document.getElementById('user2Salary').innerText = userSalary;
  let userStreet = document.getElementById("address").value;
  document.getElementById('user2Street').innerText = userStreet;
  let userCity  = document.getElementById("city").value;
  document.getElementById('user2City').innerText = userCity;
  let userCountry = document.getElementById("country").value;
  document.getElementById('user2Country').innerText = userCountry;
  let userPostal = document.getElementById("postal").value;
  document.getElementById('user2Postal').innerText = userPostal;

}
