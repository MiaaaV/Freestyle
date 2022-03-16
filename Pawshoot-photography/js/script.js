const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

// smooth scrolling animation in js, the one written in html does not work on browsers like safari and microsoft edge

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const href = link.getAttribute("href");

        //scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        // scroll to other links
        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelectorAll(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        //close mobile navigation
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
    });
});