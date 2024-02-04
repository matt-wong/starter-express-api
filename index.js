const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send([
        {
            "name": "Cooked Meals",
            "daysValues": [
                {
                    "completed": 2,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 2,
                    "planned": 0
                },
                {
                    "completed": 2,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 2,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 1
                }
            ],
            "icon": "no_food",
            "quota": 10
        },
        {
            "name": "Vegetarian Meals",
            "daysValues": [
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 1
                }
            ],
            "icon": "spa",
            "quota": 2
        },
        {
            "name": "Exercise",
            "daysValues": [
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0.5
                }
            ],
            "icon": "fitness_center",
            "quota": 4.5
        },
        {
            "name": "Social",
            "daysValues": [
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 1
                }
            ],
            "icon": "people",
            "quota": 3
        },
        {
            "name": "Help",
            "daysValues": [
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                }
            ],
            "icon": "support",
            "quota": 1,
            "weekComment": ""
        },
        {
            "name": "Self-Development",
            "daysValues": [
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0.5,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 1
                },
                {
                    "completed": 0,
                    "planned": 0
                }
            ],
            "icon": "handyman",
            "quota": 2.5,
            "weekComment": "Backend WQ?"
        },
        {
            "name": "New Thing",
            "daysValues": [
                {
                    "completed": 2,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 2,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                }
            ],
            "icon": "new_releases",
            "quota": 2.5
        },
        {
            "name": "House Maintainance",
            "daysValues": [
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 2
                }
            ],
            "icon": "home",
            "quota": 4
        },
        {
            "name": "Hobby Session",
            "daysValues": [
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 1
                },
                {
                    "completed": 0,
                    "planned": 1
                }
            ],
            "icon": "brush",
            "quota": 4
        },
        {
            "name": "Meditate",
            "daysValues": [
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 2,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 1,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 1
                }
            ],
            "icon": "airline_seat_recline_extra",
            "quota": 7
        },
        {
            "name": "Espanol",
            "daysValues": [
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                },
                {
                    "completed": 0,
                    "planned": 0
                }
            ],
            "icon": "airline_seat_recline_extra",
            "quota": 1
        }
    ])
})
app.listen(process.env.PORT || 3000)