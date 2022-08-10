let [Loading, Route, Render, RenderEvent, PageNotFound, Login] = Router();

function tryLogin(){
  try {
    setTimeout(()=>{
      Login({status: true})
    },10)
  } catch (error) {
  }
}
function Menu(fn = "") {
  let menu = `
    <a href="#" >Home </a> |
    <a href="#login" >Login </a> |
    <hr>
    `;
  let menuTrue = `
    <a href="#" >Home </a> |
    <a href="#about" >About </a> |
    <a href="#contac" >Contac </a> |
    <a href="#inputs" >Table </a> |
    <a href="#logOut">LogOut </a> |
    <hr>
    `;
  if (fn().status === false || fn().status === null) return menu;

  return menuTrue;
}

let piePagina = () => {
  return `<div 
  style='bottom: 0px ; position: absolute'>
      <p style='text-align: center;'>pie de pagina</p>
  </div>`;
};

let htmlLogin = () => {
  return `
  <h4>form</h4>
  <div>
    <a href="#" onclick ="tryLogin()">Log In </a>
  </div>
  `;
};

let htmlLogOut = () => {
  return `
  <h4>form</h4>
  <a href="#login" onclick ="Login({status: false})">Log Out </a>
  `;
};

let Home = () => {
  let html = `
    <h3>Home</h3>
  `;
  return html;
};
let About = () => {
  let html = `
    <h3>About</h3>
  `;
  return html;
};
let Contac = () => {
  let html = `
    <h3>Contac</h3>
  `;
  return html;
};
Route({ template: Menu, props: Login, protect: false });
Route({ path: "", template: Home, protect: false });
Route({ path: "#about", template: About, protect: true });
Route({ path: "#contac", template: Contac, protect: true });
Route({ path: "#inputs", template: Table, protect: true });
Route({ path: "#login", template: htmlLogin, protect: false });
Route({ path: "#logOut", template: htmlLogOut, protect: true });

Route({ template: piePagina });

Render();
RenderEvent();
