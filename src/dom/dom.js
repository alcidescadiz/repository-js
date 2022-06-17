/**
 * Ejemplo de como manipular el Dom
 * @module Dom
 */

/**
 * Tipos de eventos:
 * click
 * change
 * keydown / keyup
 * load
 * focus
 * mouseover 
 */

/**
 * Remover una fila de una tabla
 */
document.querySelector('#table1').addEventListener('click', (e)=>{
    if (e.target.innerText === 'Delete') {
        console.log(e.target.className)
        e.target.parentNode.parentNode.remove()
    } 
})

document.querySelector('#table1').addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', 'Don´t copy paste')//selection.toString().toUpperCase());
    event.preventDefault();
});

if (document.querySelectorAll("#table1 tr").length === 3) {
    alert('Hay tres filas')
}