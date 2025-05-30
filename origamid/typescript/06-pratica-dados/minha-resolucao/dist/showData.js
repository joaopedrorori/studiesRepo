import showTotal from "./total.js";
import paymentMethod from "./payMethod.js";
import { purchaseStatus, dayOfTheWeek } from "./purchaseStatus.js";
import fillTable from "./fillTable.js";
export function showData(data) {
    showTotal(data);
    paymentMethod(data);
    purchaseStatus(data);
    dayOfTheWeek(data);
    fillTable(data);
}
//# sourceMappingURL=showData.js.map