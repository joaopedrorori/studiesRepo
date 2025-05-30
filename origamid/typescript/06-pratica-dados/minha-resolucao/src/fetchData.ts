import { showData } from "./showData.js";

export async function fetchData(url: string) {
  const r = await fetch(url);
  const data = await r.json();
  showData(data);
}