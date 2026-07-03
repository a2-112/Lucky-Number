const cardContainer = document.getElementById("card-container");
const names = document.getElementById("names");
const addName = document.getElementById("add-name");
const result = document.getElementById("result");
const luckyNumber = document.getElementById("lucky-number");
const errorMessage = document.getElementById("error-message");
const iconCon = document.getElementById("animation");
const icon = document.getElementById("icon");

const fortune = [
  "Always remember that you are unique, special and beautiful than you appear.",
  "You might not be where you want to be yet, but remember the sky is your limit.",
  "As calm as the ocean is so shall your sorrow and pain be calm. Go on smiling.",
  "People comes and go, most times you might want them to stay but if they don't be, happy and grateful for the moment they spent.",
  "When it get hard cry it out and never forget to smile again",
  "A day will come and you will look back and say thank God i didn't quit.",
  "Love as much a you can because it was never a weakness rather a strength many don't have.",
];

function validateInput() {
  const regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const [first, second] = names.value.toLowerCase().split(" ");

  if (!regex.test(names.value)) {
    errorMessage.removeAttribute("hidden");
    return;
  }
  errorMessage.setAttribute("hidden", "true");
  iconCon.removeAttribute("hidden");

  const animation = icon.animate(
    { transform: "rotate(360deg)" },
    {
      duration: 3000,
      iterations: 2,
    },
  );

  result.animate(
    [
    { opacity: 0, transform: "translateY(30px)" }, // start
    { opacity: 1, transform: "translateY(0px)" }   // end
  ],
  {
    duration: 800,
    easing: "ease-out",
    fill: "forwards"
  },
)

  setTimeout(() => {
    const vowels = "aeiou";
    let firstVow = 0;
    let firstCon = 0;
    let secVow = 0;
    let secCon = 0;

    first.split("").forEach((item) => {
      if (vowels.includes(item)) {
        firstVow++;
      } else {
        firstCon++;
      }
    });
    second.split("").forEach((item) => {
      if (vowels.includes(item)) {
        secVow++;
      } else {
        secCon++;
      }
    });

    const shorterLength = Math.min(first.length, second.length);
    const longerLength = Math.max(first.length, second.length);

    const smallVow = Math.min(firstVow, secVow);
    const smallCon = Math.min(firstCon, secCon);
    const largeVow = Math.max(firstVow, secVow);
    const largeCon = Math.max(firstCon, secCon);

    const sumOfSmall = smallVow * smallCon * shorterLength;
    const sumOfLarge = largeVow * largeCon * longerLength;

    const total = sumOfLarge - sumOfSmall;
  
    let index;
    if (total === 0) index = 0;
    else if (total <= 10) index = 1;
    else if (total <= 20) index = 2;
    else if (total <= 30) index = 3;
    else if (total <= 45) index = 4;
    else if (total <= 60) index = 5;
    else {
      index = 6;
    }

    luckyNumber.innerText = total === 0 ?`Lucky Number 1` : `Lucky Number ${total}`;
    cardContainer.innerText = fortune[index];
      result.animate(
    [
    { opacity: 0, transform: "translateY(30px)" }, // start
    { opacity: 1, transform: "translateY(0px)" }   // end
  ],
  {
    duration: 800,
    easing: "ease-out",
    fill: "forwards"
  },
)
    reset();
  }, 3000);
}

function reset() {
  names.value = "";
  iconCon.setAttribute("hidden", "true");
}

addName.addEventListener("click", () => {
  validateInput();
  result.removeAttribute("hidden");
});

names.addEventListener("input", () => {
    luckyNumber.innerText = ""
    cardContainer.innerText = ""
})
