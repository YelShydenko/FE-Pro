import category1 from '../assets/logo.png'
import fruits from '../assets/fruits.jpeg'
import veggies from '../assets/veggies.jpeg'
import crupi from '../assets/crupi.jpeg'
import bread from '../assets/bread.jpeg'

export const goodsCategories = [
    {
        id: 0,
        category: [
            {
                categoryName: 'Фрукты',
                img: fruits,
                data: [
                    {
                        cardName: "Банан",
                        cardImg: fruits
                    },
                    {
                        cardName: "Апельсин",
                        cardImg: fruits
                    },
                    {
                        cardName: "Персик",
                        cardImg: fruits
                    },
                    {
                        cardName: "Ананас",
                        cardImg: fruits
                    }
                ]
            }
        ]
    },
    {
        id: 1,
        category: [
            {
                categoryName: 'Овощи',
                img: veggies,
                data: [
                    {
                        cardName: "Помидор",
                        cardImg: veggies
                    },
                    {
                        cardName: "Сельдерей",
                        cardImg: veggies
                    },
                    {
                        cardName: "Огурец",
                        cardImg: veggies
                    },
                    {
                        cardName: "Петрушка",
                        cardImg: veggies
                    }
                ]

            }
        ]
    },
    {
        id: 2,
        category: [
            {
                categoryName: 'Крупы',
                img: crupi,
                data: [
                    {
                        cardName: "Рис",
                        cardImg: crupi
                    },
                    {
                        cardName: "Булгур",
                        cardImg: crupi
                    },
                    {
                        cardName: "Геркулес",
                        cardImg: crupi
                    },
                    {
                        cardName: "Манка",
                        cardImg: crupi
                    }
                ]

            }
        ]
    },
    {
        id: 3,
        category: [
            {
                categoryName: 'Выпечка',
                img: bread,
                data: [
                    {
                        cardName: "Хлеб",
                        cardImg: bread
                    },
                    {
                        cardName: "Багет",
                        cardImg: bread
                    },
                    {
                        cardName: "Круассан",
                        cardImg: bread
                    },
                    {
                        cardName: "Булочка",
                        cardImg: bread
                    }
                ]
            }
        ]
    }
]