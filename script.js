const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

let photos = [];

fetch("fotos.json")
.then(response => response.json())
.then(data => {

    photos = data;

    renderPhotos(photos);
});

function renderPhotos(list){

    gallery.innerHTML = "";

    list.forEach((photo,index)=>{

        const number = String(index+1).padStart(3,'0');

        gallery.innerHTML += `

        <div class="card">

            <div class="image-container">

                <img src="fotos/${photo}" alt="${number}">

                <div class="watermark"></div>

            </div>

            <div class="info">

                <h3>Foto #${number}</h3>

                <div class="preco">R$ 5,00</div>

                <a
                class="btn"
                target="_blank"
                href="https://wa.me/5593999999999?text=Olá,%20quero%20comprar%20a%20foto%20${number}">
                Comprar
                </a>

            </div>

        </div>
        `;
    });
}

searchInput.addEventListener("input",()=>{

    const termo = searchInput.value.toLowerCase();

    const filtradas = photos.filter((foto,index)=>{

        const numero = String(index+1).padStart(3,'0');

        return numero.includes(termo);
    });

    renderPhotos(filtradas);
});
