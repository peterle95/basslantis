const button = document.getElementById("buy-ticket-button");

button.addEventListener("click", function() {
  window.open("https://www.eventbrite.com/", "_blank");
});

// Highlight the current section in the navigation bar when scrolling
document.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll(".navbar-link");
  
    sections.forEach(function(section) {
      if (window.scrollY >= section.offsetTop - 80 && window.scrollY < section.offsetTop + section.offsetHeight - 80) {
        navbarLinks.forEach(function(link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
  

