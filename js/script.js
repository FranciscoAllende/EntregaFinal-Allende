// - - - Productos y precios - - - //
const productos = [{
    id: 1,
    product: 'Proteína Star',
    thumbnail: './images/productouno.png',
    price: '33000',
},
{
    id: 2,
    product: 'Creatina Star',
    thumbnail: './images/productodos.png',
    price: '17000',
},
{
    id: 3,
    product: 'Preentreno C4',
    thumbnail: './images/productotres.png',
    price: '60000',
},
{
    id: 4,
    product: 'Mass Gainer',
    thumbnail: './images/productocuatro.png',
    price: '15000',
},
];

const form = document.querySelector('#form');
const formContainer = document.querySelector('.form-container-inputs');


formContainer.innerHTML = `
    <div>
        <label for="name">Nombre:</label>
        <input id="name" placeholder="Ingrese su nombre" type="text">
    </div>
    <div>
        <label for="email">Email:</label>
        <input id="email" placeholder="Ingrese su email" type="email">
    </div>
    <button id="save-button">¡Enviar!</button>
    `;

form.appendChild(formContainer);

const saveData = () => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;

    if (name && email) {
        const data = {
            name,
            email,
        }
        localStorage.setItem('userData', JSON.stringify(data));
        console.log(data)
    }
}

const saveButton = document.querySelector('#save-button');
    saveButton.addEventListener('click', saveData)



const mainElement = document.querySelector('main');

let cards = document.createElement('div');

for (const articuloVenta of productos) {
    cards.innerHTML += ` <article class="card" id="${articuloVenta.id}">
                        <img src="${articuloVenta.thumbnail}" alt="">
                        <div class="card-body">
                            <p>${articuloVenta.product}</p>
                            <p>U$S ${articuloVenta.price}</p>
                        </div>
                    </article>`;
}

mainElement.appendChild(cards);