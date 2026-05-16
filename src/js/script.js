/*  */

window.addEventListener("load", function () {

    let file = [
		{
			id: 0,
			name: "Memory_Challenge",
			description: "Recall a number sequence before time runs out.",
		},
		{
			id: 1,
			name: "Key_Press_Reflex",
			description: "Press the right keys as quickly as possible.",
		},
		{
			id: 2,
			name: "Rock_Paper_Scissors",
			description: "Play the classic game against the computer.",
		},
		{
			id: 3,
			name: "Quick_Quiz",
			description: "Answer trivia questions under pressure.",
		},
		{
			id: 4,
			name: "Code_Finder",
			description: "Crack the hidden code before the timer ends.",
		},
	]
    
    file.forEach(function (element) {

        document.getElementById("cardSection").insertAdjacentHTML('beforeend', displayCard(element))
    })

    function displayCard (element) {

        return (`
			<a href="public/${element.name.toLowerCase()}.html" class="card">				
				<h5> ${element.id} </h5>	
				<h3> ${element.name.split("_").join(" ")} </h3>
				<p> ${element.description} </p>
			</a>
		`).toString()
    }
})