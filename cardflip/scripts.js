document.addEventListener('DOMContentLoaded', () =>{
    const cardArr = [
        {
            name: 'aqua',
            img: 'images/aqua.jpg'
        },
        {
            name: 'aqua',
            img: 'images/aqua.jpg'
        },
        {
            name: 'bat',
            img: 'images/bat.jpg'
        },
        {
            name: 'bat',
            img: 'images/bat.jpg'
        },
        {
            name: 'beast',
            img: 'images/beast.jpg'
        },
        {
            name: 'beast',
            img: 'images/beast.jpg'
        },
        {
            name: 'black',
            img: 'images/black.png'
        },
        {
            name: 'black',
            img: 'images/black.png'
        },
        {
            name: 'cat',
            img: 'images/cat.jpg'
        },
        {
            name: 'cat',
            img: 'images/cat.jpg'
        },
        {
            name: 'constantine',
            img: 'images/constantine.jpg'
        },
        {
            name: 'constantine',
            img: 'images/constantine.jpg'
        },
        {
            name: 'cyborg',
            img: 'images/cyborg.jpg'
        },
        {
            name: 'cyborg',
            img: 'images/cyborg.jpg'
        },
        {
            name: 'darkseid',
            img: 'images/darkseid.png'
        },
        {
            name: 'darkseid',
            img: 'images/darkseid.png'
        },
        {
            name: 'doomsday',
            img: 'images/doomsday.png'
        },
        {
            name: 'doomsday',
            img: 'images/doomsday.png'
        },
        {
            name: 'flash',
            img: 'images/flash.jpg'
        },
        {
            name: 'flash',
            img: 'images/flash.jpg'
        },
        {
            name: 'garth',
            img: 'images/garth.jpg'
        },
        {
            name: 'garth',
            img: 'images/garth.jpg'
        },
        {
            name: 'harley',
            img: 'images/harley.jpg'
        },
        {
            name: 'harley',
            img: 'images/harley.jpg'
        },
        {
            name: 'joker',
            img: 'images/joker.jpg'
        },
        {
            name: 'joker',
            img: 'images/joker.jpg'
        },
        {
            name: 'lex',
            img: 'images/lex.png'
        },
        {
            name: 'lex',
            img: 'images/lex.png'
        },
        {
            name: 'martian',
            img: 'images/martian.png'
        },
        {
            name: 'martian',
            img: 'images/martian.png'
        },
        {
            name: 'mera',
            img: 'images/mera.jpg'
        },
        {
            name: 'mera',
            img: 'images/mera.jpg'
        },
        {
            name: 'namor',
            img: 'images/namor.jpg'
        },
        {
            name: 'namor',
            img: 'images/namor.jpg'
        },
        {
            name: 'poison',
            img: 'images/poison.jpg'
        },
        {
            name: 'poison',
            img: 'images/poison.jpg'
        },
        {
            name: 'raas',
            img: 'images/raas.png'
        },
        {
            name: 'raas',
            img: 'images/raas.png'
        },
        {
            name: 'shazam',
            img: 'images/shazam.jpg'
        },
        {
            name: 'shazam',
            img: 'images/shazam.jpg'
        },


    ]

    //random sort cards
    cardArr.sort(() => 0.5 - Math.random())
    var cardSelected = []
    var cardSelectedId = []
    var cardsWon = []
//create board
    const grid = document.querySelector('.grid')
    const results = document.querySelector('#score')
    function gameBoard(){
        for(let num =0; num < cardArr.length; num++){
            var card = document.createElement('img')
            card.setAttribute('src','images/dcimg.png')
            card.setAttribute('data-id', num)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatches(){
        var cardSet = document.querySelectorAll('img')

        const cardOneId = cardSelectedId[0]
        const cardTwoId = cardSelectedId[1]
        if(cardSelected[0] === cardSelected[1]){
            alert("Yaay")
            cardSet[cardOneId].setAttribute('src', 'images/white.png')
            cardSet[cardTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardSelected)
        } else {
            alert("try again")
            cardSet[cardOneId].setAttribute('src', 'images/dcimg.png')
            cardSet[cardTwoId].setAttribute('src', 'images/dcimg.png')
        }
        cardSelected = []
        cardSelectedId = []
        results.textContent = cardsWon.length*10
        if(cardsWon.length === cardArr.length/2){
            results.textContent = "Congratulations, you defeated the heroes!"
        }
    }



    //flip cards
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardSelected.push(cardArr[cardId].name)
        cardSelectedId.push(cardId)
        this.setAttribute('src',cardArr[cardId].img)
        if(cardSelected.length === 2){
            setTimeout(checkForMatches, 200)
        }
    }
    gameBoard()
})