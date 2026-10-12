// Snack 1

let variable: unknown = null;
if (typeof variable === "string"){
  variable.toUpperCase();
} else if (typeof variable === "number"){
  console.log(variable*2);
} else if (typeof variable === "boolean"){
  console.log(variable ? "Sì" : "No");
} else if (variable === null){
  console.log("Il dato è vuoto.");
} else if (Array.isArray(variable)){
  console.log(variable.length);
} else if (variable instanceof Promise){
  variable.then((msg) => console.log(msg));
} else {
  console.log("Tipo non supportato");
};
