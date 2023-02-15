function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function typeWrite(element1, element2, element3) {
  const textElement1 = element1.innerHTML.split("");
  element1.innerHTML = " ";
  const textElement2 = element2.innerHTML.split("");
  element2.innerHTML = " ";
  const textElement3 = element3.innerHTML.split("");
  element3.innerHTML = " ";

  textElement1.forEach((caracter, i) => {
    setTimeout(() => {
      element1.innerHTML += caracter;
    }, 75 * i);
  });
  await delay(2700);
  textElement2.forEach((caracter, i) => {
    setTimeout(() => {
      element2.innerHTML += caracter;
    }, 60 * i);
  });
  await delay(3500);
  textElement3.forEach((caracter, i) => {
    setTimeout(() => {
      element3.innerHTML += caracter;
    }, 60 * i);
  });
}

const elementTitle = document.getElementById("title-presentation");
const elementFirstP = document.getElementById("text-presentation-p1");
const elementSecondP = document.getElementById("text-presentation-p2");

typeWrite(elementTitle, elementFirstP, elementSecondP);
