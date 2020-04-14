let element = document.getElementById("personal_letter");

function isOutside() {
  let bounding = element.getBoundingClientRect();
  return (
    bounding.bottom >
    (document.documentElement.clientHeight || window.innerHeight)
  );
}

const makeSureTextIsVisible = () => {
  if (
    (document.documentElement.clientWidth || window.innerWidth) <= 750 ||
    (document.documentElement.clientHeight || window.innerHeight) < 700
  ) {
    if (element.style.fontSize != "24px") element.style.fontSize = "24px";
    return;
  }
  let originalSize = getComputedStyle(element).fontSize;
  let size = originalSize.match(/\d+/g).map(Number)[0];
  while (!isOutside() && size < 32) {
    size += 2;
    element.style.fontSize = `${size}px`;
  }
  while (isOutside() && size > 18) {
    size -= 2;
    element.style.fontSize = `${size}px`;
  }
};

let resizeTimer;
const debounceResize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(makeSureTextIsVisible, 250);
};
window.addEventListener("load", debounceResize);
window.addEventListener("resize", debounceResize);

const logSocial = (category) => {
  gtag("event", "Clicked", {
    "event_category": category
  });
}
