let Router = () => {
    let loading = ``;
    let template = ``;
    let isLogin = { status: null, token: "" };
    let Routes = [];
    let NotFount = `<h1>Page not found</h1>`;
    let Loading = (addLoading) => (loading = addLoading);
    let Route = ({ path = null, template, protect = false, props = "" }) => {
      Routes.push({ path, template, protect, props });
    };
    let Render = () => {
      document.getElementById("root").innerHTML =
        (Routes[0].template(Routes[0].props) || "") + loading;
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
            if ((e.path === null || e.path === pathname) && e.protect === false) {
              template += e.template(e.props);
            } else {
              if (
                e.path === pathname &&
                e.protect === isLogin.status &&
                e.protect === true
              ) {
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
      window.addEventListener("hashchange", (e) => {
        console.log("render");
        Render();
      });
    };
    let PageNotFound = (addNotFound) => (NotFount = addNotFound);
    let Login = ({ status, token } = isLogin) => {
      isLogin = { status, token };
      return isLogin;
    };
    return [Loading, Route, Render, RenderEvent, PageNotFound, Login];
  };

