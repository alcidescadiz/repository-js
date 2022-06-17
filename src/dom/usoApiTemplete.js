let items = document.querySelector('#items') // div
let templete = document.querySelector('#card').content // templete card
let fragment = document.createDocumentFragment() // fragment card

let TableItems = document.querySelector('#tableItems') //div 
let table =document.querySelector('#table').content // templete tabla
let rowInsert =document.querySelector('#rowInsert').content // templete row
let rowTable = document.createDocumentFragment() // fragment row

let modal = document.querySelector('#modal') //div 
let modalTemplete = document.querySelector('#modalTemplete').content // templete modal

document.addEventListener('DOMContentLoaded',()=>{
    getApi()
})

let getApi = async() =>{
    try {
        let res = await fetch('users.json')
        let data = await res.json()
        printTemplete(data)
    } catch (error) {
        console.log({message: error})
    }
    
}

let printTemplete = (data)=>{
    data.forEach(e => {
        createCards(e)
        createRoes(e)
    })
    items.appendChild(fragment)
    table.querySelector('tbody').appendChild(rowTable)
    TableItems.appendChild(table)
}

let createCards= (e)=>{
    templete.querySelector('h4').textContent = e.first_name
    templete.querySelector('img').src = e.image
    templete.querySelector('p').textContent = `Email: ${e.email} Name: ${e.first_name} Genger: ${e.gender}`
    const clone = templete.cloneNode(true)
    fragment.appendChild(clone)
}

let createRoes = (e)=>{
    rowInsert.querySelector('#Id').textContent = e.id
    rowInsert.querySelector('#Name').textContent = e.first_name
    rowInsert.querySelector('#Email').textContent = e.email
    rowInsert.querySelector('#Gender').textContent = e.gender
    const cloneRow = rowInsert.cloneNode(true)
    rowTable.appendChild(cloneRow)
}

document.querySelector('#tableItems').addEventListener('click',(e)=>{
    if (e.target.value === 'Ver') {
        let fila = e.target.parentNode.parentNode
        let [id, name, email, gender ]= fila.querySelectorAll('td')
        modal.appendChild(modalTemplete)
        modal.querySelector('#fId').value= id.innerText
        modal.querySelector('#fName').value= name.innerText
        modal.querySelector('#fEmail').value= email.innerText
        modal.querySelector('#fGender').value=  gender.innerText
    }
})
