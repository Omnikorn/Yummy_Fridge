//  VARIABLES
var APIKEY = ""
var img1El = document.querySelector("#img1")
var img2El = document.querySelector("#img2")
var img3El = document.querySelector("#img3")
var img4El = document.querySelector("#img4")
var title1El = document.querySelector("#title1")
var title2El = document.querySelector("#title2")
var title3El = document.querySelector("#title3")
var title4El = document.querySelector("#title4")
var recp1ID = ""
var recp2ID = ""
var recp3ID = ""
var recp4ID = ""
var URL1 = ""
var URL2 = ""
var URL3 = ""
var URL4 = ""
var card1btnEl = document.querySelector("#card1button")
var card2btnEl = document.querySelector("#card2button")
var card3btnEl = document.querySelector("#card3button")
var card4btnEl = document.querySelector("#card4button")
var modalEL = document.querySelector("#modal1")
var deletEl = document.querySelector(
	"#modal1 > div.modal-card > header > button"
)
var htmlEl = document.querySelector("html")
var backEL = document.querySelector(".modal-background")
var frameEl=document.querySelector("#frame")
var textEl=document.querySelector("#text_field")
var searchEl=document.querySelector("#search")
var searchString= ""
var input=""

// FUNCTIONS

function getByIngredients() {

	fetch(searchString)
		

		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
			title1El.textContent = data[0].title
			var att1 = data[0].image
			img1El.setAttribute("src", att1)
			recp1ID = data[0].id

			title2El.textContent = data[1].title
			var att2 = data[1].image
			img2El.setAttribute("src", att2)
			recp2ID = data[1].id

			title3El.textContent = data[2].title
			var att3 = data[2].image
			img3El.setAttribute("src", att3)
			recp2ID = data[2].id

			title4El.textContent = data[3].title
			var att4 = data[3].image
			img4El.setAttribute("src", att4)
			recp4ID = data[3].id

			console.log("rep 1=" + recp1ID)
			console.log("rep 2=" + recp2ID)
			URL1 =
				"https://api.spoonacular.com/recipes/" +
				recp1ID +
				"/information?includeNutrition=true&apiKey=" +
				APIKEY
			URL2 =
				"https://api.spoonacular.com/recipes/" +
				recp2ID +
				"/information?includeNutrition=true&apiKey=" +
				APIKEY
			URL3 =
				"https://api.spoonacular.com/recipes/" +
				recp3ID +
				"/information?includeNutrition=true&apiKey=" +
				APIKEY
			URL4 =
				"https://api.spoonacular.com/recipes/" +
				recp4ID +
				"/information?includeNutrition=true&apiKey=" +
				APIKEY
		})
}



// BUTTIN AND EVENT LISTENERS

searchEl.addEventListener("click", function(event){
	event.preventDefault();
	input=textEl.value.trim();
	console.log("input=" +input)
	searchString= "https://api.spoonacular.com/recipes/findByIngredients?ingredients="+input+"&number=4&apiKey=" +
	APIKEY;
	console.log("search string is=" + searchString)
	getByIngredients(searchString)

})

card1btnEl.addEventListener("click", function () {
	// console.log("this is card 1 being clicked " + URL1)
	fetch(URL1)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			// console.log("recepie one info is= " + data)
			frameEl.setAttribute("src", data.sourceUrl)
			modalEL.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
		})
})
card2btnEl.addEventListener("click", function () {
	// console.log("this is card 1 being clicked " + URL1)
	fetch(URL2)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			// console.log("recepie one info is= " + data)
			frameEl.setAttribute("src", data.sourceUrl)
			modalEL.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
		})
})

card3btnEl.addEventListener("click", function () {
	// console.log("this is card 1 being clicked " + URL1)
	fetch(URL3)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			// console.log("recepie one info is= " + data)
			frameEl.setAttribute("src", data.sourceUrl)
			modalEL.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
		})
})


card4btnEl.addEventListener("click", function () {
	// console.log("this is card 1 being clicked " + URL1)
	fetch(URL4)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			// console.log("recepie one info is= " + data)
			frameEl.setAttribute("src", data.sourceUrl)
			modalEL.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
		})
})


// to close modal when you click on the X at top right 
deletEl.addEventListener("click", function(){
    console.log("cancel has been clicked")
    modalEL.classList.remove("is-active");
    htmlEl.classList.remove("is-clipped")
})

// to close modal when you click on the background
backEL.addEventListener("click", function(e){
    e.preventDefault();
    modalEL.classList.remove("is-active");
    htmlEl.classList.remove("is-clipped")
})


getByIngredients()
