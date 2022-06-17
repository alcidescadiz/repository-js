import {Home} from './componentes/home.js'
import {Contact} from './componentes/contact.js'
import {Users} from './componentes/users.js'
import {Menu} from './componentes/menu.js'

const root = document.querySelector('#root')

root.appendChild(Menu)

document.querySelector('#home').addEventListener('click', (e)=>{
    console.log('click home')
    root.innerHTML=''
    root.append(Menu, Home)
})

document.querySelector('#contact').addEventListener('click', (e)=>{
    console.log('click contact')
    root.innerHTML=''
    root.append(Menu, Contact)
})

document.querySelector('#users').addEventListener('click', (e)=>{
    console.log('click users')
    root.innerHTML=''
    root.append(Menu, Users)
})