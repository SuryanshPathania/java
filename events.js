<button onclick="console.log('Hi there! My name is Suryansh'); alert('Hello!')">
  Click Me
</button>// jab bahar ke taraf double quotes hotte to andar ke taraf single quotes likhte


//create a toggle button that changes the screen to dark mode when clicked and back to light mode when clicked again
let selector = document.querySelector("#mode");
let curmode = "light";

selector.addEventListener("click", () => {
  if (curmode === "light") {
    curmode = "dark";
    document.body.style.backgroundColor = "black"; // Correct spelling
  } else {
    curmode = "light";
    document.body.style.backgroundColor = "white"; // Correct spelling
  }
});

