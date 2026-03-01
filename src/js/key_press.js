
window.addEventListener("load", function () {

    const keys = "1234567890abcdefghijklmnopqrstuvwxyz";

    let element = null

    let user_key = null

    let system_key = null

    /* get System choice function param data set return random one  */

    function getSystemChoice(data)
    {
        return data[Math.floor(Math.random() * data.length)]
    }

    /* active key function generate random key */

    function activeKey () {

        system_key = getSystemChoice(keys)

        element = document.querySelector(`[data-key="${system_key.toUpperCase()}"]`)

        element.classList.add('active')
    }
    activeKey()

    /* on key up function if system or user key same continue */

    document.onkeyup = function (event) {

        user_key = event.key

        console.log(user_key + " " + system_key)

        
        if (user_key.toUpperCase() !== system_key.toUpperCase()) {

            const audio = new Audio("../src/data/bad.mp3")
            audio.play()    

            let selected = document.querySelector(`[data-key="${user_key.toUpperCase()}"]`)
            
            selected.classList.add('invalid')
            
            setTimeout(() => {
                selected.classList.remove('invalid')
            }, 1000/10)
        }

        if (user_key.toUpperCase() === system_key.toUpperCase()) {

            const audio = new Audio("../src/data/good.mp3")
            audio.play()

            element.classList.remove('active')
            
            activeKey()
        } 
        
    }
})