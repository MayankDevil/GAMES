/*  */

window.addEventListener("load", function () {

    [        
        "find_num",
        "key_press",
        "rock_paper_scissors",
        "quiz"
        
    ].forEach(function (element) {

        document.getElementById("section").insertAdjacentHTML('beforeend', 
            `<a href="public/${element}.html" class="btn"> ${element.split("_").join(" ").toUpperCase()} </a>`)
    })
})