function changeImage(image, bgColor, text, left, fontSize, titleColor) {
    document.getElementById("product-img").src = image;
    document.getElementById("product").style.backgroundImage = bgColor;
    document.getElementById("main-text").textContent = text;
    document.getElementById("main-text").style.left = left;
    document.getElementById("main-text").style.fontSize = fontSize;
    document.getElementById("title-color").style.color = titleColor;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    }, options);
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  });
  