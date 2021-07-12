let player = 
{
	name : "Shovik",
	chips : 145,
}

let cards = []

let sum = 0

let hasBlackJack = false
let isAlive = false

let message=""
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl= document.getElementById("player-el")

playerEl.textContent = player.name+" : $ "+ player.chips


// method to ensure start
function startGame()
{
	isAlive=true
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard,secondCard]
	sum = firstCard + secondCard
	//cardsEl.textContent += firstCard +" " + secondCard
	renderGame()
}

// method to does the main function
function renderGame()
{
	cardsEl.textContent = "Cards : "

	for(let i = 0; i < cards.length; i++)
	{
		cardsEl.textContent+=cards[i]+" "
	}

	sumEl.textContent = "Sum : "+ sum

	if (sum <= 20)
	{
		message="Do you want to draw a new card?"
	}
	else if(sum === 21)
	{
		message = "Wohooo You've got black jack!!"
		hasBlackJack = true;
	}
	else
	{
		message = "You're out of the game!"
		isAlive=false
	}
		messageEl.textContent = message;
}


//displays a new card
function newCard()
{
	if(isAlive === true && hasBlackJack  === false)
	{	
		let card = getRandomCard();
		sum+=card;
		cards.push (card)
		for(let i = 0; i < cards.length; i++)
		{
			console.log(cards[i]+" ")
		}
		renderGame();
	}
	else
	{
		messageEl.textContent = "Please click on 'Start Game'"
	}
}


//Generates random numbers
function getRandomCard()
{
	let val=Math.floor(Math.random() * 13 )
	//console.log(val)
	if(val > 10)
	{
		return 10
	}
	else if(val === 1)
	{
		return 11
	}
	else
	{
		return val
	}
}	
