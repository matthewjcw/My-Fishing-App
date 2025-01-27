
//Event listener for navigation bar elements
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const links = document.querySelectorAll(".nav-link");
  
    // Function to load content dynamically
    async function loadPage(page) {
      try {
        const response = await fetch(`${page}.html`);  //fetch api
        if (!response.ok) {
          throw new Error("Page not found");
        }
        const content = await response.text();
        app.innerHTML = content;
      } catch (error) {
        app.innerHTML = `<p>${error.message}</p>`;
      }
    }
  
    // Function implemented in event listener
    function handleNavigation() {
      const pageName = window.location.hash.slice(1) || "home";
      loadPage(pageName);
    }
  
    // Loops through all of the navigation links and adds an event listener to all of them
    links.forEach((link) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetPage = link.getAttribute("href").slice(1);
        window.location.hash = targetPage;
      })
    );
  
    // Initial load
    handleNavigation();
  
    // Listen for hash changes
    window.addEventListener("hashchange", handleNavigation);
  });




async function loadPage(page) {
  const app = document.getElementById("app");

  try {
    // Fetch the HTML content
    const response = await fetch(`${page}.html`);
    const content = await response.text();

    // Inject content into the main container
    app.innerHTML = content;

    // Reinitialize logic for the loaded page
    if (page === "fishing-log") {
      initializeFishingLog();
    }
  } catch (error) {
    app.innerHTML = `<p>Page not found.</p>`;
  }
}

// Handle navigation and hash changes
function handleNavigation() {
  const hash = window.location.hash.slice(1) || "home";
  loadPage(hash);
}

document.addEventListener("DOMContentLoaded", () => {
  handleNavigation();
  window.addEventListener("hashchange", handleNavigation);
});

function initializeFishingLog() {
  console.log("Fishing Log page loaded");

  const submitButton = document.getElementById("submit-log-btn");

  if (submitButton) {
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Fishing log submitted!");
    });
  }
}