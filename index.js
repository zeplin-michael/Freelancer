/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function freelancerObject() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  // Why does adding PRICE_RANGE before the brackets affect the result
  const rate = Math.floor(Math.random() * (200 - 20 + 1)) + 20;
  return { name, occupation, rate };
}
console.log(freelancerObject());

const freelancers = Array.from({ length: NUM_FREELANCERS }, freelancerObject);
console.log(freelancers);

function averageRate(freelancers) {
  let sum = 0;
  for (let i = 0; i < freelancers.length; i++) {
    sum += freelancers[i].rate;
  }
  return sum / freelancers.length;
}
console.log(averageRate(freelancers));

const allAverageRates = averageRate(freelancers);
console.log(allAverageRates);

function singleFreelancerComponent({ name, occupation, rate }) {
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = ` 
  <tr>
      <td> ${name} </td>
      <td> ${occupation} </td>
      <td> ${rate} </td>
  </tr>
  `;
  return tableRow;
}

function assigningRow() {
  const tbody = document.createElement("tbody");
  const freelancerRows = freelancers.map(singleFreelancerComponent);
  tbody.replaceChildren(...freelancerRows);
  return tbody;
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <h3 id = "table-head"> The average rate is ${allAverageRates} </h3>
  <table>
    <thead>
      <tr>
        <th>NAME</th>
        <th>OCCUPATION</th>
        <th>RATE</th>
      </tr>
    </thead>
    <tbody id = "table-body">


    </tbody>
  </table>
  `;
  app.querySelector("#table-body").replaceWith(assigningRow());
}

render();
