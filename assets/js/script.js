// last update Andrea 6.4.21 @ 13:10

//  ALL VARIABLES
var APIKEY = "23b6c362a5ba4085be08942e909c1e7d"
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
var ref1El = document.querySelector("#ref1")
var ref2El = document.querySelector("#ref2")
var ref3El = document.querySelector("#ref3")
var ref4El = document.querySelector("#ref4")


var modalCEl = document.querySelector("#modalC")
var modalNEl = document.querySelector("#modalN")
// var modalEL = document.querySelector("#modal1")
// var deletEl = document.querySelector("#modal1 > div.modal-card > header > button")
// var deletnEl = document.querySelector("#modalN > div.modal-card > header > button")
// var deletCEl = document.querySelector("#modalC > div.modal-card > header > button")

var nut1 = document.querySelector("#nutrition1button")
var nut2 = document.querySelector("#nutrition2button")
var nut3 = document.querySelector("#nutrition3button")
var nut4 = document.querySelector("#nutrition4button")


var htmlEl = document.querySelector("html")
// var backEL = document.querySelector(".modal-background")
// var frameEl = document.querySelector("#frame")

var textEl = document.querySelector("#text_field")
var searchEl = document.querySelector("#search")
var searchString = ""
var input = ""

var carbsEl = document.querySelector("#carbs")
var fatEl = document.querySelector("#fat")
var proteinEl = document.querySelector("#protein")
var caloriesEl = document.querySelector("#calories")

var closeNelement=document.querySelector("#closeN")
var closeCelement=document.querySelector("#closeC")
var cocktailbkg=document.querySelector(".cocktail_bkg")
var nutritionbkg=document.querySelector(".nutrition_bkg")


var cocktail1btnEl = document.querySelector("#cocktail1button")
var cocktail2btnEl = document.querySelector("#cocktail2button")
var cocktail3btnEl = document.querySelector("#cocktail3button")
var cocktail4btnEl = document.querySelector("#cocktail4button")
var ingredientCEl = document.querySelector("#ingredientsC")
var instructionEl = document.querySelector("#instructionC")

// Get form, item, and shoppinglist
var addToShoppingList = document.querySelector("#add-to-shoppinglist")
var shoppinglistItem = document.querySelector("#shopping-list-item")
var shoppinglist = document.querySelector("#shoppinglist")

// FUNCTIONS

function getByIngredients() {
	fetch(searchString)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			
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
			recp3ID = data[2].id

			title4El.textContent = data[3].title
			var att4 = data[3].image
			img4El.setAttribute("src", att4)
			recp4ID = data[3].id

			console.log("rep 3=" + recp3ID)
			
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
            
                createButtons()
		})
	
}

addToShoppingList.addEventListener(
	"submit",
	function (event) {
		// Don't submit the form
		event.preventDefault()

		// Ignore it if the shoppinglist item is empty
		if (shoppinglistItem.value.length < 1) return

		// Add item to shoppinglist
		shoppinglist.innerHTML +=
			"<li>" + shoppinglistItem.value + "</li>"

		// Clear input
		shoppinglistItem.value = ""

		// Save the list to localStorage
		localStorage.setItem(
			"shoppinglistItems",
			shoppinglist.innerHTML
		)
	},
	false
)

function clearlist() {
	localStorage.clear()
	window.location.reload()
}

// Check for saved shoppinglist items
var saved = localStorage.getItem("shoppinglistItems")

// If there are any saved items, update our list
if (saved) {
	shoppinglist.innerHTML = saved
}

function createButtons() {
	fetch(URL1)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			ref1El.setAttribute("href", data.sourceUrl)
		})
	fetch(URL2)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			ref2El.setAttribute("href", data.sourceUrl)
		})
	fetch(URL3)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			ref3El.setAttribute("href", data.sourceUrl)
		})
	fetch(URL4)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			ref4El.setAttribute("href", data.sourceUrl)
		})
}

// BUTTIN AND EVENT LISTENERS

searchEl.addEventListener("click", function (event) {
	event.preventDefault()
	input = textEl.value.trim()
	console.log("input=" + input)
	searchString =
		"https://api.spoonacular.com/recipes/findByIngredients?ingredients=" +
		input +
		"&number=4&apiKey=" +
		APIKEY
	console.log("search string is=" + searchString)
	getByIngredients(searchString)
})



// Nutrition Buttons

nut1.addEventListener("click", function () {
	fetch(URL1)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log("nutrition data" + data)
			modalNEl.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
			carbsEl.textContent =
				data.nutrition.caloricBreakdown.percentCarbs
			fatEl.textContent =
				data.nutrition.caloricBreakdown.percentFat
			proteinEl.textContent =
				data.nutrition.caloricBreakdown.percentProtein
			caloriesEl.textContent =
				data.nutrition.nutrients[0].amount
		})
})

nut2.addEventListener("click", function () {
	fetch(URL2)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log("nutrition data" + data)
			modalNEl.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
			carbsEl.textContent =
				data.nutrition.caloricBreakdown.percentCarbs
			fatEl.textContent =
				data.nutrition.caloricBreakdown.percentFat
			proteinEl.textContent =
				data.nutrition.caloricBreakdown.percentProtein
			caloriesEl.textContent =
				data.nutrition.nutrients[0].amount
		})
})

nut3.addEventListener("click", function () {
	fetch(URL3)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log("nutrition data" + data)
			modalNEl.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
			carbsEl.textContent =
				data.nutrition.caloricBreakdown.percentCarbs
			fatEl.textContent =
				data.nutrition.caloricBreakdown.percentFat
			proteinEl.textContent =
				data.nutrition.caloricBreakdown.percentProtein
			caloriesEl.textContent =
				data.nutrition.nutrients[0].amount
		})
})

nut4.addEventListener("click", function () {
	fetch(URL4)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log("nutrition data" + data)
			modalNEl.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
			carbsEl.textContent =
				data.nutrition.caloricBreakdown.percentCarbs
			fatEl.textContent =
				data.nutrition.caloricBreakdown.percentFat
			proteinEl.textContent =
				data.nutrition.caloricBreakdown.percentProtein
			caloriesEl.textContent =
				data.nutrition.nutrients[0].amount
		})
})

// to close modal when you click on the X at top right
// deletEl.addEventListener("click", function () {
// 	console.log("cancel has been clicked")
// 	modalEL.classList.remove("is-active")
// 	htmlEl.classList.remove("is-clipped")
// })

// to close modal when you click on the background
// backEL.addEventListener("click", function (event) {
// 	event.preventDefault()
// 	modalEL.classList.remove("is-active")
// 	modalNEl.classList.remove("is-active")
// 	htmlEl.classList.remove("is-clipped")
// })



// deletnEl.addEventListener("click", function () {
// 	modalNEl.classList.remove("is-active")
// 	htmlEl.classList.remove("is-clipped")
// })



// Cocktail Button

cocktail1btnEl.addEventListener("click", function () {
	fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/random.php"
	)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
			console.log("ing", ingredientCEl)
			modalCEl.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
			ingredientCEl.innerHTML =
				data.drinks[0].strIngredient1
			instructionEl.innerHTML =
				data.drinks[0].strInstructions
		})
})
cocktail2btnEl.addEventListener("click", function () {
	fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/random.php"
	)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
			console.log("ing", ingredientCEl)
			modalCEl.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
			ingredientCEl.innerHTML =
				data.drinks[0].strIngredient1
			instructionEl.innerHTML =
				data.drinks[0].strInstructions
		})
})
cocktail3btnEl.addEventListener("click", function () {
	fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/random.php"
	)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
			console.log("ing", ingredientCEl)
			modalCEl.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
			ingredientCEl.innerHTML =
				data.drinks[0].strIngredient1
			instructionEl.innerHTML =
				data.drinks[0].strInstructions
		})
})
cocktail4btnEl.addEventListener("click", function () {
	fetch(
		"https://www.thecocktaildb.com/api/json/v1/1/random.php"
	)
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
			console.log("ing", ingredientCEl)
			modalCEl.classList.add("is-active")
			htmlEl.classList.add("is-clipped")
			ingredientCEl.innerHTML =
				data.drinks[0].strIngredient1
			instructionEl.innerHTML =
				data.drinks[0].strInstructions
		})
})
// deletCEl.addEventListener("click", function () {
// 	console.log("cancel has been clicked")
// 	modalCEL.classList.remove("is-active")
// 	htmlEl.classList.remove("is-clipped")
// })

// backEL.addEventListener("click", function (e){
// 	e.preventDefault()
// 	modalCEL.classList.remove("is-active")
// 	modalCEl.classList.remove("is-active")
// 	htmlEl.classList.remove("is-clipped")
// })

nutritionbkg.addEventListener("click", function(e){
    e.preventDefault()
    console.log("background activate")
    modalNEl.classList.remove("is-active")
	htmlEl.classList.remove("is-clipped")
})

closeNelement.addEventListener("click", function() {
    console.log("the cancel button clicked")
    modalNEl.classList.remove("is-active")
	htmlEl.classList.remove("is-clipped")
})


closeCelement.addEventListener("click", function() {
    console.log("the cancel button clicked")
    modalCEl.classList.remove("is-active")
	htmlEl.classList.remove("is-clipped")
})

cocktailbkg.addEventListener("click", function(e){
    e.preventDefault()
    console.log("background activate")
    modalCEl.classList.remove("is-active")
	htmlEl.classList.remove("is-clipped")
})