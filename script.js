const cardContainer = document.getElementById("card-container");
const names = document.getElementById("names");
const addName = document.getElementById("add-name");
const result = document.getElementById("result");
const luckyNumber = document.getElementById("lucky-number");
const errorMessage = document.getElementById("error-message");
const iconCon = document.getElementById("animation");
const icon = document.getElementById("icon");
const author = document.getElementById("author");

// Async Function used to fetch the quote 
async function getQuote(total) {
// uses lucky num to get quote where it's id is same with lucky num
  const url = `https://dummyjson.com/quotes/${total}`;
  // used to make server request
  let response;
// try and catch are used to handle a success or failed promise
  try {
    //fetch the quote
    response = await fetch(url);
    //response.ok is used to figure out if http was successful
    // why because even if it was failed it won't throw an error
    if (!response.ok) {
      // if it failed throw an immediate error message 
      // so catch can handle it
      throw new Error("Quote not found");
    }
  } catch {
    //has a nested try/catch 
    // if the num exceed the quote id display a random quote
    try {
      response = await fetch("https://dummyjson.com/quotes/random");
      errorMessage.setAttribute("hidden", "true");
    } catch {
      errorMessage.removeAttribute("hidden");
      // if connection failed throw a message 
      errorMessage.innerText =
        "Unable to connect to the server. Please try again.";
      return;
    }
  }
  //data process response object to a js object
  const data = await response.json();
  // assign data to each html element
  cardContainer.innerText = data.quote;
  author.innerText = `— ${data.author}`;
}
// Validate user input
function validateInput() {
  // Must be a text and contain a space
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const [first, second] = names.value.toLowerCase().split(" ");
// if the text is not empty after removing space from front/back
  if (!regex.test(names.value.trim())) {
    //hides error message
    errorMessage.removeAttribute("hidden");
    return;
  }
  //else show error message
  errorMessage.setAttribute("hidden", "true");
  iconCon.removeAttribute("hidden");
// for icon animation
  const animation = icon.animate(
    { transform: "rotate(360deg)" },
    {
      duration: 3000,
      iterations: 2,
    },
  );
// result card animation
  result.animate(
    [
      { opacity: 0, transform: "translateY(30px)" }, // start
      { opacity: 1, transform: "translateY(0px)" }, // end
    ],
    {
      duration: 800,
      easing: "ease-out",
      fill: "forwards",
    },
  );
// after 3 minute run this function
  setTimeout(() => {
    const vowels = "aeiou";
    let firstVow = 0;
    let firstCon = 0;
    let secVow = 0;
    let secCon = 0;
// used to identify vowel/consonant letter from first name and increment count
    first.split("").forEach((item) => {
      if (vowels.includes(item)) {
        firstVow++;
      } else {
        firstCon++;
      }
    });
    // used to identify vowel/consonant letter from second name and increment coun
    second.split("").forEach((item) => {
      if (vowels.includes(item)) {
        secVow++;
      } else {
        secCon++;
      }
    });
//holds the longest and shortest name 
    const shorterLength = Math.min(first.length, second.length);
    const longerLength = Math.max(first.length, second.length);
// used to get the big/small vowel/consonant letter 
    const smallVow = Math.min(firstVow, secVow);
    const smallCon = Math.min(firstCon, secCon);
    const largeVow = Math.max(firstVow, secVow);
    const largeCon = Math.max(firstCon, secCon);
// summing all result to get a sum value
    const sumOfSmall = smallVow * smallCon * shorterLength;
    const sumOfLarge = largeVow * largeCon * longerLength;
//This produces the lucky Number
    let total = sumOfLarge - sumOfSmall;
// ifl lucky num return 0 the quote should be 1
    if (total === 0) {
      total = 1;
    }
// else the normal value
    luckyNumber.innerText = `Lucky Number ${total}`;
    result.animate(
      [
        { opacity: 0, transform: "translateY(30px)" }, // start
        { opacity: 1, transform: "translateY(0px)" }, // end
      ],
      {
        duration: 800,
        easing: "ease-out",
        fill: "forwards",
      },
    );
    reset();
    getQuote(total);
  }, 3000);
}
// as button is clicked reset name and hide icon
function reset() {
  names.value = "";
  iconCon.setAttribute("hidden", "true");
}
//button event listener
addName.addEventListener("click", () => {
  validateInput();
  result.removeAttribute("hidden");
});
// input box event listener
names.addEventListener("input", () => {
  luckyNumber.innerText = "";
  cardContainer.innerText = "";
  author.innerText = "";
});
