const box = document.getElementById("mainBox");

if(box){
    if (window.innerWidth <= 600){
        box.style.width = '90%';
    }else{
        box.style.width = '30%'
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else{
            entry.target.classList.remove("show")
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));