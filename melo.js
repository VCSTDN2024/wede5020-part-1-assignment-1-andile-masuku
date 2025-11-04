// melo.js

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  const triggers = document.querySelectorAll(".lightbox-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = trigger.src;
      lightboxImg.alt = trigger.alt || "Expanded image";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Fade-in animation for service cards
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // Scroll to top button
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Fade-in animation
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Gallery filter
  const filterButtons = document.querySelectorAll(".filter-buttons button");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      galleryItems.forEach(item => {
        const category = item.getAttribute("data-category");
        if (filter === "all" || category === filter || category.includes(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

// Lightbox functionality
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  const triggers = document.querySelectorAll(".lightbox-trigger");

  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
  document.body.classList.add("lightbox-open");
  lightbox.style.display = "block";
  lightboxImg.src = trigger.src;
  lightboxImg.alt = trigger.alt || "Expanded image";
});
  });
closeBtn.addEventListener("click", () => {
  document.body.classList.remove("lightbox-open");
  lightbox.style.display = "none";
  lightboxImg.src = "";
});

  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });
});

// Fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.fo// Fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});rEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});