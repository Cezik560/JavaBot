const { token, prefix} = require("./botconfig.json");
const { Client, MessageEmbed, ClientApplication, Message, Discord, embedMessage } = require("discord.js")
var nazwabota = "JAVAbot"
const botAuthor = "Cezik"
const client = new Client({disableEveryone: true})
client.on("ready", async () => {
    console.log(`Uruchomiono ${client.user.tag}!`);
    client.user.setActivity("© Cezik 2020")
});

client.on("message", (msg) => {
    const {author, guild, channel} = msg

if (author.Client || !guild){
    return
}
    // sprawdzam prefix
if (msg.content.indexOf(prefix) !== 0) return

const args = msg.content
.slice(prefix.length)
.trim()
.split(/ +/g)
    const cmd = args.shift().toLowerCase()

if ( cmd === "spam") {
    const text = msg.content.slice(prefix.length + cmd.length).trim() 
    msg.delete()
    for (let I =0; I < 10; I++) {
    channel.send(text).then(async msg =>
     msg.delete({timeout: 2500 }))
     }}
        
        if (cmd === "info") {
        msg.delete()
            const text = msg.content.slice(prefix.length + cmd.length).trim()
            const exampleEmbed = new MessageEmbed()
            .setColor('#610003')
            .setTitle('**Ogłoszenie**')
            .setAuthor( `${msg.author.username}`, `${msg.author.displayAvatarURL()}`)
            .setDescription(`-----------------------------------------------------------------------------------------------
            
            ` + text +`
        
            -----------------------------------------------------------------------------------------------`)
            .setTimestamp()
            .setFooter('© Cezik 2020', `https://f0.pngfuel.com/png/408/238/purple-robot-logo-png-clip-art.png`)
        channel.send(exampleEmbed).then(async msg => {
        msg.react('✅');})
        channel.send("@everyone").then(async msg => {
        msg.delete()
        })}

        if (cmd === "vote") {
            msg.delete()
                const text = msg.content.slice(prefix.length + cmd.length).trim()
                const voteEmbed = new MessageEmbed()
                .setColor('#610003')
                .setTitle('**Głosowanie**')
                .setAuthor( `${msg.author.username}`, `${msg.author.displayAvatarURL()}`)
                .setDescription(`-----------------------------------------------------------------------------------------------
                
                ` + text +`
            
                -----------------------------------------------------------------------------------------------`)
                .setTimestamp()
                .setFooter('© Cezik 2020', `https://f0.pngfuel.com/png/408/238/purple-robot-logo-png-clip-art.png`)
            channel.send(voteEmbed).then(async msg => {
                msg.react(`✅`);
                msg.react('❌');})
            channel.send("@everyone").then(async msg => {
            msg.delete()
            })}
});

client.login(token)