const gallery = document.getElementById("gallery");

const primeiraFoto = 8155;
const ultimaFoto = 8775;

const fotosPorPagina = 40;

let paginaAtual = 1;

const totalFotos = ultimaFoto - primeiraFoto + 1;
const totalPaginas = Math.ceil(totalFotos / fotosPorPagina);

function renderizarPagina() {

    let html = "";

    const inicio =
        primeiraFoto +
        ((paginaAtual - 1) * fotosPorPagina);

    const fim =
        Math.min(
            inicio + fotosPorPagina - 1,
            ultimaFoto
        );

    for (let i = inicio; i <= fim; i++) {

        html += `

        <div class="card">

            <div class="image-container">

                <img
                src="fotos/IMG_${i}.JPG"
                alt="IMG_${i}"
                loading="lazy"
                onclick="abrirFoto('fotos/IMG_${i}.JPG')">

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

    gallery.innerHTML = html;

    document.getElementById("paginaAtual").textContent =
        `Página ${paginaAtual} de ${totalPaginas}`;
}

document.getElementById("proximo").onclick = () => {

    if (paginaAtual < totalPaginas) {

        paginaAtual++;

        renderizarPagina();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
};

document.getElementById("anterior").onclick = () => {

    if (paginaAtual > 1) {

        paginaAtual--;

        renderizarPagina();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
};

function abrirFoto(src) {

    document.getElementById("modal").style.display =
        "block";

    document.getElementById("imgModal").src = src;
}

document.querySelector(".fechar").onclick = () => {

    document.getElementById("modal").style.display =
        "none";
};

document.getElementById("modal").onclick = (e) => {

    if (e.target.id === "modal") {

        document.getElementById("modal").style.display =
            "none";
    }
};

renderizarPagina();
