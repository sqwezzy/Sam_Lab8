const btnChange = document.getElementById("changeColor");
const body = document.getElementById("body");
btnChange.addEventListener("click", changeColor);

window.onload = () => {
     if (localStorage.getItem('background'))
         body.style.backgroundColor = localStorage.getItem('background');
};

window.addEventListener('storage', function(e) {
    body.style.backgroundColor = localStorage.getItem('background');
});


 function changeColor() {
          function choseColor() {
              const colors = ["red", "green", "yellow"];
           let index = Math.floor(Math.random() * colors.length);
           body.style.backgroundColor = colors[index];
           return localStorage.setItem('background', body.style.backgroundColor);
      }
      choseColor();
          return body.style.backgroundColor = localStorage.getItem('background');
 }

