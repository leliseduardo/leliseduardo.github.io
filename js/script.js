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

// Barra de porcentagem
// const htmlText = document.getElementById("stack-html-text");
// const html = document.getElementById("html");
// const cssText = document.getElementById("stack-css-text");
// const css = document.getElementById("css");
// const jsText = document.getElementById("stack-js-text");
// const js = document.getElementById("js");
// const bootstrapText = document.getElementById("stack-bootstrap-text");
// const bootstrap = document.getElementById("bootstrap");
// const sassText = document.getElementById("stack-sass-text");
// const sass = document.getElementById("sass");
// const mysqlText = document.getElementById("stack-mysql-text");
// const mysql = document.getElementById("mysql");
// const reactText = document.getElementById("stack-react-text");
// const react = document.getElementById("react");
// const nodeText = document.getElementById("stack-node-text");
// const node = document.getElementById("node");
// const mongoText = document.getElementById("stack-mongo-text");
// const mongo = document.getElementById("mongo");
// const postgreeText = document.getElementById("stack-postgree-text");
// const postgree = document.getElementById("postgree");
// const sequelizeText = document.getElementById("stack-sequelize-text");
// const sequelize = document.getElementById("sequelize");
// const typescriptText = document.getElementById("stack-typescript-text");
// const typescript = document.getElementById("typescript");
// const expressText = document.getElementById("stack-express-text");
// const express = document.getElementById("express");
// let control = 0;

// function changePercentage(element, min, max, text, tam) {
//   element.style.backgroundColor = "#00bbc9";

//   setInterval(() => {
//     if (min <= max) {
//       element.style.width = min * tam + "px";
//       element.innerHTML = min + "%";

//       min++;
//     }
//     if (min === max) {
//       control = 0;
//       setTimeout(() => {
//         element.style.backgroundColor = "transparent";
//         element.innerHTML = text;
//         element.style.alignSelf = "center";
//       }, 2000);
//     }
//   }, 20);
// }

// html.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(htmlText, 0, 100, "HTML", 3.35);
//   }
// });
// css.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(cssText, 0, 100, "CSS", 3.35);
//   }
// });
// js.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(jsText, 0, 100, "Javascript", 3.35);
//   }
// });
// bootstrap.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(bootstrapText, 0, 100, "Bootstrap", 1.75);
//   }
// });
// sass.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(sassText, 0, 100, "SASS", 1.75);
//   }
// });
// mysql.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(mysqlText, 0, 100, "MySql", 1.75);
//   }
// });
// react.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(reactText, 0, 100, "ReactJS", 1.75);
//   }
// });
// node.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(nodeText, 0, 75, "NodeJS", 1.75);
//   }
// });
// mongo.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(mongoText, 0, 75, "MondoDB", 1.75);
//   }
// });
// postgree.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(postgreeText, 0, 75, "PostgreeSQL", 1.75);
//   }
// });
// sequelize.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(sequelizeText, 0, 75, "Sequelize", 1.75);
//   }
// });
// typescript.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(typescriptText, 0, 75, "Typescript", 1.75);
//   }
// });
// express.addEventListener("click", () => {
//   if (control === 0) {
//     control = 1;
//     changePercentage(expressText, 0, 75, "ExpressJS", 1.75);
//   }
// });

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
