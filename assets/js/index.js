
console.log('Hola mundo');

const obtenerPersonajes = async() => {
    try {
        
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data =  await response.json();

        return data.results
    } catch (error) {
        console.log(`El error es: $(error)`);
    }
}

const enviarDatos = () => {
    console.log('');
    console.log('');
    console.log('');
    console.log('');
    console.log('');

}


const crearTarjeta = async( results = [] ) => {
    let personajesRow = document.getElementById('personajesRow');
    results.map((result) => {
        
        const { id , name , species , status : estado , image : imagen , location : lugar } = result;
        const { name : nombre , url } = location;

        const divRow = document.createElement('div');
        divRow.classList.add("col-xl-3");
        divRow.classList.add("col-lg-3");
        divRow.classList.add("col-md-3");
        divRow.classList.add("col-sm-3");
        divRow.classList.add("col-xs-3");
        divRow.classList.add("mt-3");
        divRow.classList.add("mb-3");

        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = imagen;
        image.classList.add('card-img-top');
    
        const divBody = document.createElement('div');
        divBody.classList.add('card-body');

        const tittle = document.createElement('h5');
        tittle.classList.add('card-tittle');
        tittle.textContent = name;

        const subTittle = document.createElement('p');
        subTittle.classList.add('card-text');
        subTittle.textContent = species;

        const status = document.createElement('p');
        status.classList.add('card-text');
        status.textContent = estado;

        // const name = document.createElement('p');
        // name.classList.add('card-text');
        // name.textContent = nombre;

        const btnVer = document.createElement('button');
        btnVer.classList.add('btn');
        btnVer.classList.add('btn-warning');
        btnVer.textContent = 'Ver Más';

        divRow.appendChild(card);

        card.appendChild(image);
        card.appendChild(divBody)

        divBody.appendChild(tittle);
        divBody.appendChild(subTittle);
        divBody.appendChild(status);
        // divBody.appendChild(location);
        divBody.appendChild(btnVer);

        personajesRow.appendChild(divRow);
    })
}

obtenerPersonajes ()
    .then ( (data) => {
        crearTarjeta(data);
    })
    .catch (error => console.log(error))

