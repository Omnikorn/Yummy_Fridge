Yummy Fridge 


This is an interactive recipe recommendation app. Based on the ingredient(s) submitted by the user our app will search the Spoonacular database of 5000+ recipes and returns 4 recipes to display to the end user. 

User story:
After a long day working from home tapping away at the computer, your dogs barking for fuss and the 24rd amazon parcel has just been delivered. Our user waddles to the kitchen and open the fridge to find a mishmash of ingredients. He’s overwhelmed and too tired to think. He decides maybe cooking is not an option tonight and goes and collapses on the sofa and falls asleep in front of Netflix. 
If only our user had access to “yummy Fridge” he could have easily told it what main ingredients he had in his fridge and recipes would start flying out of his device. No need to think, no need to be overwhelmed just follow the simple instruction and he presto, dinner is served !! No more hungry nights ! 
Thinks of this scenario playing over and over across the nation. A nurse coming home from a night shift, a mum after putting her toddler to sleep or our poor university student after a night out on the town.  

App Description: 
Yummy Fridge is an interactive recipe search application. The user inputs one or more ingredients into a search field area. The app generates an API request to Spoonacular to search their 5000 strong recipe database and returns 4 recipes with the needed ingredients. 
These are displayed to the end user as 4 cards with the name of the meal and an appetising picture of the meal. Under each picture are 3 buttons. A meal button, a nutrition button and a cocktail button.  The app including the cards and button is based on a Bulma CSS framework. 
The recipe button opens the website containing the original recipe in a new tab. 
The nutrition button opens a modal with nutrition info regarding the meal including the percent of fats, proteins and carbohydrates and total calories within the meal. Although we want our app to be easy to use and not overwhelm the user with choices and information we still need to make sure the user is healthy and has access to the needed nutritional information. 

Finally, a cocktail button fires a second API that searches cocktailDB and returns a random cocktail that is displayed to the user in a new modal with instruction on how to make. 
A handy shopping list is also included. The user can add ingredients they do not have for a certain recipe so then can get them on their next shopping trip.  This is stored locally on the user’s local storage and therefore easily accessible at any time. 

Acceptance Criteria
Satisfies the following code requirements:
* Application uses at least two server-side APIs.
•	Spoonacular API for ingredient recipe search and nutrition information  (second separate API)
•	CocktailDB to search for cocktail pairing with the meal 
* Application uses client-side storage to store persistent data.
•	Shopping list is stored on the users local storage and therefor always present when needed 
* Application doesn't use JS alerts, prompts, or confirms (uses modals instead).
•	Modals are used throughout 
* Application uses a CSS framework other than Bootstrap.
•	Bulma is  the CSS framework used
* Application is interactive (accepts and responds to user input)
•	Ingredient input through text search field
•	Ability to add items to the shopping list through text input
•	A number of buttons that display various modals/information/websites










