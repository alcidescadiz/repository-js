export let Menu = document.createElement('div')

let li1= document.createElement('a')
li1.innerText = 'Home'
li1.id= 'home'

let li2= document.createElement('a')
li2.innerText = 'Contact'
li2.id= 'contact'

let li3= document.createElement('a')
li3.innerText = 'Users'
li3.id = 'users'

Menu.append(li1, li2, li3)