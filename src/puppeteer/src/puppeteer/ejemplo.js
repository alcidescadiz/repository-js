import puppeteer from "puppeteer";

export let Navegar = async (pageUrl, searchWord) => {
  try {
    const browser2 = await puppeteer.launch({ headless: false });
    const page2 = await browser2.newPage();
    await page2.goto(pageUrl);
    await page2.type("input[name=q]", searchWord, { delay: 200 });
    await (await page2.$("input[name=q]")).press("Enter");
    await page2.waitForSelector("div #search h3");
    let dato = await page2.evaluate(() => {
      let datos = [];
      for (let index = 0; index < 5; index++) {
        let objetoBusqueda = {
          titulo: document.getElementsByClassName("LC20lb MBeuO DKV0Md")[index]
            .innerText,
          contenido:
            document.getElementsByClassName(
              "VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf"
            )[index].innerText ||
            document.getElementsByClassName("Wt5Tfe")[index].innerText,
        };


        datos.push(objetoBusqueda);
      }
      return datos;
    });

    console.log(dato);

    await browser2.close();
  } catch (error) {
    console.log({ mesg: error.message });
  }
};

Navegar("https://www.google.com/", "js docs node");
