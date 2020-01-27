// Fake bot Created By DarkBoy

// Codes Credits
// > Another Project For Dmall
//Login Bot
const Discord = require("discord.js");
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
const path = require('path');const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

let dispatcher;
const snekfetch = require("snekfetch");
const yt = require("ytdl-core");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Modo is Successfully enabled");

  client.user.setActivity(`$help | $invite | Your Bot v3.0`, {
    type: "PLAYING"
  });
});
client.on("guildCreate", guild => {
    let guildchannel = guild.channels;
    let channelID;
    Loop: for (let c of guildchannel) {
      let channelequals = c[1].type;
      if (channelequals === "text") {
        channelID = c[0];
        break Loop;
      }
    }
 let channel = client.channels.get(guild.systemChannelID || channelID);

    let welcinfo = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setTitle("Dmall Bot On!")
      .addField("My Prefix", "$", true)
      .setFooter("To Check Bot Commands? `$help`");
    channel.send(welcinfo);
});
  client.on("message", msg => {
    if (msg.content === "$help") {
      const test = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Your Bot v3.0")
        .setDescription("***Commands***\n$dmall **usage**: $dmall Hello Join My Cool Server\n$invite\n$help")
        .setTimestamp()
        .setFooter("***Your Bot v3.0***");
      msg.channel.send(test);
    }
  });
client.on("message", msg => {
    if (msg.content === "$invite") {
      const test2 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("invite Your Bot v3,0")
        .setDescription("invite Me today")
        .addField("*Growing Youre Server Fast Today*","[click to invite](https://discordapp.com/oauth2/authorize?client_id=671355919250227211&permissions=8&scope=bot)")
        .setTimestamp()
        .setFooter("***Your Bot v3,0***");
      msg.channel.send(test2);
    }
 client.on ('message', async message => {
    var prefix = "$",
    command = message.content.slice (prefix.length).split (" ")[0],
    text = message.content.split (" ").slice (1).join (" ");
    if (!message.content.startsWith (prefix) || !message.guild || message.author.bot || !message.member.hasPermission ("ADMINISTRATOR") || !message.guild.me.hasPermission ("ADMINISTRATOR")) return undefined;
    else if (!text) return message.channel.send ("Example\n" + `> ${prefix}dmall <message to 10k users>`)
    else {
      switch (command) {
        case "broadcast":
        var awaited = await message.channel.send ("Type Number\n 1 - All\n2 - Online Only\n3 - Specific role");
        message.channel.awaitMessages (m => m.author.id == message.author.id, { max: 1 , time: 15000, errors: ['time']}).then (async collected => {
          var type = collected.first ().content;
          switch (type) {
            case "1":
            await message.guild.fetchMembers ();
            var members = message.guild.members;
            break;
            case "2":
            await message.guild.fetchMembers ();
            var members = message.guild.members.filter (m => m.user.presence.status != "offline");
            break;
            case "3":
            collected.first ().delete ();
            awaited.edit ("role id or mention");
            message.channel.awaitMessages (m => m.author.id == message.author.id, { max: 1 , time: 10000, errors: ['time']}).then (collected => {
              var role = collected.first ().mentions.roles.first () || message.guild.roles.get (collected.first ().content);
              if (!role) return awaited.edit ("i can't find this role");
              else var members = role.members;
              broadcast (message.channel, members, text);
            }).catch (e => {
              awaited.edit ("time gone.");
            });
            break;
            default:
            awaited.edit ("cancel, okay!");
          }
          if (type != "3") {
            broadcast (message.channel, members, text);
          }
          function broadcast (channel, members, text) {
            channel.send ("Done will be send");
            var counter = 0;
            members = members.array ();
            setInterval (() => {
              var member = members[counter];
              if (!member) return undefined;
              else member.send (text).then (okay => {
               
              }).catch (error => {
                return error;
              });
              counter++;
            }, 1500);
          }
        }).catch (err => {
          console.log (err);
          awaited.edit ("Time Out.");
        });
        break;
      }
    }
  });
});
client.on('message', msg => {
 if(msg.content === "!!bot") {
let embed24 = new Discord.RichEmbed()  
   .setThumbnail(client.user.avatarURL)
   .setColor("RANDOM")  
   .setTitle(`🤖**Information about**🤖 || ${client.user.tag}`, true)
   .addField("📜**Name + Tag**📜", client.user.tag, true)
   .addField("🤖**Bot Join Servers**🤖", client.guilds.size, true)
   .addField("👥**Sender**👥", msg.author.tag, true)
   .addField("🤖:id: *Bot ID** :id:🤖 ", client.user.id, true)
   .addField("🤖**User**🤖", client.users.size, true)
   .setFooter(`${msg.author.tag}`, `${msg.author.avatarURL}`, true)
msg.channel.sendEmbed(embed24)
}
 });
 
client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=642859262015700992&permissions=8&scope=bot')
  .setDescription(`**
  New Server Add Modo Bot ✅
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("671302218833461272").sendEmbed(embed)
});

client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=642859262015700992&permissions=8&scope=bot')
  .setDescription(`**
   Server kicked Modo Bot :cry:
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("671302324043644928").sendEmbed(embed)
});
client.login("NjcxMzU1OTE5MjUwMjI3MjEx.Xi71sg.SB71wmTyi7oWTFaQc1ms-Pal9Pk")
