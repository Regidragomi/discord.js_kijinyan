// discord.js モジュールのインポート
const { Intents, Client } = require("discord.js");

// Discord Clientのインスタンス作成
const options = {
    intents: ["GUILDS", "GUILD_MESSAGES"],
 };
 const client = new Client(options);

// トークンの用意
const token = 'OTU5MTQxNDAxNTA4MDczNTEz.YkXkCg.qUCP_Re5Ej1OZHjr8LAoDj-1wBg';

// 起動するとconsoleにready...と表示される
client.on('ready', () => {
    console.log('ready...');
});

client.on('message', message => {
    if(message.author.bot) return; //BOTのメッセージには反応しない

    if(message.content === "キジニャン"){ //送られたメッセージが●●だったら
        message.channel.send("キジジ！") 
        //メッセージが送られたチャンネルに ●●と送信する
    } else if(message.content.match("5億")){
        message.channel.send("買える！") 
    }
});

// Discordへの接続
client.login(token);