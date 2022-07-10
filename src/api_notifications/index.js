const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
    })
})

const verNotificacion = document.querySelector('#vernotificacion');

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        console.log('1')
        new Notification(  'Esta es la notificacion', {
            icon: './example-logo.jpg',
            body: 'Tutoriales de js con blackCode'
        }).onclick = function(){
            window.open('http://google.com');
        };
    }
})