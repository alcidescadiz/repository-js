const puppeteer = require("puppeteer");
const jsonGoogle = require("./instruccionesGoogle.json");

async function scrapGoogle(jsonGoogle) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      defaultViewport: {
        width: 1080,
        height: 1920,
      },
    });
    const page = await browser.newPage();
    await page.goto(`${jsonGoogle[0].data.link}`, {
      waitUntil: "networkidle0",
      timeout: 0,
    });
    await page.setDefaultNavigationTimeout(0);
    await page.screenshot({ path: "pagina.png" });

    const input = `${jsonGoogle[1].data.selector}`;
    const valor = `${jsonGoogle[1].data.value}`;
    const btn = `${jsonGoogle[2].data.selector}`;

    await page.type(input, `${valor}`, { delay: 200 });
    await page.waitForSelector(input, { visible: true });
    await page.click(`${btn}`);

    await page.waitForTimeout(3000);
    const element = `${jsonGoogle[3].data.href}`;

    const result = await Evaluate(page, element);

    if (jsonGoogle[4].data.loops.includes(5)) {
      loops(page, result);
      console.log(result);
    }
  } catch (error) {
    console.log({
      Mensaje: error.message,
      Error: "Estructura JSON no adecuada",
    });
  }

  //await browser.close();
}
module.exports = { scrapGoogle };

async function loops(page, result) {
  for (let link of result) {
    await page.goto(link);
    await page.waitForTimeout(2000);
  }
}

async function Evaluate(page, selector, filtro = "youtube") {
  const result = await page.evaluate((selector) => {
    let titulo = document.querySelectorAll(selector);
    return [...titulo].map((t) => t.href).filter((e) => !e.includes(filtro));
  }, selector);
  return result;
}

function objetoBusqueda(selector) {
  return {
    titulo: document.getElementsByClassName(selector)[index].innerText,
    contenido: document.getElementsByClassName(selector)[index].innerText,
  };
}

async function EvaluatefULL(page, selector, objetoBusqueda, filtro = "youtube") {
  let result = await page.evaluate(() => {
    let datos = [];
    for (let index = 0; index < 5; index++) {
      let  = objetoBusqueda(selector)
      datos.push(objetoBusqueda);
    }
    return datos;
  });
  return result;
}



function name(nombre) {
  console.log(`Mi nombre es: ${nombre}`)
}

name('alcides')