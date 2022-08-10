import {useGenerateGalleryCard} from './GalleryGenerator.js'
let {
  componentTable,
  inicialArrayObjects,
  RenderTable,
  setObjectInArray,

} = useGenerateGalleryCard();

//-- 1ro exportar componente
export { componentTable as Gallery };


/**
 * -- 3ro
 * Estado inicial dela base de datos-- USAR ESTA PARA EL FECTH
 */
  
let posts = [
  {
    "id": "8a94a788-37af-4903-a10b-5d966123e6a9",
    "post": "post1",
    "img": "./imagenes/post1.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  },
  {
    "id": "52f53a31-effc-40aa-9006-4f1c679bf3f9",
    "post": "post2",
    "img": "./imagenes/post2.jfif",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  },
  {
    "id": "8af2d9d2-a2b5-47af-97df-6623a057d9e3",
    "post": "post3",
    "img": "./imagenes/post3.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  },
  {
    "id": "bb7d8591-87ed-4a3a-a8d8-5400603e02c5",
    "post": "post4",
    "img": "./imagenes/post4.jpg",
    "voto": "like",
    "date": "07:43:52 GMT-0400 (hora de Venezuela)"
  },
  {
    "id": "d0b26549-6886-4980-b3d4-5a98128d21be",
    "post": "post5",
    "img": "./imagenes/post5.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022 07:44:42 GMT-0400 (hora de Venezuela)"
  },
  {
    "id": "8dbbee36-3445-4c41-ac4b-6b9f197e5ca4",
    "post": "post6",
    "img": "./imagenes/post6.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  },
  {
    "id": "d90e69b7-bc0e-479c-9593-9dbaadcde892",
    "post": "Post7",
    "img": "https://cdn.pixabay.com/photo/2019/10/15/06/35/fashion-4550815_960_720.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  },
  {
    "id": "675f517d-2d17-4eeb-95cd-6881b5464eca",
    "post": "post8",
    "img": "https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260_960_720.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  },
  {
    "id": "7f696f9c-f22c-4476-9bf0-13e75e9e64b6",
    "post": "post9",
    "img": "https://cdn.pixabay.com/photo/2016/07/28/10/45/woman-1547507_960_720.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  },
  {
    "id": "bc0ddbef-8181-4303-ab60-8f7cabc2a6a3",
    "post": "post 10",
    "img": "https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640_960_720.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  },
  {
    "id": "c84545c4-a19e-4f8f-94c5-28d5fd445d2e",
    "post": "post1",
    "img": "./imagenes/post1.jpg",
    "voto": "like",
    "date": "Fri Aug 05 2022"
  }
]


 //console.log()
 inicialArrayObjects(posts)

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
      setObjectInArray({ value: 0, mode: "add" });
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
      setObjectInArray({
        value: 0,
        mode: "update",
        id: 0,
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
