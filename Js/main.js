// //                                       1

// let countryList = [
//   {
//     country: "Україна",
//     capital: "Київ",
//     count: 40000000,
//   },
//   {
//     country: "Грузія",
//     capital: "Тбілісі",
//     count: 10000000,
//   },
//   {
//     country: "Великобританія",
//     capital: "Лондон",
//     count: 100000000,
//   },

//   {
//     country: "США",
//     capital: "Вашингтон",
//     count: 300000000,
//   },
// ];

// let list = document.createElement("ol");
// document.body.prepend(list);
// for (let j in countryList) {
//   let country = document.createElement("li");
//   for (let i in countryList[j]) {
//     let p = document.createElement("p");
//     switch (i) {
//       case "country":
//         if (countryList[j][i] === "Україна") p.style.backgroundColor = "blue";
//         p.innerText = countryList[j][i];
//         break;
//       case "capital":
//         if (countryList[j][i] === "Київ") p.style.backgroundColor = "yellow";
//         p.innerText = `Столиця: м.${countryList[j][i]}`;
//         break;
//       case "count":
//         p.innerText = `Населення: ${countryList[j][i] / 1000000} млн.`;
//         break;
//     }
//     country.append(p);
//   }
//   list.append(country);
// }

//                                       2

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function () {
  if (this.event.target == modal) {
    modal.style.display = "none";
  }
};

//                                        3

let click = document.getElementById("click");
click.onclick = function () {
  let list = document.getElementById("list");
  for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.innerText = `Номер ${i}`;
    list.appendChild(li);
  }
  console.log(list.childNodes.length);
};

let change = document.getElementById("change");
change.addEventListener("click", function () {
  let number = document.getElementById("number").value;
  let color = document.getElementById("color").value;
  if (number < 0 || number > list.childNodes.length + 1) {
    alert("Error");
  }
  let tmp = list.childNodes[number];
  console.log(tmp);
  tmp.style.backgroundColor = color;
});
