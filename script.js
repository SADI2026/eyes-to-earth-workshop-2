
document.addEventListener("DOMContentLoaded", () => {

  // Navegação suave entre as secções
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

        history.replaceState(null, "", targetId);
      }
    });
  });

  // Carregamento progressivo das imagens
  document.querySelectorAll("img").forEach(image => {
    image.loading = "lazy";
    image.decoding = "async";

    image.addEventListener("error", () => {
      image.classList.add("image-error");
      image.alt = "Imagem indisponível";
    });
  });

  // Criar janela de visualização ampliada
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Fotografia ampliada");

  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Fechar fotografia">
      &times;
    </button>
    <img src="" alt="">
    <p class="lightbox-caption"></p>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");

  function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
  }

  // Abrir fotografias da galeria
  document.querySelectorAll(".gallery-grid img").forEach(image => {
    image.tabIndex = 0;
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Ampliar fotografia");

    function openImage() {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = image.alt || "EYES TO EARTH – Workshop 2";

      lightbox.classList.add("active");
      document.body.classList.add("lightbox-open");
      closeButton.focus();
    }

    image.addEventListener("click", openImage);

    image.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openImage();
      }
    });
  });

  // Fechar a fotografia ampliada
  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  // Ano automático no rodapé, caso exista o elemento
  const yearElement = document.querySelector("[data-current-year]");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  console.log("EYES TO EARTH – Website carregado com sucesso.");

});
