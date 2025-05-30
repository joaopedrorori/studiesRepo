export default function fillTable(data) {
    const purchaseTable = document.querySelector("#purchase-table");
    data.forEach((item) => {
        if (purchaseTable && purchaseTable instanceof HTMLTableSectionElement) {
            purchaseTable.innerHTML += `
        <tr>
          <td>${item.Nome}</td>
          <td>${item.Email}</td>
          <td>${item["Valor (R$)"] !== "-"
                ? Number(item["Valor (R$)"].replace(".", "").replace(",", ".")).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })
                : "-"}</td>
          <td>${item["Forma de Pagamento"] === "Cartão de Crédito"
                ? "Credit Card"
                : "Ticket"}</td>
          <td>${item.Status === "Paga"
                ? "Paid"
                : item.Status === "Recusada pela operadora de cartão"
                    ? "Refused by the credit card company"
                    : "Waiting payment"}</td>
        </tr>
      `;
        }
    });
}
//# sourceMappingURL=fillTable.js.map