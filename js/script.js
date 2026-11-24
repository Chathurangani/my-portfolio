
// Automatically update the footer year

document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Close mobile navigation after clicking a menu link

    const navigationLinks = document.querySelectorAll(
        ".navbar-nav .nav-link"
    );

    const navigationMenu = document.getElementById("navMenu");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (
                navigationMenu &&
                navigationMenu.classList.contains("show")
            ) {
                const collapse = bootstrap.Collapse.getOrCreateInstance(
                    navigationMenu
                );

                collapse.hide();
            }

        });

    });

    // Certificate image preview

    const certificateImages = document.querySelectorAll(
        ".certificate-image"
    );

    certificateImages.forEach(function (image) {

        image.addEventListener("click", function () {

            if (!image.complete || image.naturalWidth === 0) {
                return;
            }

            const previewWindow = window.open("", "_blank");

            if (previewWindow) {
                previewWindow.document.write(`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <title>Certificate Preview</title>
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <style>
                            body {
                                margin: 0;
                                padding: 20px;
                                background: #102542;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                min-height: 100vh;
                            }
                            img {
                                max-width: 100%;
                                max-height: 95vh;
                                object-fit: contain;
                            }
                        </style>
                    </head>
                    <body>
                        <img src="${image.src}" alt="${image.alt}">
                    </body>
                    </html>
                `);

                previewWindow.document.close();
            }

        });

    });

});
