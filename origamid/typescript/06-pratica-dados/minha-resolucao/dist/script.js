import showTotal from "./total.js";
import paymentMethod from "./payMethod.js";
import { purchaseStatus, dayOfTheWeek } from "./purchaseStatus.js";
import fillTable from "./fillTable.js";
function showData(data) {
    showTotal(data);
    paymentMethod(data);
    purchaseStatus(data);
    dayOfTheWeek(data);
    fillTable(data);
}
async function fetchData(url) {
    const r = await fetch(url);
    const data = await r.json();
    showData(data);
}
fetchData("https://api.origamid.dev/json/transacoes.json");
//# sourceMappingURL=script.js.map