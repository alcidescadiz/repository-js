export function Menu([fn = ""]) {
    let divPrincipal= document.createElement('div')
    let div= document.createElement('div')
    div.classList = 'container'
    let a= document.createElement('a')
    a.href = '#'
    a.classList= 'px-2'
    a.innerHTML= 'Home'
    div.appendChild(a)
    let a5= document.createElement('a')
    a5.href = '#inputs'
    a5.classList= 'px-2'
    a5.innerHTML= 'Table'
    div.appendChild(a5)
    let a6= document.createElement('a')
    a6.href = '#gallery'
    a6.classList= 'px-2'
    a6.innerHTML= 'Gallery'
    div.appendChild(a6)
    if (fn().status === true ){
      let a3= document.createElement('a')
      a3.href = '#about'
      a3.classList= 'px-2'
      a3.innerHTML= 'About'
      div.appendChild(a3)
      let a4= document.createElement('a')
      a4.href = '#contac'
      a4.classList= 'px-2'
      a4.innerHTML= 'Contac'
      div.appendChild(a4)
      let a6= document.createElement('a')
      a6.href = '#logOut'
      a6.classList= 'px-2'
      a6.innerHTML= 'LogOut'
      div.appendChild(a6)
    }
    if (fn().status === false || fn().status === null ){

      let a2= document.createElement('a')
      a2.href = '#login'
      a2.classList= 'px-2'
      a2.innerHTML= 'Login'
      div.appendChild(a2)
    }
    divPrincipal.appendChild(div)
    let hr= document.createElement('hr')
    divPrincipal.appendChild(hr)
    //document.querySelector('#prueba').append(div)
    return divPrincipal
  }
  
  export let piePagina = () => {
    let div= document.createElement('div')
    div.innerHTML = `<div 
    style='bottom: 0px ;'>
        <p style='text-align: center;'>pie de pagina</p>
    </div>`
    return div
  };
  
  export let htmlLogin = ([fn]) => {
    let div= document.createElement('div')
    let h4= document.createElement('h4')
    h4.innerText= 'form login'
    let a= document.createElement('a')
    a.href = '#'
    a.onclick = ()=> fn({status: true})
    a.innerHTML= 'Log In '
    h4.innerText= 'Log In'
    div.appendChild(h4)
    div.appendChild(a)
  
    return div
  };
  
  export let htmlLogOut = ([fn]) => {
    let div= document.createElement('div')
    let h4= document.createElement('h4')
    h4.innerText= 'form'
    let a= document.createElement('a')
    a.href = '#login'
    a.onclick = ()=> fn({status: false})
    a.innerHTML= 'Log Out '
    a.id = "tryLogin"
    h4.innerText= 'Log Out'
    div.appendChild(h4)
    div.appendChild(a)
  
    return div
  };
  
  
  export let Home = () => {
    let h3= document.createElement('h3')
    h3.innerHTML= 'Home'
    return h3;
  };
  export let About = () => {
    let h3= document.createElement('h3')
    h3.innerHTML= 'About'
    return h3;
  };
  export let Contac = () => {
    let h3= document.createElement('h3')
    h3.innerHTML= 'Contact'
    return h3;
  };