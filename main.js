const button = document.querySelector(".btnId");
const img = document.querySelector(".carrier");

button.addEventListener("click", function() {
   // alert("hello");
   img.style.display = "block";
   button.style.display = "none";
});

