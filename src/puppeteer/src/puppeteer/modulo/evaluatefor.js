export async function evaluateFor(page, selector, propieties) {
    const result = await page.evaluate(
      (selector, propieties) => {
        const posts = document.querySelectorAll(selector);
        let datos = []
        posts.forEach((element, index) => {
          let objeto = {};
          for (let j = 0; j < propieties.length; j++) {
            if (propieties[j].name === 'link') {
              objeto[propieties[j].name] = `(${document.querySelectorAll(propieties[j].selector)[index]?.[propieties[j].type]})`||''
            }
            if (propieties[j].name === 'title') {
              objeto[propieties[j].name] = `[${document.querySelectorAll(propieties[j].selector)[index]?.[propieties[j].type]}]`||''
            }
            if (propieties[j].name === 'date') {
              objeto[propieties[j].name] = `(${document.querySelectorAll(propieties[j].selector)[index]?.[propieties[j].type]})`||''
            }
          }
          datos.push(objeto)
        });
        return datos;
      },
      selector,
      propieties
    );
    return result;
  }