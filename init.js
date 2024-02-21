const mongoose = require('mongoose');
const Chat = require("./models/chat");

main().then(() =>{
    console.log("connection successful");
})  
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Chit surela",
        to: "Jay thakur",
        msg: "Bhai kal tuu college aa raha haa kaya",
        created_at: new Date()
    },
    {
        from: "Shristi karn",
        to: "Vishwa patel",
        msg: "Mereko android programming ka notes send kar na ",
        created_at: new Date()
    },
    {
        from: "Ankit kumar",
        to: "Harsh dubey",
        msg: "Ajj milte haa sabhu-sang ke ground pe",
        created_at: new Date()
    },
    {
        from: "Aman rathod",
        to: "Astha rathod",
        msg: "Jaldi aao college mam aa gayi haa",
        created_at: new Date()
    },
    {
        from: "Afzal malik",
        to: "Amin balem",
        msg: "Bhai kal me college nahi aauga kuch important kam haa",
        created_at: new Date()
    },
];


Chat.insertMany(allChats);

