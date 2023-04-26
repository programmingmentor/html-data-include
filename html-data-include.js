document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll("[data-include]");
    const totalPartials = elements.length;
    let processedPartials = 0;

    const checkAllProcessed = () => {
        if (processedPartials === totalPartials) {
            const event = new CustomEvent("partialsLoaded");
            document.dispatchEvent(event);
        }
    };

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
