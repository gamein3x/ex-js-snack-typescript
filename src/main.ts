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

// Snack 2

type Dipendente = {
  nome: string,
  cognome: string,
  annoDiNascita: number,
  sesso: "M" | "F",
  anniDiServizio: number[],
  readonly emailAziendale: string,
  contratto: "Indeterminato" | "Determinato" | "Freelance"
};

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[],
  certifiazioni: string[]
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}