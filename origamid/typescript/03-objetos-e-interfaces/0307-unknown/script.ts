// Unknown
// Indica que nao sabemos o tipo de dados que pode ser passado.
// Diferente do any, o unknown so ira permitir o uso de metodos quando a Type Safety estiver garantida

// Any x Unknown
// Unknown nao vai assumir nada que o tipo pode ser, entao pra poder usar qualquer metodo ou propriedade, uma typeguard deve ser usada

function typeGuard(value: unknown) {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed();
  if (value instanceof HTMLElement) return value.innerText;
}

console.log(typeGuard("string"));
console.log(typeGuard(200));
console.log(typeGuard(document.body));
