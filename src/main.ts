// Snack 1

let variable: unknown = null;
if (typeof variable === "string"){
  variable.toUpperCase();
} else if (typeof variable === "number"){
  console.log(variable*2);
} else if (typeof variable === "boolean"){
  console.log(variable ? "Sì" : "No");
} else {
  console.log("Tipo non supportato");
}
