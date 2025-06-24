let actions = [

    { 
        name: "eat", 
        id: "action-eat",
        item: [
                {
                    food: "bocadillo de calamares",
                    id: "bocadillo",
                    url: "/src/images/item-food.gif",
                    action: "eat",
                },
                {
                    food: "tupper de sobras",
                    id: "tupper",
                    url: "/src/images/item-food.gif",
                    action: "eat"
                },
                {
                    food: "trozo de pizza fría",
                    id: "pizza",
                    url: "/src/images/item-food.gif",
                    action: "eat"
                }
            ],
        character: "/src/images/character-eating.gif",
        time: 3000,
    },
  { 
        name: "sleep", 
        id: "action-sleep",
        item: [
                {
                    food: "siesta de sofá",
                    id: "siesta",
                    url: "/src/images/item-food.gif",
                    action: "sleep",
                },
                {
                    food: "dormir la mona",
                    id: "dormir",
                    url: "/src/images/item-food.gif",
                    action: "sleep"
                }
            ],
        character: "/src/images/character-default.png",
        time: 10000,
    },
     { 
        name: "play", 
        id: "action-play",
        item: [
            {
                food: "pádel",
                id: "padel",
                url: "/src/images/item-food.gif",
                action: "play",
            },
             {
                food: "cartas",
                id: "escalada",
                url: "/src/images/item-food.gif",
                action: "play"
            },
            {
                food: "dominó",
                id: "domino",
                url: "/src/images/item-food.gif",
                action: "play"
            }
        ],
        character: "/src/images/character-eating.gif",
        time: 3000,
    },


];

export default actions