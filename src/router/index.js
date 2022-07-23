let Router = () => {
  let loading = ``;
  let template = ``;
  let isLogin = {status: null, token : ''};
  let Routes = [];
  let NotFount = `<h1>Page not found</h1>`;
  let Loading = (addLoading) => (loading = addLoading);
  let Route = ({ path = null, template, protected = false, props = '' }) => {
    Routes.push({ path, template, protected,props });
  };
  let Render = () => {
    document.getElementById("root").innerHTML =
      (Routes[0]?.template(Routes[0]?.props) || "") + loading;
    if (Routes.length === 0) {
      document.getElementById("root").innerHTML = "<h3>Hello World</h3>";
      return;
    }
    setTimeout(() => {
      let pathname = window.location.hash;
      if (!Routes.map((e) => e.path).includes(pathname)) {
        template = (Routes[0].template(Routes[0].props) || "") + NotFount;
        document.getElementById("root").innerHTML = template;
        return;
      } else {
        Routes.map((e, i) => {
          if (((e.path === null ||e.path === pathname ) && (e.protected === false || isLogin.status === null))){
            template += e.template(e.props);
          }else{
            if ( e.path === pathname && e.protected === isLogin.status && e.protected === true) {
              template += e.template(e.props);
            }
          }
        });
        document.getElementById("root").innerHTML = template;
      }
    }, 30);
    template = ``;
  };
  let RenderEvent = () => {
    document.addEventListener("click", (e) => {
      if (e.target.href) {
        Render();
        console.log("render");
        console.log(Login());
      }
    });
  };
  let PageNotFound = (addNotFound) => NotFount = addNotFound;
  let Login = ({status, token}= isLogin) => {
    isLogin = {status, token};
    return isLogin;
  };
  return [Loading, Route, Render, RenderEvent, PageNotFound, Login];
};

let [Loading, Route, Render, RenderEvent, PageNotFound, Login] = Router();

//Login({status: true, token: ''}); // logueado

function Menu(fn='') {
  let menu = `
    <a href="#" >Home </a> |
    <a href="#login" >Login </a> |
    <p onclick="alert('hola')">hola</p>
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
    if (fn().status === false || fn().status === null) return menu

  return  menuTrue;
}

let piePagina = ()=> {
  return `<div 
  style='bottom: 0px ; position: absolute'>
      <p style='text-align: center;'>pie de pagina</p>
  </div>`
}

let htmlLogin = ()=>{
  return `
  <h4>form</h4>
  <div>
    <a href="#" onclick ="Login({status: true})">Log In </a>
  </div>
  `
}

let htmlLogOut = ()=>{
  return `
  <h4>form</h4>
  <a href="#login" onclick ="Login({status: false})">Log Out </a>
  `

}

let Home = ()=>{
  let html = `
    <h3>Home</h3>
  `
  return html
}
let About = ()=>{
  let html = `
    <h3>About</h3>
  `
  return html
}
let Contac = ()=>{
  let html = `
    <h3>Contac</h3>
  `
  return html
}
Route({ template:Menu, props: Login, protected: false});
Route({ path: "", template: Home, protected: false });
Route({ path: "#about", template: About, protected: true });
Route({ path: "#contac", template: Contac, protected: true });
Route({ path: "#inputs", template: Table, protected: true });
Route({ path: "#login", template: htmlLogin, protected: false });
Route({ path: "#logOut", template: htmlLogOut, protected: true });

Route({ template: piePagina });

Render();
RenderEvent();
