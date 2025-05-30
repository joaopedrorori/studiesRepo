export default function showTotal(data: Purchase[]) {
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
