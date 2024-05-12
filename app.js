window.addEventListener("scroll", function(){
    const header = this.document.querySelector(".header_container");
    header.classList.toggle("header_container-abajo", window.scrollY>120)
})