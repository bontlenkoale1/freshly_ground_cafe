document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelector(".cards");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dots = document.querySelectorAll(".dot");
  const cardWidth = 280;
  let currentIndex = 0;
  const totalSlides = 3;

  function updateCarousel() {
    const translateX = -currentIndex * cardWidth * 2;
    cards.style.transform = `translateX(${translateX}px)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      currentIndex = parseInt(dot.getAttribute("data-index"));
      updateCarousel();
    });
  });

  setInterval(() => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }, 5000);

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      console.log("Form submitted:", formData);

      showModal();

      this.reset();
    });

  function showModal() {
    const modal = document.getElementById("successModal");
    modal.classList.add("active");
  }

  function closeModal() {
    const modal = document.getElementById("successModal");
    modal.classList.remove("active");
  }

  document
    .getElementById("successModal")
    .addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal();
      }
    });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
