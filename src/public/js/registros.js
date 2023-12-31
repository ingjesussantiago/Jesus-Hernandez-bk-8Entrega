console.log("corriendo prueba");

const form = document.getElementById('registroform');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);

    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log("Objeto formado:");
    console.log(obj);
    fetch('/api/session/registro', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 200) {
            window.location.replace('/login')
        }
    })
})
