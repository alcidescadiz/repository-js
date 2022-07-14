import puppeteer from "puppeteer";

/**
 * 
 * @param {*} show true? || false || 'args'
 * @returns 
 */
export async function BrowserHiden(show = true) {
    const params = {};
    if (show) {
      params.headless = true;
    } else {
      params.headless = false;
    }
    if (show === "args") {
      params.args = ["--no-sandbox"];
    }
    const browser = await puppeteer.launch({
      ...params,
      devtools: !show,
      defaultViewport: {
        width: 1080,
        height: 1920,
      },
    });
    const page = await browser.newPage();
    if (!show) {
      page.setDefaultNavigationTimeout(0);
    }
    return { browser, page };
  }