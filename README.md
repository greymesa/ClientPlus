# ClientPlus

Extended discord.js client for advanced use.

ClientPlus can do what a normal discord.js client can, and more!

Documentation coming soon

```javascript
 const Discord = require("discord.js")
 const ClientPlus = require("clientplus")

 const client = new ClientPlus()

 client.on("ready", () => {
     console.log("Bot is online using ClientPlus!")
 });

 client.on("message", (message) => {
     if(message.content === "ping") {
         message.reply("Pong!")
     } else if(message.content === "multikick") {
         //Use of ClientPlus's multiKick
         let members = message.guild.members.cache.array()
         client.multiKick(members)
         message.channel.send("Done!")
     }
 });

 client.login(token)
```