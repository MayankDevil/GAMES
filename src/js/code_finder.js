
window.addEventListener("load", function () {

    let System = {

        level : 0,
        choice : null,
        num : 6,
        count : 10,
    }

    let counter = null

    const KEYS = [0,1,2,3,4,5,6,7,8,9]

    let button = document.getElementById("start_btn")

    let input_field = document.getElementById("input_field")

    let key = document.getElementsByClassName("key")

    /*
        get random function between 0 and data length
        param data
        return random number 
    */ 

    function getRandom(data)
    {
        return Math.floor(Math.random() * data.length)
    }

    /* system choice */

    function getSystemChoice (data) {

        System.choice = []

        for (let i = 0; i < System.num; i++) {

            System.choice.push(getRandom(data))
        }
        System.choice = System.choice.join("").toString()

        return System.choice
    }

    /* set system choice in field */

    function setSystemChoice () {

        input_field.value = getSystemChoice(KEYS)
        
        setTimeout(() => {
            input_field.value = ''            
        }, 1000);
    }

    /* if win return true else false */

    function isWin () {
        
        return input_field.value === System.choice 
    }

    /* hasWin functioin */

    function hasWin () {

        if (isWin())
        {
            input_field.value = "IS VALID NUMBER"
            input_field.style.color = "var(--success)"
            input_field.style.borderColor = "var(--success)"
        } 
        else 
        {
            input_field.value = "IS INVALID NUMBER"
            input_field.style.color = "var(--danger)"
            input_field.style.borderColor = "var(--danger)"
        }
        setTimeout(() => {

            if (isWin() || System.count === 0) {

                System.count = 60
                button.innerText = "Play"
                clearInterval(counter)
            }
            input_field.value = ""
            input_field.style.color = "var(--blue)"
            input_field.style.borderColor = "var(--dark)"
        }, 2000);
    }

    /* set key layout */

    KEYS.forEach(function (key, index) {

        let keyElement = document.createElement('button')
        
        keyElement.value = key
        keyElement.classList.add('key')
        keyElement.innerText = key 

        keyElement.onclick = () => {

            input_field.value += key
         
            if (input_field.value.length === System.num) {
                hasWin()
            }
        } 
        document.getElementById("key_container").append(keyElement)
    })

    /* select level on change */

    document.getElementById("select_level").onchange = function () {

        System.level = parseInt(this.value)

        if (System.level === 0) {
            System.num = 6
        } else if (System.level === 1) {
            System.num = 8
        } else if (System.level === 2) {
            System.num = 12
        }
    }

    /* start button on click */

    button.onclick = function () {

        setSystemChoice()

        counter = setInterval(() => {
            
            this.innerText = --(System.count) + " seconds"

            if (System.count == 0) {
                hasWin()
                clearInterval(counter)
            }
        }, 1000)
    }

    /* input field on key press */
    
    input_field.addEventListener("keypress", function () {

        if (this.value.length === System.num) {
            hasWin()
        }
    })

})