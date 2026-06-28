window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 80){

        navbar.style.background = "rgba(255,255,255,.98)";
        navbar.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";

    }else{

        navbar.style.background = "rgba(255,255,255,.90)";
        navbar.style.boxShadow = "none";

    }

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".card,.gallery img").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});