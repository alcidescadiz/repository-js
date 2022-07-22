let Router = ()=> {
  let loading = ``;
  let template = ``;
  let Routes = [];
  let NotFount = `<h1>Page not found</h1>`;
  let Loading = (addLoading) => (loading = addLoading);
  let Route = ({ path = null, template }) => {
    Routes.push({ path, template });
  };
  let Render = () => {
    document.getElementById("root").innerHTML =
      (Routes[0]?.template || "") + loading;
    if (Routes.length === 0) {
      document.getElementById("root").innerHTML = "<h3>Hello World</h3>";
    }
    setTimeout(() => {
      let pathname = window.location.hash;
      if (!Routes.map((e) => e.path).includes(pathname)) {
        Routes.map((e, i) => {
          if (e.path === null) {
            template = (Routes[0].template || "") + NotFount;
          }
          document.getElementById("root").innerHTML = template;
        });
      } else {
        Routes.map((e, i) => {
          if (e.path === null) {
            template += e.template;
          } else {
            if (e.path === pathname) {
              template += e.template;
            }
          }
          document.getElementById("root").innerHTML = template;
        });
      }
      template = ``;
    }, 5000);
  };
  let RenderEvent = () => {
    document.addEventListener("click", (e) => {
      if (e.target.href) {
        Render();
        console.log("render");
      }
    });
  };
  let PageNotFound = (addNotFound) => (NotFount = addNotFound);
  return [Loading, Route, Render, RenderEvent, PageNotFound];
};

let [Loading, Route, Render, RenderEvent, PageNotFound] = Router();

Loading(`<div>Loading...<div>`);

let menu = `
<a href="#" >Home </a> |
<a href="#about" >About </a> |
<a href="#contac" >Contac </a> |
<a href="#zoom" >Zoom </a>
<hr>
`;

Route({ template: menu });

Route({ path: "", template: "<h3>Home</h3>" });
Route({ path: "#about", template: "<h3>About</h3>" });
Route({ path: "#contac", template: "<h3>Contac</h3>" });

Route({ template: `<div 
style='bottom: 0px ; position: absolute'>
    <p style='text-align: center;'>pie de pagina</p>
</div>` });


Render();
RenderEvent();
