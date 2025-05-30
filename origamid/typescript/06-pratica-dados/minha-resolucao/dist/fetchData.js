import { showData } from "./showData.js";
export async function fetchData(url) {
    const r = await fetch(url);
    const data = await r.json();
    showData(data);
}
//# sourceMappingURL=fetchData.js.map