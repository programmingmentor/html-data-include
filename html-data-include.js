document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("[data-include]");
    const totalPartials = elements.length;
    let processedPartials = 0;

    const scrollToElementId = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Element with id '${id}' not found.`);
        }
      }

    const checkAllProcessed = () => {
        if (processedPartials === totalPartials) {
            const event = new CustomEvent("partialsLoaded");
            document.dispatchEvent(event);
            const url = new URL(window.location.href);
            const id = url.hash.slice(1); 
            if (id) {
              scrollToElementId(id);
            }
        }
    };

    checkAllProcessed();

    elements.forEach(element => {
        const src = element.getAttribute("data-include");
        fetch(src)
            .then(response => {
                if (response.status === 200) {
                    return response.text();
                } else {
                    return Promise.reject(new Error(`Failed to load ${src} with status ${response.status}`));
                }
            })
            .then(html => {
                element.outerHTML = html;
                processedPartials++;
                checkAllProcessed();
            })
            .catch(error => {
                console.error("Error including file:", error);
                processedPartials++;
                checkAllProcessed();
            });
    });
});
