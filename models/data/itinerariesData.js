import 'dotenv/config.js'
import "../../config/database.js"
import Itinerary from '../Itinerary.js'

let itineraries = [
    {
        userName: "Minji Kim",
        userPhoto: "https://randomuser.me/api/portraits/women/45.jpg",
        itineraryName: "Seoul City Tour",
        itineraryPhoto: "https://www.agoda.com/wp-content/uploads/2024/08/Namsan-Tower-during-autumn-in-Seoul-South-Korea-1244x700.jpg",
        price: 70,
        duration: 5,
        likes: 0,
        hashtags: ["#culture", "#history", "#Seoul"],
        comments: "Explore the ancient palaces and bustling streets of Seoul.",
        cityId: "67de010a672a78d226a4c9c2"
      },
      {
        userName: "Jin Park",
        userPhoto: "https://randomuser.me/api/portraits/men/22.jpg",
        itineraryName: "Nightlife in Seoul",
        itineraryPhoto: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/11/f3/43.jpg",
        price: 90,
        duration: 4,
        likes: 0,
        hashtags: ["#nightlife", "#Kpop", "#Seoul"],
        comments: "Experience the vibrant nightlife and karaoke bars of Seoul.",
        cityId: "67de010a672a78d226a4c9c2"
      },
      {
        userName: "Carlos Mendoza",
        userPhoto: "https://randomuser.me/api/portraits/men/11.jpg",
        itineraryName: "Tulum Beach Day",
        itineraryPhoto: "https://caitypfohl.com/wp-content/uploads/2017/12/IMG_9572.jpg",
        price: 50,
        duration: 6,
        likes: 0,
        hashtags: ["#beach", "#sun", "#Tulum"],
        comments: "Relax and enjoy the beautiful beaches and crystal-clear waters of Tulum.",
        cityId: "67de010a672a78d226a4c9c4"
      },
      {
        userName: "Sofia Ramirez",
        userPhoto: "https://randomuser.me/api/portraits/women/34.jpg",
        itineraryName: "Tango Night in Buenos Aires",
        itineraryPhoto: "https://showdetango.com/wp-content/uploads/2024/12/1-11.jpg",
        price: 40,
        duration: 3,
        likes: 0,
        hashtags: ["#tango", "#Argentina", "#BuenosAires"],
        comments: "Enjoy an unforgettable tango experience in the heart of Buenos Aires.",
        cityId: "67de010a672a78d226a4c9b8"
      },
      {
        userName: "Marco Rossi",
        userPhoto: "https://randomuser.me/api/portraits/men/35.jpg",
        itineraryName: "Ancient Rome Tour",
        itineraryPhoto: "https://ancientromelive.org/wp-content/uploads/2019/10/IMG_6927-scaled.jpeg",
        price: 100,
        duration: 5,
        likes: 0,
        hashtags: ["#history", "#Rome", "#ancient"],
        comments: "Discover the history and beauty of Rome's ancient ruins.",
        cityId: "67de010a672a78d226a4c9c0"
      },
      {
        userName: "Hiro Tanaka",
        userPhoto: "https://randomuser.me/api/portraits/men/45.jpg",
        itineraryName: "Cultural Kyoto Morning Tour",
        itineraryPhoto: "https://ancientromelive.org/wp-content/uploads/2019/10/IMG_6927-scaled.jpeg",
        price: 50,
        duration: 4,
        likes: 0,
        hashtags: ["#culture", "#temples", "#Kyoto"],
        comments: "Explore the most iconic temples and learn about Japanese traditions.",
        cityId: "67de010a672a78d226a4c9bc"
      },
      {
        userName: "Yuki Sato",
        userPhoto: "https://randomuser.me/api/portraits/women/32.jpg",
        itineraryName: "Kyoto Night Food Crawl",
        itineraryPhoto: "https://www.kyotoguidedwalks.com/wp-content/uploads/2019/01/Nishiki-market-1-605x465.jpg",
        price: 80,
        duration: 3,
        likes: 0,
        hashtags: ["#foodie", "#nightlife", "#localcuisine"],
        comments: "Discover Kyoto’s best izakayas and local dishes.",
        cityId: "67de010a672a78d226a4c9bc"
      },
      {
        userName: "Kenji Nakamura",
        userPhoto: "https://randomuser.me/api/portraits/men/67.jpg",
        itineraryName: "Bamboo Grove & Monkey Park",
        itineraryPhoto: "https://photos.smugmug.com/Kyoto/Kyoto-Things-To-Do/i-FztG5fZ/0/90fb2849/L/IK_Shutterstock_Arashiyama_Monkey_Park_01-L.jpg",
        price: 60,
        duration: 5,
        likes: 0,
        hashtags: ["#adventure", "#nature", "#familytrip"],
        comments: "Walk through the bamboo forest and meet wild monkeys in Arashiyama.",
        cityId: "67de010a672a78d226a4c9bc"
      },
      {
        userName: "Omar Khalil",
        userPhoto: "https://randomuser.me/api/portraits/men/50.jpg",
        itineraryName: "Giza Pyramid Tour",
        itineraryPhoto: "https://photos.smugmug.com/Kyoto/Kyoto-Things-To-Do/i-FztG5fZ/0/90fb2849/L/IK_Shutterstock_Arashiyama_Monkey_Park_01-L.jpg",
        price: 90,
        duration: 5,
        likes: 0,
        hashtags: ["#pyramids", "#history", "#Cairo"],
        cityId: "67de010a672a78d226a4c9b9"
      },
      {
        userName: "Lars de Vries",
        userPhoto: "https://randomuser.me/api/portraits/men/42.jpg",
        itineraryName: "Canal Bike Ride",
        itineraryPhoto: "https://flagshipamsterdam.com/wp-content/uploads/2024/12/ab6a1976-2-1024x683.jpg",
        price: 30,
        duration: 2,
        likes: 0,
        hashtags: ["#canals", "#bike", "#Amsterdam"],
        comments: "Short but sweet!",
        cityId: "67de010a672a78d226a4c9b5"
      },
      {
        userName: "Lucia Martínez",
        userPhoto: "https://randomuser.me/api/portraits/women/60.jpg",
        itineraryName: "Gaudí Architecture Walk",
        itineraryPhoto: "https://www.expocihachub.com/img/blog/casa-batllo---arquitectura-que-inspira-casa-batllo.webp",
        price: 40,
        duration: 3,
        likes: 0,
        hashtags: ["#Gaudí", "#architecture", "#Barcelona"],
        cityId: "67de010a672a78d226a4c9b7"
      },
      {
        userName: "João Silva",
        userPhoto: "https://randomuser.me/api/portraits/men/20.jpg",
        itineraryName: "Christ the Redeemer + Copacabana",
        itineraryPhoto: "https://media.cnn.com/api/v1/images/stellar/prod/2024-05-17t175319z-2113098371-rc.jpg?c=16x9&q=w_800,c_fill",
        price: 60,
        duration: 5,
        likes: 0,
        hashtags: ["#Rio", "#views", "#beach"],
        cityId: "67de010a672a78d226a4c9bf"
      },
      {
        userName: "Thanaporn S.",
        userPhoto: "https://randomuser.me/api/portraits/women/32.jpg",
        itineraryName: "Floating Market & Temples",
        itineraryPhoto: "https://image.kkday.com/v2/image/get/w_1920,h_1080,c_fit,q_55,wm_auto/s1.kkday.com/product_144848/20230601091050_QX1lx/jpg",
        price: 55,
        duration: 6,
        likes: 0,
        hashtags: ["#Bangkok", "#market", "#temples"],
        cityId: "67de010a672a78d226a4c9b6"
      },
      {
        userName: "Chloe Wilson",
        userPhoto: "https://randomuser.me/api/portraits/women/29.jpg",
        itineraryName: "Sydney Harbor Adventure",
        itineraryPhoto: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/events/cto/matts-harbour-paddle-pirates/matts-harbour-paddle-pirates-01.jpg",
        price: 85,
        duration: 5,
        likes: 0,
        hashtags: ["#Sydney", "#harbor", "#cruise"],
        comments: "Loved the boat ride!",
        cityId: "67de010a672a78d226a4c9c3"
      },
      {
        userName: "Jack Thompson",
        userPhoto: "https://randomuser.me/api/portraits/men/18.jpg",
        itineraryName: "Bondi to Coogee Coastal Walk",
        itineraryPhoto: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a3/74/63/bondi-to-coogee-beach.jpg?w=1200&h=-1&s=1",
        price: 20,
        duration: 3,
        likes: 0,
        hashtags: ["#beach", "#hiking", "#Sydney"],
        cityId: "67de010a672a78d226a4c9c3"
      },
      {
        userName: "Linh Tran",
        userPhoto: "https://randomuser.me/api/portraits/women/58.jpg",
        itineraryName: "Old Quarter Street Food Tour",
        itineraryPhoto: "https://image.cookly.me/tr:h-544,w-824,pr-true,rt-auto/images/hanoi-private-street-food-walking-tour.jpeg",
        price: 25,
        duration: 4,
        likes: 0,
        hashtags: ["#foodie", "#Hanoi", "#local"],
        cityId: "67de010a672a78d226a4c9bb"
      },
      {
        userName: "Thando Mokoena",
        userPhoto: "https://randomuser.me/api/portraits/men/19.jpg",
        itineraryName: "Table Mountain Hike",
        itineraryPhoto: "https://media.cntraveler.com/photos/55a029ad7772ff921f95d317/master/w_1600%2Cc_limit/table-mountain-cape-town-hikers.jpg",
        price: 35,
        duration: 4,
        likes: 0,
        hashtags: ["#CapeTown", "#hiking", "#mountain"],
        comments: "Challenging but rewarding!",
        cityId: "67de010a672a78d226a4c9ba"
      },
      {
        userName: "Layla Haddad",
        userPhoto: "https://randomuser.me/api/portraits/women/23.jpg",
        itineraryName: "Treasury Trail Petra",
        itineraryPhoto: "https://diaryofatourist.com/wp-content/uploads/2023/03/20230204_132919.jpg",
        price: 75,
        duration: 5,
        likes: 0,
        hashtags: ["#Petra", "#history", "#adventure"],
        cityId: "67de010a672a78d226a4c9be"
      },
      {
        userName: "Anastasia Volkova",
        userPhoto: "https://randomuser.me/api/portraits/women/15.jpg",
        itineraryName: "Hermitage and Canal Cruise",
        itineraryPhoto: "https://www.shoreexcursionsgroup.com/img/tour/EUSPFABERGECAN-2.jpg",
        price: 60,
        duration: 4,
        likes: 0,
        hashtags: ["#SaintPetersburg", "#museum", "#cruise"],
        comments: "Art and elegance in one day.",
        cityId: "67de010a672a78d226a4c9c1"
      }
]

Itinerary.insertMany(itineraries)
