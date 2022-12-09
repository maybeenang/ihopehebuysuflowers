let path = document.querySelector("#path");
let mawar = document.querySelector("#mawar");
let length = path.getTotalLength();
const title = document.querySelector(".title");

let counter = 0;

path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = length;

path.getBoundingClientRect();

const generateHearts = () => {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 50 + "px";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  const love = [
    "💖",
    "💗",
    "💓",
    "💕",
    "💞",
    "💘",
    "💝",
    "❤️",
    "🧡",
    "💛",
    "💚",
    "💙",
    "💜",
  ];
  heart.innerText = love[Math.floor(Math.random() * love.length)];

  document.body.appendChild(heart);

  // delete hearth

  setTimeout(() => {
    heart.remove();
  }, 5000);
};

window.addEventListener("scroll", function (e) {
  if (counter == 1) return;

  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  let drawLength = length * scrollPercentage;

  path.style.strokeDashoffset = length - drawLength;
  path.style.fillOpacity = drawLength / length;

  if (scrollPercentage >= 0.8) {
    path.style.strokeDasharray = "none";
  } else {
    path.style.strokeDasharray = length + " " + length;
    title.style.opacity = 1 - drawLength / length;
    title.innerHTML = "keep scrolling";
  }

  if (scrollPercentage >= 0.8 && counter == 0) {
    title.innerHTML = "for you :)";
    counter = 1;
    mawar.classList.add("scale");
    path.animate(
      [
        {
          stroke: "#494949",
          fill: "#5e5e5e",
        },
        {
          stroke: "#a01850",
          fill: "#FF006B",
        },
      ],
      { duration: 1000, iterations: 1 }
    ).onfinish = () => {
      path.style.stroke = "#a01850";
      path.style.fill = "#FF006B";
    };
    title.animate(
      [
        { opacity: 0, color: "#969696" },
        { opacity: 1, color: "#FF006B" },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    ).onfinish = () => {
      title.style.color = "#FF006B";
      title.style.opacity = 1;
    };
    document.body.animate(
      [{ backgroundColor: "#2b2b2b" }, { backgroundColor: "#FFB5D4" }],
      {
        duration: 1000,
        iterations: 1,
      }
    ).onfinish = () => {
      document.body.style.backgroundColor = "#FFB5D4";
    };
  }
});

setInterval(() => {
  if (counter === 1) {
    generateHearts();
  }
}, 200);
