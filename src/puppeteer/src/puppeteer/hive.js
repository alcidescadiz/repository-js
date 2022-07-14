import { BrowserHiden } from "./modulo/browser.js";
import { evaluateFor } from "./modulo/evaluatefor.js";
import { scrollPage } from "./modulo/scroll.js";

async function Alcides() {
  const { browser, page } = await BrowserHiden(false);

  await page.goto(`https://hive.blog/@alcidescadiz`, {
    waitUntil: "networkidle0",
    timeout: 0,
  });
  await scrollPage(page)
  await page.waitForTimeout(6000);
  const propieties = [
    {
      name: "title",
      type: "innerText",
      selector: "div h2 a",
    },
    {
      name: "link",
      type: "href",
      selector: "div h2 a",
    },
    {
      name: "date",
      type: "title",
      selector: ".updated",
    },
  ];
  const result = await evaluateFor(page, "div h2 a", propieties);
  let arreglo = result.map(e=> `${e.title+e.link}`)
  console.log({ total: result.length, data: arreglo });
  await browser.close();
}



Alcides();

function recursivo (numeros = [], acc= 0){
  let n = numeros.length
  let sum = acc + numeros[n-1]
  console.log(sum)
  if (n === 1) return
  numeros.length  = numeros.length -1
  recursivo(numeros, sum)
}

recursivo([1,2,3,4])

const propieties = [
  {
    id: 1,
    name: "title",
    type: "innerText",
    selector: "div h2 a",
  },
  {
    id:3,
    name: "link",
    type: "href",
    selector: "div h2 a",
  },
  {
    id:2,
    name: "date",
    type: "title",
    selector: ".updated",
  },
];

console.log(propieties.sort((a,b) => a.id - b.id))

console.log([].length)