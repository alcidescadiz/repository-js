import { BrowserHiden } from "./modulo/browser.js";
import { evaluateFor } from "./modulo/evaluatefor.js";
import { scrollPage } from "./modulo/scroll.js";

async function Alcides() {
  const { browser, page } = await BrowserHiden();

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


