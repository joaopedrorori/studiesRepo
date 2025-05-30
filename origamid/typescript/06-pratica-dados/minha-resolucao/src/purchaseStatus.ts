export function purchaseStatus(data: Purchase[]) {
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

export function dayOfTheWeek(data: Purchase[]) {
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
