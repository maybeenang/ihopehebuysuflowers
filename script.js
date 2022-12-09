let path = document.querySelector("#path");
let mawar = document.querySelector("#mawar");
let length = path.getTotalLength();
const title = document.querySelector(".title");

path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = length;

path.getBoundingClientRect();

window.addEventListener("scroll", function (e) {
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  let drawLength = length * scrollPercentage;
  console.log(scrollPercentage);
  console.log(drawLength);

  path.style.strokeDashoffset = length - drawLength;
  path.style.fillOpacity = drawLength / length;
  path.style.fill = "#FF006B";

  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
    title.style.opacity = 1;
    title.innerHTML = "bunga buat kamu :)";

    if (scrollPercentage === 1) {
      mawar.classList.add("scale");
      document.body.animate(
        [{ backgroundColor: "#2b2b2b" }, { backgroundColor: "#FFB5D4" }],
        {
          duration: 1000,
          iterations: 1,
        }
      ).onfinish = () => {
        document.body.style.backgroundColor = "#FFB5D4";
        title.animate([{ color: "#969696" }, { color: "#FF006B" }], {
          duration: 500,
          iterations: 1,
        }).onfinish = () => {
          title.style.color = "#FF006B";
        };
      };
    } else {
      mawar.classList.remove("scale");
    }
  } else {
    path.style.strokeDasharray = length + " " + length;
    title.style.opacity = 1 - drawLength / length;
    title.innerHTML = "scroll kebawah truss";
  }
});
