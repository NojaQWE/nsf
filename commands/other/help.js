const Discord = require("discord.js"),
disbut = require("discord-buttons");

exports.run = async (client, message, args) => {
    var help = new Discord.MessageEmbed()    
    .setAuthor(' Zyronx Yardım Menüsü ')
    .setDescription(`Prefix : ${client.config.prefix} \n NSFW(+18) Komutlar :`)
    .addField('NSFW  :underage: :', '`4k`, `anal`, `ass`, `boobs`, `hanal`, `hass`, `hboobs`, `hentai`, `hkitsune`, `hmidriff`, `hneko`, `holo`, `kemonomimi`, `neko`, `pgif`, `pussy` `yaoi`')
    message.delete();
    
    

    message.channel.send(help)
};

exports.help = {
  name: "nsfw",
  description: "+18 komutlar.",
  usage: "%nsfw",
  example: "nsfw help", 
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["nsfw", "help", "yardım"],
  permLevel: `Yetki gerekmiyor.` 
};