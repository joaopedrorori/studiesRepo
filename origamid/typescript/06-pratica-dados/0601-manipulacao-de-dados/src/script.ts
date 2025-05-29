// 1 - Acesse os dados da api: https://api.origamid.dev/json/transacoes.json
// 2 - Mostre em uma tabela os dados de cada transação.
// 3 - Calcule:
// 3.1 - Soma total dos valores
// 3.2 - Transações por meio de pagamento.
// 3.3 - Transações por status.
// 3.4 - Total de vendas por dia da semana.
// 3.5 - Dia da semana com mais vendas.
// 4 - Mostre as estatísticas na tela.
// 5 - Organize o código em pequenos módulos.
// 6 - Normalize os dados da API se achar necessário.

interface Purchase {
  Status:
    | "Recusada pela operadora de cartão"
    | "Aguardando pagamento"
    | "Paga"
    | "Estornada";
  Id: number;
  Data: string;
  Nome: string;
  "Forma de Pagamento": "Cartão de Crédito" | "Boleto";
  Email: string;
  "Valor (R$)": string;
  "Cliente Novo": boolean;
}

function showTotal(data: Purchase[]) {
  const total = document.querySelector("#s-total");
  const cleanData = data
    .map((item) => item["Valor (R$)"])
    .filter((item) => item !== "-")
    .map((item) => Number(item.replace(".", "").replace(",", ".")));
  if (total && cleanData && total instanceof HTMLSpanElement) {
    total.innerText =
      " " +
      cleanData
        .reduce((acc, curr) => acc + curr, 0)
        .toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
        .replace("$", "$ ");
  }
}

function paymentMethod(data: Purchase[]) {
  const creditCard = document.querySelector("#pm-credit-card");
  const ticket = document.querySelector("#pm-ticket");
  const cleanData = data.map((item) => item["Forma de Pagamento"]);
  if (
    creditCard &&
    creditCard instanceof HTMLSpanElement &&
    ticket &&
    ticket instanceof HTMLSpanElement
  ) {
    const creditCardAmount = cleanData.filter(
      (item) => item === "Cartão de Crédito"
    ).length;
    creditCard.innerText = " " + creditCardAmount;
    ticket.innerText = " " + (data.length - creditCardAmount);
  }
}

function purchaseStatus(data: Purchase[]) {
  const paid = document.querySelector("#ps-paid");
  const refused = document.querySelector("#ps-refused");
  const waiting = document.querySelector("#ps-waiting");
  const reversed = document.querySelector("#ps-reversed");
  const cleanData = data.map((item) => item["Status"]);
  if (
    paid &&
    paid instanceof HTMLSpanElement &&
    refused &&
    refused instanceof HTMLSpanElement &&
    waiting &&
    waiting instanceof HTMLSpanElement &&
    reversed &&
    reversed instanceof HTMLSpanElement
  ) {
    const paidAmount = cleanData.filter((item) => item === "Paga").length;
    paid.innerText = " " + paidAmount;
    const refusedAmout = cleanData.filter(
      (item) => item === "Recusada pela operadora de cartão"
    ).length;
    refused.innerText = " " + refusedAmout;
    const waitingAmount = cleanData.filter(
      (item) => item === "Aguardando pagamento"
    ).length;
    waiting.innerText = " " + waitingAmount;
    const reversedAmount = cleanData.filter(
      (item) => item === "Estornada"
    ).length;
    reversed.innerText = " " + reversedAmount;
  }
}

function dayOfTheWeek(data: Purchase[]) {
  const day = document.querySelector("#ps-week-day");
  const cleanData = data.map((item) => {
    const [datePart, timePart] = item.Data.split(" ");
    const [day, month, year] = datePart.split("/");
    return new Date(`${year}-${month}-${day}T${timePart}`).getDay();
  });
  const dayNames = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  type WeekDays = (typeof dayNames)[number];
  const daysObj: Record<WeekDays, number> = {
    sunday: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
  };

  cleanData.forEach((item) => {
    const name = dayNames[item];
    daysObj[name] += 1;
  });

  if (day && day instanceof HTMLSpanElement && daysObj) {
    let mostSalesDay = "";
    let acc = 0;
    for (let key in daysObj) {
      if (acc < daysObj[key]) mostSalesDay = key;
    }
    day.innerText = mostSalesDay.replace(
      mostSalesDay[0],
      mostSalesDay[0].toUpperCase()
    );
  }
}

function table(data: Purchase[]) {
  const purchaseTable = document.querySelector("#purchase-table");
  data.forEach((item) => {
    if (purchaseTable && purchaseTable instanceof HTMLTableSectionElement) {
      purchaseTable.innerHTML += `
        <tr>
          <td>${item.Nome}</td>
          <td>${item.Email}</td>
          <td>${item["Valor (R$)"]}</td>
          <td>${item["Forma de Pagamento"]}</td>
          <td>${item.Status}</td>
        </tr>
      `;
    }
  });
}

function showData(data: Purchase[]) {
  showTotal(data);
  paymentMethod(data);
  purchaseStatus(data);
  dayOfTheWeek(data);
  table(data);
}

async function fetchData(url: string) {
  const r = await fetch(url);
  const data = await r.json();
  showData(data);
}
fetchData("https://api.origamid.dev/json/transacoes.json");
