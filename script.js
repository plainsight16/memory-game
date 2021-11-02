window.addEventListener('DOMContentLoaded', (event) => {
    var cardArray = [
        {
            name:"ice-cream",
            image:"/images/ice-cream.png"
        },
        {
            name:"cheeseburger",
            image:"/images/cheeseburger.png"
        },
        {
            name:"hotdog",
            image:"/images/hotdog.png"
        },
        {
            name:"hotdog",
            image:"/images/hotdog.png"
        },
        {
            name:"ice-cream",
            image:"/images/ice-cream.png"
        },
        {
            name:"milkshake",
            image:"/images/milkshake.png"
        },
        {
            name:"cheeseburger",
            image:"/images/cheeseburger.png"
        },
        {
            name:"pizza",
            image:"/images/pizza.png"
        },
        {
            name:"pizza",
            image:"/images/pizza.png"
        },
        {
            name:"milkshake",
            image:"/images/milkshake.png"
        },
        {
            name:"fries",
            image:"/images/fries.png"
        },
        {
            name:"fries",
            image:"/images/fries.png"
        },
        
    ]
    var cardsChosen = []
    var cardsWon =[]
    const grid = document.querySelector(".grid")
    var result = 0

    function reset(){
        if (result === 6){
            result = 0
            document.getElementById("result").textContent = result
            document.querySelectorAll("img").setAttribute("src", "/images/blank.png")
            cardArray.sort(()=> 0.5 - Math.random())
            var cards = querySelectorAll("img")
            for (let i = 0; i< cards.length; i++){
                cards[i].addEventListener("click", flipCard)
            }
            reset()
        }
       
    }

    function checkMatch(){
        var cards = document.querySelectorAll("img")
        if (cardsChosen[0].name === cardsChosen[1].name){
            alert("You found a match")
            cards[cardsChosen[0].id].setAttribute("src", "/images/white.png")
            cards[cardsChosen[1].id].setAttribute("src", "/images/white.png")
            cardsWon.push(cardsChosen);
            result+=1
            document.getElementById("result").textContent = result
        }
        else{
            cards[cardsChosen[0].id].setAttribute("src", "/images/blank.png")
            cards[cardsChosen[1].id].setAttribute("src", "/images/blank.png")
        }
        cardsChosen =[]
        if (cardsWon.length === cardArray.length/2){
            alert("Congratulations, you won.")
        }
        
    }

    function createBoard (){
        for (let i = 0; i < cardArray.length; i++){
            var card = document.createElement("img")
            card.setAttribute("src","images/blank.png")
            card.setAttribute("dataId", i)
            grid.appendChild(card)
            card.addEventListener("click", flipCard)
            reset()
        }
    }

    function flipCard(){
        var whiteImg = "/images/white.png"
       if(this.getAttribute("src") != whiteImg){
        this.setAttribute("src",cardArray[this.getAttribute("dataId")].image)
        cardsChosen.push({
            id: this.getAttribute("dataId"),
            name: cardArray[this.getAttribute("dataId")].name
        })
        if ( cardsChosen[0].id === cardsChosen[1].id ) cardsChosen.pop(1)
        if (cardsChosen.length === 2 && cardsChosen[0].id != cardsChosen[1].id){
            setTimeout(checkMatch,700) 
        }
       }
    }

    createBoard()
    reset()
    
});