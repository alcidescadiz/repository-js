/**
 * Script de Clientes
 * @module Clientes
 */
'use strict'
class clients {
    /**
     * Clase Clientes
     * @constructor
     * @param {string} name
     * @param {string} email
     * @param {number} telephone
     * @param {boolean} active
     */
    constructor(name, email, telephone){
        this.name=name
        this.email=email
        this.telephone=telephone
        this.active = true
    }
}
/**
 * Libreta de direccions
 */
class book {
    book_Clients = []
    constructor(){}
    add_clients(clients){
        this.book_Clients.push(clients)
        console.log(this.book_Clients)
    }
    delete_clients(index){
        //this.book_Clients[index].active = false
        this.book_Clients.splice(index, 1)
        table_zero()
    }
    total_active() {
        let inactive=0, num_active = this.book_Clients.map((e)=>{
            if (e.active === false){
                inactive+=1
            }
        })
        return inactive
    }
    searchOne(busca){
        this.book_Clients.find((e,i)=>{
            if (e.name === busca) {
                return  console.log(`El valor buscado es: Posición: ${i}  Valor: ${e.name}`)
            }
        })
    }  
    searchActive(){
        return this.book_Clients.filter((e)=>e.active === true)
    }  
    sortBook(){
        return this.book_Clients.sort((a,b)=> {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
        })  
    } 
    exitsEmail(emailb){
        return this.book_Clients.find((e,i)=> e.email === emailb)
    } 
}


let libreta = new book()

let boton1 = document.querySelector('#boton1')
let boton2 = document.querySelector('#boton2')
let boton3 = document.querySelector('#boton3')
let boton4 = document.querySelector('#boton4')
    
window.addEventListener('load', ()=>{
    console.log('pagina cargada')
})
    
boton1.addEventListener('click', ()=>{
    console.log('patron modular')
})

boton3.addEventListener('click', ()=>{
    libreta.searchOne('zanahoria')
})
    
let card_formulario = document.querySelector('#formulario')

let formulario = document.createElement("form")
let br = document.createElement("br")
let br2 = document.createElement("br")
let br3 = document.createElement("br")

 /**
     * Crear input
     * @param {string} name nombre para atrubutos: name, id, placeholder
     * @param {string} tipo tipo de input opciones: number, text, email, password
     * @return input
     */
function createInput(name, tipo) {
    let input = document.createElement("input")
    input.name= name
    input.id= name
    input.type=tipo
    input.placeholder= `Agregue el ${name}`
    return input
}
 /**
     * Crear label
     * @param {string} name texto del label
     * @return label
     */
  function createLabel(name) {
    let label =document.createElement("label")
    label.innerHTML = name
    return label
}

/**
 * name
 */
let label_name =createLabel('Nombre')
let input_name = createInput('Nombre', 'text')

/**
 * Email
 */
let label_email =createLabel('Email')
let input_email = createInput("Email", 'email')

/**
 * telephone
 */
let label_telephone =createLabel('Telefono')
let input_telephone =createInput("Telefono", 'number')


input_telephone.addEventListener('click', (e)=>{
    console.log(e.target.value)
    e.target.value=100
})

/**
 * Button save
 */
let button_save = document.createElement('button')
button_save.id='button_save'
button_save.type = 'submit'
button_save.innerHTML= 'Guardar'

formulario.append(label_name, input_name, br,label_email, input_email,br2, label_telephone, input_telephone, br3, button_save)
card_formulario.append(formulario)

/**
 * Evento crear cliente
 */
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(!libreta.exitsEmail(input_email.value)>=1){
        let newClients = new clients(input_name.value,input_email.value,input_telephone.value)
        libreta.add_clients(newClients)
        clean_form()
        table_zero()
        if (document.querySelectorAll("#table_clients tbody tr").length === 3) {
            alert('Hay tres filas')
        }
    }else{
        alert('Email ya registrado')
    }
})

/**
 * Evento eliminar cliente
 */
document.querySelector('#table_clients').addEventListener('click', (e)=>{
    if (e.target.innerText === 'Delete') {
        libreta.delete_clients(e.target.id)
    } 
})



let table = document.querySelector('#table_clients')

function clean_form() {
    input_name.value=''
    input_email.value=''
    input_telephone.value=''
}

function table_zero(){
   
    if (libreta.book_Clients.length === 0 || libreta.total_active()=== libreta.book_Clients.length) {
        table.innerHTML = ''
    } else{
        table.innerHTML =`
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Telephone</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="for_clients">
            </tbody>
        </table>
        `
        table_clients()
    }
}

function table_clients() {
    let row_client = document.querySelector('#for_clients')
    libreta.sortBook()
    libreta.searchActive().forEach((e, i)=>{
            // fila  
            let tr = document.createElement('tr')
                // campo name
                let th_name = document.createElement('td')
                th_name.innerText= e.name
                // campo email
                let th_email = document.createElement('td')
                th_email.innerText=e.email
                // campo tekefono
                let th_telephone = document.createElement('td')
                th_telephone.innerText= e.telephone
                // campo  delete
                let th_delete = document.createElement('td')
                    // boton delete
                    let button_delete = document.createElement('button')
                    button_delete.type='button'
                    button_delete.innerText='Delete'
                    button_delete.id=i
                th_delete.append(button_delete)
            // agregando campos a la fila    
            tr.append(th_name,th_email,th_telephone, th_delete)
            // agregando filas 
            row_client.append(tr)
    })
    /*for (let index = 0; index < libreta.book_Clients.length; index++) {
       if (libreta.book_Clients[index].newClients.active === true){
        // fila  
        let tr = document.createElement('tr')
            // campo name
            let th_name = document.createElement('td')
            th_name.innerText= libreta.book_Clients[index].newClients.name
            // campo email
            let th_email = document.createElement('td')
            th_email.innerText=libreta.book_Clients[index].newClients.email
            // campo tekefono
            let th_telephone = document.createElement('td')
            th_telephone.innerText= libreta.book_Clients[index].newClients.telephone
            // campo  delete
            let th_delete = document.createElement('td')
                // boton delete
                let button_delete = document.createElement('button')
                button_delete.type='button'
                button_delete.innerText='Delete'
                button_delete.setAttribute("onclick", `libreta.delete_clients(${index})`)
            th_delete.append(button_delete)
        // agregando campos a la fila    
        tr.append(th_name,th_email,th_telephone, th_delete)
        // agregando filas 
        row_client.append(tr)
       }
    }*/
}

function hello(index) {
    alert(index)
}

/**
 row_client.innerHTML += `
                <tr>
                    <td scope="row">${libreta.book_Clients[index].newClients.name}</td>
                    <td>${libreta.book_Clients[index].newClients.email}</td>
                    <td>${libreta.book_Clients[index].newClients.telephone}</td>
                    <td><button type="button" onclick="libreta.delete_clients(${index})">Delete</button></td>
                </tr>
        ` 
 
 */
