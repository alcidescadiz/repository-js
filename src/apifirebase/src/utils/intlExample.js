console.log(
  new Intl.NumberFormat("es", {
    style: "currency",
    currency: "VES",
    maximumFractionDigits: 2,
  }).format(5468152.446)
); // "5.468.152,45 VES"

console.log(
  new Intl.DateTimeFormat("es", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date())
); // "viernes, 24 de junio de 2022, 9:33"
