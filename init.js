const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

  let Chats = [
    {
      from: "Ahmed",
      to: "Baseer",
      msg: "I will send it after class",
      created_at: new Date()
    },
    {
      from: "Ali",
      to: "Sara",
      msg: "Are you coming to college today?",
      created_at: new Date()
    },
    {
      from: "Sara",
      to: "Ali",
      msg: "Yes, I’ll be there in 10 minutes",
      created_at: new Date()
    },
    {
      from: "Hassan",
      to: "Usman",
      msg: "Did you complete the assignment?",
      created_at: new Date()
    },
    {
      from: "Usman",
      to: "Hassan",
      msg: "Not yet, I’m working on it",
      created_at: new Date()
    }
  ];

  await Chat.insertMany(Chats);

  console.log("Data inserted");

  mongoose.connection.close();
}

main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));