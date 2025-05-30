export default function paymentMethod(data) {
    const creditCard = document.querySelector("#pm-credit-card");
    const ticket = document.querySelector("#pm-ticket");
    const cleanData = data.map((item) => item["Forma de Pagamento"]);
    if (creditCard &&
        creditCard instanceof HTMLSpanElement &&
        ticket &&
        ticket instanceof HTMLSpanElement) {
        const creditCardAmount = cleanData.filter((item) => item === "Cartão de Crédito").length;
        creditCard.innerText = " " + creditCardAmount;
        ticket.innerText = " " + (data.length - creditCardAmount);
    }
}
//# sourceMappingURL=payMethod.js.map