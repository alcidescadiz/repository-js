import puppeteer from 'puppeteer';

export let Navegar = async ({pageUrl, selector, accion, searchWord})=>{
  switch (accion) {
    case 'abrir':
      console.log('holsa')
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      await page.goto(pageUrl);
      await browser.close();
      break;
    case 'google':
      const browser2 = await puppeteer.launch({ headless: false });
      const page2 = await browser2.newPage();
      await page2.goto(pageUrl);
      await page2.type('input[name=q]', searchWord, {delay: 200});
      await (await page2.$('input[name=q]')).press('Enter')
      await page2.waitForSelector('div #search h3')
      let dato = await page2.evaluate(()=> document.querySelectorAll('div #search h3')[0].innerText

        );
      // document.querySelectorAll('div #search h3')[0].innerText
      //await page.click
      console.log(dato)
      await browser2.close();
      return dato
      break;
    default:
      break;
  }


}
//Navegar('https://hive.blog/@alcidescadiz', 'h1', 'abrir')