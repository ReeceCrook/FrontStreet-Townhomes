
import img1 from './assets/HomePagePics/Prices.jpg'
import img2 from './assets/HomePagePics/Main.jpeg'
import img3 from './assets/HomePagePics/Main2.jpeg'
import img4 from './assets/HomePagePics/Kitchen.jpeg'
import img5 from './assets/HomePagePics/Bathroom.jpeg'
import img6 from './assets/HomePagePics/Bedroom.jpeg'
import img7 from './assets/HomePagePics/Entry.jpeg'
import img8 from './assets/HomePagePics/Garage.jpeg'
import img9 from './assets/HomePagePics/Outer.jpeg'
import img10 from './assets/HomePagePics/OuterBack.jpeg'
import img11 from './assets/HomePagePics/OuterBack2.jpeg'
import img12 from './assets/HomePagePics/Bedroom2.jpg'
import img13 from './assets/HomePagePics/FrontView.jpg'
import img14 from './assets/HomePagePics/Kitchen2.jpg'
import img15 from './assets/HomePagePics/Main3.jpg'
import img16 from './assets/HomePagePics/Main4.jpg'
import img17 from './assets/HomePagePics/Bathroom2.jpg'


import card1img1 from './assets/FloorPlans/card1/Unit 101 Floorplan.jpg'
import card1img2 from './assets/FloorPlans/card1/Unit 101 Main Level.jpg'

import card2img1 from './assets/FloorPlans/card2/3bd_3ba Front Street Upper Level.jpg'
import card2img2 from './assets/FloorPlans/card2/3bd_3ba Front Street Main Level.jpg'

import card3img1 from './assets/FloorPlans/card3/Model 1558-main.jpg'
import card3img2 from './assets/FloorPlans/card3/Model 1558-Upper.jpg'
import card3img3 from './assets/FloorPlans/card3/Model 1558-Basement.jpg'

const homeImages = [
    {
        'id': 1,
        'original': img1,
        "thumbnail": img1,
        'originalClass': 'homeImgs',
    },
    {
        'id': 2,
        'original': img2,
        "thumbnail": img2,
        'originalClass': 'homeImgs'
    },
    {
        'id': 3,
        'original': img3,
        "thumbnail": img3,
        'originalClass': 'homeImgs'
    },
    {
        'id': 4,
        'original': img15,
        "thumbnail": img15,
        'originalClass': 'homeImgs'
    },
    {
        'id': 5,
        'original': img16,
        "thumbnail": img16,
        'originalClass': 'homeImgs'
    },
    {
        'id': 6,
        'original': img4,
        "thumbnail": img4,
        'originalClass': 'homeImgs'
    },
    {
        'id': 7,
        'original': img14,
        "thumbnail": img14,
        'originalClass': 'homeImgs'
    },
    {
        'id': 8,
        'original': img5,
        "thumbnail": img5,
        'originalClass': 'homeImgs'
    },
    {
        'id': 9,
        'original': img17,
        "thumbnail": img17,
        'originalClass': 'homeImgs'
    },
    {
        'id': 10,
        'original': img6,
        "thumbnail": img6,
        'originalClass': 'homeImgs'
    },
    {
        'id': 11,
        'original': img12,
        "thumbnail": img12,
        'originalClass': 'homeImgs'
    },
    {
        'id': 12,
        'original': img7,
        "thumbnail": img7,
        'originalClass': 'homeImgs'
    },
    {
        'id': 13,
        'original': img8,
        "thumbnail": img8,
        'originalClass': 'homeImgs'
    },
    {
        'id': 14,
        'original': img13,
        "thumbnail": img13,
        'originalClass': 'homeImgs'
    },
    {
        'id': 15,
        'original': img9,
        "thumbnail": img9,
        'originalClass': 'homeImgs'
    },
    {
        'id': 16,
        'original': img10,
        "thumbnail": img10,
        'originalClass': 'homeImgs'
    },
    {
        'id': 17,
        'original': img11,
        "thumbnail": img11,
        'originalClass': 'homeImgs'
    }
]

const floorPlanImages = [

    [
        {
            'original': card1img1,
            "thumbnail": card1img1,
            'model': 1551,
            'originalClass': 'cardImgs'
        },
        {
            'original': card1img2,
            "thumbnail": card1img2,
            'model': 1551,
            'originalClass': 'cardImgs'
        }
    ],
    [
        {
            'original': card2img1,
            "thumbnail": card2img1,
            'model': 1551,
            'originalClass': 'cardImgs'
        },
        {
            'original': card2img2,
            "thumbnail": card2img2,
            'model': 1551,
            'originalClass': 'cardImgs'
        }
    ],
    [
        {
            'original': card3img1,
            "thumbnail": card3img1,
            'model': 1558,
            'originalClass': 'cardImgs'
        },
        {
            'original': card3img2,
            "thumbnail": card3img2,
            'model': 1558,
            'originalClass': 'cardImgs'
        },
        {
            'original': card3img3,
            "thumbnail": card3img3,
            'model': 1558,
            'originalClass': 'cardImgs'
        },
    ]
]



export { homeImages, floorPlanImages }