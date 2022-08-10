import { BrowserHiden } from "./modulo/browser.js";

const url = [
  "https://coinmarketcap.com/currencies/hive-blockchain/",
  "https://coinmarketcap.com/currencies/hive-dollar/",
  "https://coinmarketcap.com/currencies/eos/",
  "https://coinmarketcap.com/currencies/steem-dollars/",
  "https://coinmarketcap.com/currencies/steem/",
];

export let Navegar = async (pageUrl) => {
  try {
    const {browser,  page} = await BrowserHiden()
    let resultado = [];
    for (let index = 0; index < pageUrl.length; index++) {
      await page.goto(pageUrl[index]);
      await page.waitForSelector(".priceValue span");
      let dato = await page.evaluate(() => {
        let objetoBusqueda = {
          crypto: document.querySelector("h2 small")?.innerText || "",
          value$: document.querySelector(".priceValue span")?.innerText || "",
        };
        return objetoBusqueda;
      });
      resultado.push(dato);
    }
    console.table(resultado);
    await browser.close();
  } catch (error) {
    console.log({ mesg: error.message });
  }
};

Navegar(url);

