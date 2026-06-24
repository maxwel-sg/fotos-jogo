const gallery = document.getElementById("gallery");
const btnMais = document.getElementById("carregarMais");

const fotos = [

    // 8192 a 8198
    8192,8193,8194,8195,8196,8197,8198,

    // 8202
    8202,

    // 8204 a 8205
    8204,8205,

    // 8210 a 8212
    8210,8211,8212,

    // 8350 a 8367
    8350,8351,8352,8353,8354,8355,8356,8357,8358,
    8359,8360,8361,8362,8363,8364,8365,8366,8367,

    // 8374 a 8385
    8374,8375,8376,8377,8378,8379,
    8380,8381,8382,8383,8384,8385,

    // 8405
    8405,

    // 8418
    8418,

    // 8425 a 8426
    8425,8426,

    // 8429
    8429,

    // 8431 a 8438
    8431,8432,8433,8434,8435,8436,8437,8438,

    // 8441 a 8443
    8441,8442,8443,

    // 8760 a 8763
    8760,8761,8762,8763,

    // 8773 a 8776
    8773,8774,8775,8776

];

let indiceAtual = 0;
const porPagina = 35;

function carregarFotos(){

    const fim = Math.min(indiceAtual + porPagina, fotos.length);

    for(let j = indiceAtual; j < fim; j++){

        const i = fotos[j];

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
                href="https://wa.me/5593991767049?text=Olá,%20quero%20comprar%20a%20foto%20IMG_${i}">
                Comprar
                </a>

            </div>

        </div>

        `;
    }

    indiceAtual = fim;

    if(indiceAtual >= fotos.length){
        btnMais.style.display = "none";
    }
}

carregarFotos();

btnMais.addEventListener("click", carregarFotos);

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
