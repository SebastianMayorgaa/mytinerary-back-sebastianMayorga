import 'dotenv/config.js'
import "../../config/database.js"
import User from '../User.js'

let Users = [
    {
        firstName: "Minji",
        lastName: "Kim",
        email: "minji.kim@example.com",
        password: "Minji1234",
        photo: "https://randomuser.me/api/portraits/women/45.jpg",
        country: "South Korea"
    },
    {
        firstName: "Jin",
        lastName: "Park",
        email: "jin.park@example.com",
        password: "Jinpark1234",
        photo: "https://randomuser.me/api/portraits/men/22.jpg",
        country: "South Korea"
    },
    {
        firstName: "Carlos",
        lastName: "Mendoza",
        email: "carlos.mendoza@example.com",
        password: "carlos1234",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        country: "Mexico"
    },
    {
        firstName: "Sofia",
        lastName: "Ramirez",
        email: "sofia.ramirez@example.com",
        password: "sofia1234",
        photo: "https://randomuser.me/api/portraits/women/34.jpg",
        country: "Argentina"
    },
    {
        firstName: "Marco",
        lastName: "Rossi",
        email: "marco.rossi@example.com",
        password: "marco1234",
        photo: "https://randomuser.me/api/portraits/men/35.jpg",
        country: "Rome"
    },
    {
        firstName: "Hiro",
        lastName: "Tanaka",
        email: "hiro.tanaka@example.com",
        password: "hiro1234",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        country: "Japan"
    },
    {
        firstName: "Yuki",
        lastName: "Sato",
        email: "yuki.sato@example.com",
        password: "yuki1234",
        photo: "https://randomuser.me/api/portraits/women/32.jpg",
        country: "Japan"
    },
    {
        firstName: "Kenji",
        lastName: "Nakamura",
        email: "kenji@example.com",
        password: "kenji1234",
        photo: "https://randomuser.me/api/portraits/men/67.jpg",
        country: "Japan"
    },
    {
        firstName: "Omar",
        lastName: "Khalil",
        email: "khalil@example.com",
        password: "omar1234",
        photo: "https://randomuser.me/api/portraits/men/50.jpg",
        country: "Egypt"
    },
    {
        firstName: "Lars",
        lastName: "de Vries",
        email: "deVries@example.com",
        password: "lars1234",
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
        country: "Netherlands"
    },
    {
        firstName: "Lucia",
        lastName: "Martinez",
        email: "lmartinez@example.com",
        password: "lucia1234",
        photo: "https://randomuser.me/api/portraits/women/60.jpg",
        country: "Spain"
    },
    {
        firstName: "João",
        lastName: "Silva",
        email: "jsilva@example.com",
        password: "silva1234",
        photo: "https://randomuser.me/api/portraits/men/20.jpg",
        country: "Brazil"
    },
    {
        firstName: "Thanaporn",
        lastName: "S",
        email: "thanaporn@example.com",
        password: "Thanaporn1234",
        photo: "https://randomuser.me/api/portraits/women/32.jpg",
        country: "Thailand"
    },
    {
        firstName: "Chloe",
        lastName: "Wilson",
        email: "wilson@example.com",
        password: "wilson1234",
        photo: "https://randomuser.me/api/portraits/women/29.jpg",
        country: "Australia"
    },
    {
        firstName: "Jack",
        lastName: "Thompson",
        email: "thompson@example.com",
        password: "jack1234",
        photo: "https://randomuser.me/api/portraits/men/18.jpg",
        country: "Australia"
    },
    {
        firstName: "Linh",
        lastName: "Tran",
        email: "tran@example.com",
        password: "Tran1234",
        photo: "https://randomuser.me/api/portraits/women/58.jpg",
        country: "Vietnam"
    },
    {
        firstName: "Thando",
        lastName: "Mokoena",
        email: "mokoena@example.com",
        password: "Mokoena1234",
        photo: "https://randomuser.me/api/portraits/men/19.jpg",
        country: "Vietnam"
    },
    {
        firstName: "Layla",
        lastName: "Haddad",
        email: "haddad@example.com",
        password: "Haddad1234",
        photo: "https://randomuser.me/api/portraits/women/23.jpg",
        country: "Jordan"
    },
    {
        firstName: "Anastasia",
        lastName: "Volkova",
        email: "volkova@example.com",
        password: "Volkova1234",
        photo: "https://randomuser.me/api/portraits/women/15.jpg",
        country: "Russia"
    },
]

User.insertMany(Users)
