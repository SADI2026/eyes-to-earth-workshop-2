
document.addEventListener("DOMContentLoaded", function () {

  // Rolagem suave dos links internos
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Preparar imagens
  document.querySelectorAll("img").forEach(function (img) {
    img.loading = "lazy";
    img.decoding = "async";

    img.addEventListener("error", function () {
      img.classList.add("image-error");
    });
  });

  // Galeria: abrir e fechar imagens
  const galleryImages = document.querySelectorAll(".gallery-grid img");

  galleryImages.forEach(function (img) {
    img.addEventListener("click", function () {

      // Evitar abrir várias janelas
      if (document.querySelector(".lightbox")) return;

      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";

      const enlargedImage = document.createElement("img");
      enlargedImage.src = img.src;
      enlargedImage.alt = img.alt || "Fotografia ampliada";

      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.textContent = "×";
      closeButton.setAttribute("aria-label", "Fechar imagem");

      function closeLightbox() {
        lightbox.remove();
        document.removeEventListener("keydown", handleKey);
      }

      function handleKey(event) {
        if (event.key === "Escape") {
          closeLightbox();
        }
      }

      closeButton.addEventListener("click", closeLightbox);

      lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
          closeLightbox();
        }
      });

      lightbox.appendChild(enlargedImage);
      lightbox.appendChild(closeButton);

      document.body.appendChild(lightbox);

      document.addEventListener("keydown", handleKey);
    });
  });

  // Ano automático no rodapé
  const year = document.querySelector("[data-current-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
