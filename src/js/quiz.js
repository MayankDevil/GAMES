/*
- Project-5 "" version-(1.0.0)
- File : ./src/js/quiz.js
*/

window.addEventListener("load", function () {

    let data = [
		{
			question: "How many bit store in 1byte?",
			option: ["4bits", "8bits", "2bits", "1bits"],
			answer: 1,
		},
		{
			question: "What is Difference between programmer AND coder",
			option: [
				"Study Degree",
				"Coding Knowlegde",
				"Experience Time gap",
				"Understanding Problem to solve",
			],
			answer: 3,
		},
		{
			question: "What is Bug?",
			option: [
				"Something that not required",
				"Logical error",
				"Syntax warning",
				"Question",
			],
			answer: 0,
		},
		{
			question: "USB stand for?",
			option: [
				"Unique System Boot",
				"User Service Board",
				"Universal Service Bus",
				"Universal Service Brand",
			],
			answer: 2,
		},
		{
			question:
				"What is the difference between == and === in JavaScript?",
			option: [
				"Both perform type coercion",
				"Both compare both value and type",
				"== compares only value, === compares both value and type",
				"== compares only type, === compares both value and type",
			],
			answer: 2,
		},
		{
			question: "What is the purpose of a 'git merge'?",
			option: [
				"To create a new branch",
				"To delete a branch",
				"To combine changes from different branches",
				"To revert changes",
			],
			answer: 2,
		},
		{
			question: "What is the main advantage of using a RESTful API?",
			option: [
				"Better security",
				"Simplified communication between client and server",
				"Supports only XML format",
				"Requires less bandwidth",
			],
			answer: 1,
		},
		{
			question:
				"What does MVC stand for in the context of software architecture?",
			option: [
				"Model View Control",
				"Model View Command",
				"Model View Component",
				"Model View Controller",
			],
			answer: 3,
		},
		{
			question: "What is the purpose of SQL?",
			option: [
				"To create dynamic web pages",
				"To manage databases",
				"To style web pages",
				"To develop mobile applications",
			],
			answer: 1,
		},
		{
			question: "What does CSS stand for?",
			option: [
				"Cascading Style Sheets",
				"Computer Style Sheets",
				"Creative Style Sheets",
				"Colorful Style Sheets",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of a CDN (Content Delivery Network)?",
			option: [
				"To host websites",
				"To distribute content closer to end-users for better performance",
				"To encrypt data",
				"To debug code",
			],
			answer: 1,
		},
		{
			question:
				"What is the difference between margin and padding in CSS?",
			option: [
				"Both are the same",
				"Margin adds space outside the border, padding adds space inside the border",
				"Margin adds space inside the border, padding adds space outside the border",
				"Margin and padding cannot be used together",
			],
			answer: 1,
		},
		{
			question: "What is a closure in JavaScript?",
			option: [
				"A function that is called before another function",
				"A block of code that can be executed multiple times",
				"A way to implement private variables and functions",
				"A way to stop the execution of a loop",
			],
			answer: 2,
		},
		{
			question:
				"What is the purpose of the 'use strict' directive in JavaScript?",
			option: [
				"To enable strict mode which catches common coding mistakes",
				"To enable asynchronous behavior",
				"To disable all console logs",
				"To define strict typing for variables",
			],
			answer: 0,
		},
		{
			question: "What does HTTP stand for?",
			option: [
				"Hypertext Transfer Protocol",
				"Hypertext Transmission Protocol",
				"Hypertext Terminal Protocol",
				"Hypertext Testing Protocol",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'defer' attribute in the <script> tag?",
			option: [
				"To defer the loading of an external script until after the document has been parsed",
				"To defer the execution of a function",
				"To defer the styling of an element",
				"To defer the rendering of a webpage",
			],
			answer: 0,
		},
		{
			question: "What does SQL injection refer to?",
			option: [
				"A technique used to retrieve information from a database",
				"A security vulnerability where malicious SQL queries are inserted into input fields",
				"A method of optimizing SQL queries",
				"A way to speed up database transactions",
			],
			answer: 1,
		},
		{
			question:
				"What is the purpose of a 'try...catch' block in JavaScript?",
			option: [
				"To perform mathematical calculations",
				"To handle errors and exceptions",
				"To declare variables",
				"To loop through arrays",
			],
			answer: 1,
		},
		{
			question:
				"What is the purpose of the 'box-sizing' property in CSS?",
			option: [
				"To define the size of a container",
				"To specify the color of a box",
				"To include or exclude the padding and border in the total width and height of an element",
				"To set the opacity of a box",
			],
			answer: 2,
		},
		{
			question:
				"What is the purpose of the 'async' and 'await' keywords in JavaScript?",
			option: [
				"To define asynchronous functions",
				"To handle errors and exceptions",
				"To declare variables",
				"To loop through arrays",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'localStorage' object in JavaScript?",
			option: [
				"To store data in the client's browser that persists even after the browser is closed",
				"To store data in the server's database",
				"To handle HTTP requests",
				"To manage local files on the user's device",
			],
			answer: 0,
		},
		{
			question:
				"What is the difference between 'let', 'var', and 'const' in JavaScript?",
			option: [
				"They are all used to declare functions",
				"They are all used to declare constants",
				"'let' and 'var' declare variables with function scope, 'const' declares variables with block scope",
				"'let' and 'var' declare variables with block scope, 'const' declares constants",
			],
			answer: 2,
		},
		{
			question: "What is a promise in JavaScript?",
			option: [
				"A guarantee that a certain condition will be met in the future",
				"A way to handle errors in asynchronous code",
				"A type of variable that cannot be changed",
				"A way to represent asynchronous operations and handle their results",
			],
			answer: 3,
		},
		{
			question: "What is the purpose of the 'transform' property in CSS?",
			option: [
				"To translate elements along the X and Y axes",
				"To rotate elements",
				"To scale elements",
				"All of the above",
			],
			answer: 3,
		},
		{
			question:
				"What is the difference between a 'GET' and 'POST' request in HTTP?",
			option: [
				"Both are used to retrieve data from a server",
				"'GET' requests are used to send data to the server, 'POST' requests are used to retrieve data from the server",
				"'GET' requests are used to retrieve data from the server, 'POST' requests are used to send data to the server",
				"There is no difference between them",
			],
			answer: 2,
		},
		{
			question: "What does 'npm' stand for?",
			option: [
				"Node Package Manager",
				"New Programming Method",
				"Node Project Manager",
				"Network Protocol Module",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'this' keyword in JavaScript?",
			option: [
				"To refer to the current object",
				"To define a new function",
				"To access the parent object",
				"To stop the execution of a loop",
			],
			answer: 0,
		},
		{
			question: "What is the purpose of the 'aria-' attributes in HTML?",
			option: [
				"To define alternative text for images",
				"To specify roles and states for accessibility in web content",
				"To create links between web pages",
				"To define the language of the document",
			],
			answer: 1,
		},
		{
			question: "What is the purpose of the 'viewport' meta tag in HTML?",
			option: [
				"To define the layout of the webpage",
				"To specify the character encoding of the webpage",
				"To control the width and scaling of the webpage on different devices",
				"To define a container for media content",
			],
			answer: 2,
		},
		{
			question:
				"What is the purpose of the 'addEventListener' method in JavaScript?",
			option: [
				"To add event listeners to DOM elements",
				"To create new DOM elements",
				"To modify the style of DOM elements",
				"To handle AJAX requests",
			],
			answer: 0,
		},
		{
			question: "What is the purpose of the 'fetch' API in JavaScript?",
			option: [
				"To fetch data from a server using AJAX requests",
				"To fetch data from the browser's cache",
				"To fetch data from the local storage",
				"To fetch data from a database",
			],
			answer: 0,
		},
		{
			question:
				"What is the difference between 'null' and 'undefined' in JavaScript?",
			option: [
				"'null' represents the intentional absence of any value, while 'undefined' represents the absence of a value in general",
				"'null' is used to declare variables, while 'undefined' is used to assign values to variables",
				"'null' is a string data type, while 'undefined' is a number data type",
				"There is no difference between 'null' and 'undefined'",
			],
			answer: 0,
		},
		{
			question: "What is the purpose of the 'map' method in JavaScript?",
			option: [
				"To create a new array by performing a function on each element of the calling array",
				"To map keys to values in an object",
				"To remove elements from an array",
				"To iterate over each element of an array",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'localStorage' object in JavaScript?",
			option: [
				"To store data in the client's browser that persists even after the browser is closed",
				"To store data in the server's database",
				"To handle HTTP requests",
				"To manage local files on the user's device",
			],
			answer: 0,
		},
		{
			question: "What does 'JSON' stand for?",
			option: [
				"JavaScript Object Notation",
				"JavaScript Oriented Notation",
				"JavaScript Orderly Notation",
				"JavaScript Overrated Notation",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'prototype' property in JavaScript?",
			option: [
				"To add new properties and methods to all instances of a constructor function",
				"To define the parent object of an object",
				"To store the inheritance chain of an object",
				"To override the constructor function of an object",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'querySelector' method in JavaScript?",
			option: [
				"To select multiple elements in the DOM",
				"To select the first element that matches a specified CSS selector in the DOM",
				"To select the last element that matches a specified CSS selector in the DOM",
				"To select elements based on their data attributes in the DOM",
			],
			answer: 1,
		},
		{
			question:
				"What is the purpose of the 'localStorage' object in JavaScript?",
			option: [
				"To store data in the client's browser that persists even after the browser is closed",
				"To store data in the server's database",
				"To handle HTTP requests",
				"To manage local files on the user's device",
			],
			answer: 0,
		},
		{
			question: "What does 'API' stand for?",
			option: [
				"Application Programming Interface",
				"Automated Program Interaction",
				"All Programming Interaction",
				"Automated Programming Interface",
			],
			answer: 0,
		},
		{
			question: "What is the purpose of the 'Event Loop' in JavaScript?",
			option: [
				"To handle asynchronous operations by maintaining a queue of events and executing them one by one",
				"To handle DOM events",
				"To create event listeners",
				"To loop through arrays",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'typeof' operator in JavaScript?",
			option: [
				"To check if a variable is of a certain data type",
				"To convert a variable to a different data type",
				"To define a variable",
				"To access the properties of an object",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'Promise.all()' method in JavaScript?",
			option: [
				"To execute multiple promises concurrently and return a single promise that resolves when all of the input promises have resolved",
				"To chain promises together",
				"To handle errors in asynchronous code",
				"To create a new promise",
			],
			answer: 0,
		},
		{
			question:
				"What is the purpose of the 'slice()' method in JavaScript?",
			option: [
				"To remove elements from an array and return the removed elements",
				"To add elements to an array",
				"To extract a section of an array and return a new array",
				"To iterate over each element of an array",
			],
			answer: 2,
		},
		{
			question:
				"What is the purpose of the 'spread operator (...) in JavaScript?",
			option: [
				"To concatenate strings",
				"To spread the elements of an iterable (like an array or string) into individual elements",
				"To create a new array",
				"To filter elements in an array",
			],
			answer: 1,
		},
		{
			question:
				"What is the purpose of the 'localStorage' object in JavaScript?",
			option: [
				"To store data in the client's browser that persists even after the browser is closed",
				"To store data in the server's database",
				"To handle HTTP requests",
				"To manage local files on the user's device",
			],
			answer: 0,
		},
		{
			question: "What does 'SEO' stand for in web development?",
			option: [
				"Server Extension Object",
				"Search Engine Optimization",
				"Structured Environment Online",
				"Server Environment Optimization",
			],
			answer: 1,
		},
		{
			question:
				"What is the purpose of the 'innerHTML' property in JavaScript?",
			option: [
				"To specify the inner dimensions of an element",
				"To modify the contents of an HTML element",
				"To define inline CSS styles",
				"To handle mouse events",
			],
			answer: 1,
		},
		{
			question:
				"What is the purpose of the 'XMLHttpRequest' object in JavaScript?",
			option: [
				"To create XML documents",
				"To handle AJAX requests",
				"To manipulate XML data",
				"To parse JSON data",
			],
			answer: 1,
		},
		{
			question: "What is the purpose of the 'onClick' attribute in HTML?",
			option: [
				"To define the appearance of a button",
				"To execute a JavaScript function when a button is clicked",
				"To specify the color of a button",
				"To create a link to another webpage",
			],
			answer: 1,
		},
	];

    let user_selected = null
    
    var system_choice = 0

    var user_rank = 0

	let counter = 60
    
    // -----------------------------------------------
    //  setQues function set inner question or option
    // -----------------------------------------------

    function setQues(index)
    {
        document.getElementById('question_field').innerText = data[index].question
        
        document.querySelectorAll('.form-check-label').forEach((element,bound) => {
            element.innerText = data[index].option[bound]
        })

        document.getElementById('user_rank').innerHTML = `RANK ${user_rank}`
    }
    setQues(system_choice) // default question


    /*
        get random function between 0 and data length
        param data
        return random number 
    */ 

    function getRandom(data)
    {
        return Math.floor(Math.random() * data.length)
    }

	let count_time = document.getElementById("count_time")

	setInterval(() => {

		if (counter === 0) {
			
			counter = 60
				
			// get system random selection with data

			system_choice = getRandom(data);
			
			// set system selected question

			setQues(system_choice)
		} else {

			count_time.innerHTML = "Time left " + (--counter)
		}

	}, 1000)

    /*
        -----------------------------------
        [ submit button on click function ]
        -----------------------------------
    */

    document.getElementById("submit_btn").onclick = () => {
    
        let radiofld = document.getElementsByClassName("form-check-input")
    
        for (let i = 0; i < radiofld.length; i++)
        {
            if (radiofld[i].checked)
            {
                user_selected = radiofld[i].value
            }   
        }

        //  user selected null return warning

        if (user_selected == null)
        {
            console.log(`Please select option`)
            return;
        }
        
        /* is win function */

        if (user_selected == data[system_choice].answer)
        {
            user_rank++
        }

        // get system random selection with data

        system_choice = getRandom(data);
        
        // set system selected question

        setQues(system_choice)
    }
})
/* Developed by Mayank | ( https://github.com/MayankDevil ) */