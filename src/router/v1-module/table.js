import {useGenerateTableCRUD} from './CRUDgenerator.js'
let {
  componentTable,
  getModal,
  inicialArrayObjects,
  RenderTable,
  setObjectInArray,
  eventForm,
  getData,
  eventFormEdit,
  getIdDataEdit
} = useGenerateTableCRUD();

//-- 1ro exportar componente
export { componentTable };

//-- 2do
//  --> id del formulario 'string',
//  --> titulo del modal
//  --> {campos} y tipo de campos: 'text' 'number' 'password' 'color' 'date' 'email', 'select'[]
// activar modal de ingreso y actualizar
getModal('formulario', 'Form Modal',{ 
  id: "number", 
  userId: "number",
  title: "text",
  completed:["select", ['True', 'false']] // select
});
/**
 * -- 3ro
 * Estado inicial dela base de datos-- USAR ESTA PARA EL FECTH
 */
export function jsonFetch(){
  let div= document.createElement('div')
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
   //console.table(json)
   inicialArrayObjects(json)
   RenderTable()
   })
   return div
}


 //console.log()
 inicialArrayObjects([])

/**
 * Acciones crud:
 *   setArrayObjects({ value: getData(), mode: "add" })    // add
 *   setArrayObjects({ value: getData(), mode: "update" }) // update
 *   setArrayObjects({ mode: "delete", id });              // delete
 */

//-- crear eventos de ver-eliminar-añadir--EJEMPLOS:
//-- agregar en cada caso la logica adicional de la base de datos
document.addEventListener("submit", (e) => {
  // añadir - add
  e.preventDefault();
  //document.querySelectorAll("#action-form-add")[2]?.style.display === "block" ||
  if (document.querySelector("#action-form-add").style.display === "block") {
     /**
     * logica de add de base de datos
     */
    if(confirm('Desea agregar datos?')){
      console.log('añadiendo')
      eventForm();
      setObjectInArray({ value: getData(), mode: "add" });
      RenderTable();
    }
  }
  //--- editar - edit---
  if (document.querySelector("#action-form-edit").style.display === "block") {
     /**
     * logica de edit de base de datos
     */
    if(confirm('Desea editar los datos?')){
      console.log('editando')
      eventFormEdit();
      setObjectInArray({
        value: getIdDataEdit().data,
        mode: "update",
        id: Number(getIdDataEdit().id),
      });
      RenderTable();
    }
  }
});

document.addEventListener("click", (e) => {
  //--- eliminar - delete ---
  if (e.target.innerHTML === "Delete") {
    /**
     * logica de delete de base de datos
     */
    //if(confirm('Desea eliminar datos?')){
      let id = Number(e.target.parentNode.parentNode.childNodes[0].innerHTML);
      setObjectInArray({ mode: "delete", id });
      RenderTable();
    //}
  }
});
