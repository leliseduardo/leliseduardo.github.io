// Efeito de digitação em presentation
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

// Botão copy em contato
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const copyEmail = document.getElementById("copyEmail");
const copyPhone = document.getElementById("copyPhone");
let copyText = "";

function handleCopy(target) {
  target.classList.remove("bi-clipboard");
  target.classList.remove("copy");
  target.classList.add("bi-check-lg");
  target.classList.add("checked");
  setTimeout(() => {
    target.classList.remove("bi-check-lg");
    target.classList.remove("checked");
    target.classList.add("bi-clipboard");
    target.classList.add("copy");
  }, 2000);
}

function textCapture(target) {
  copyText = target.innerHTML;
  navigator.clipboard.writeText(copyText);
}

copyEmail.addEventListener("click", (ev) => {
  handleCopy(ev.currentTarget); // ev.currentTargert = copyEmail
  textCapture(email);
});
copyPhone.addEventListener("click", () => {
  handleCopy(copyPhone);
  textCapture(phone);
});
