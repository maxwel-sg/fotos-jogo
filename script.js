const gallery = document.getElementById("gallery");

for(let i = 8155; i <= 8776; i++){

    gallery.innerHTML += `

    <div class="card">

        <div class="image-container">

            <img
            src="fotos/IMG_${i}.JPG"
            alt="IMG_${i}"
            loading="lazy"
            onerror="this.parentElement.parentElement.style.display='none'"
            onclick="abrirFoto('fotos/IMG_${i}.JPG','IMG_${i}')">

            <div class="watermark"></div>

        </div>

        <div class="info">

            <h3>IMG_${i}</h3>

            <div class="preco">
                R$ 5,00
            </div>

            <a
            class="btn"
            target="_blank"
            href="https://wa.me/5593991606690?text=Olá,%20quero%20comprar%20a%20foto%20IMG_${i}">
            Comprar
            </a>

        </div>

    </div>

    `;
}

function abrirFoto(src,nome){

    document.getElementById("modal").style.display = "block";

    document.getElementById("imgModal").src = src;

    document.getElementById("modalNome").innerText = nome;

    document.getElementById("modalComprar").href =
    `https://wa.me/5593991606690?text=Olá,%20quero%20comprar%20a%20foto%20${nome}`;
}

document.querySelector(".fechar").onclick = () => {

    document.getElementById("modal").style.display = "none";
};

document.getElementById("modal").onclick = (e) => {

    if(e.target.id === "modal"){

        document.getElementById("modal").style.display = "none";
    }
};
