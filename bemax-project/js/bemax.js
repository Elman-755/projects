let featuresCards = document.querySelector(".features");

let cards = [
    {
        
    },
    {
        cardLogo: '',
        cardText: "User Experience",
        cardComment: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's"
    },
    {
        cardLogo: '<i class="fa-solid fa-rocket"></i>',
        cardText: "Customizability",
        cardComment: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's"
    },
    {
        cardLogo: '<i class="fa-regular fa-image"></i>',
        cardText: "Retina Ready",
        cardComment: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's"
    },
    {
        cardLogo: '<i class="fa-light fa-mobile-screen"></i>',
        cardText: "Fully Responsive",
        cardComment: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's"
    },
    {
        cardLogo: '<i class="fa-solid fa-gear"></i>',
        cardText: "Custom Support",
        cardComment: "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's"
    }
]

for (let i = 0; i < cards.length; i++) {
    let cardsQroup =

            `
            <div class="col-3">
            
        </div>
                            </div>
                
            `
            featuresCards.innerHTML += cardsQroup;
}

            