async function getFetch(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

async function postFetch(url, datos){
    const res = await fetch(url,  
        {
            method: 'POST', 
            body: JSON.stringify(datos /*Objeto de datos*/), 
            headers:{'Content-Type': 'application/json'}
        });
    const data = await res.json()
    console.log(data)
}

async function deleteFetch(url, id){
    const res = await fetch(url + id, {method: 'DELETE'});
    const data = await res.json()
    console.log(data)
}


async function putFetch(url, id, datos){
    const res = await fetch(url + id,  
        {
            method: 'PUT', 
            body: JSON.stringify( datos/*Objeto de datos*/), 
            headers:{'Content-Type': 'application/json'}
        });
    const data = await res.json()
    console.log(data)
}