// MenuToggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


// Add hovered class in selected list item
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("click", activeLink));


const sr=ScrollReveal ({
    distance:'45px',
    duration: 2700,
    reset:false
});

sr.reveal('.toggle,.cardBox,.recentOrder td,.recentCustomers .cardHeader',{delay:350,origin:'left'});
sr.reveal('.user,.card, .recentCustomers td,.recentOrder .cardHeader',{delay:350,origin:'right'});

if(window.innerWidth>991) {
    sr.reveal('.title',{delay:350,origin:'left'});
    sr.reveal('.icon',{delay:350,origin:'right'});
    
}