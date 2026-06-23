const gallery = document.getElementById("gallery");

for(let i = 8155; i <= 8442; i++){

    gallery.innerHTML += `

    <div class="card">

        <div class="image-container">

            <img
            src="fotos/IMG_${i}.JPG"
            alt="IMG_${i}"
            loading="lazy"
            onclick="window.open('fotos/IMG_${i}.JPG','_blank')">

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
