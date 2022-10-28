import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw 'Input Query / Pinterest Url'
if(!text.includes("https://github.com")) throw "Masukkan link dengan benar!\n*Contoh:* /github https://github.com/Kanvret12/tes"
if(!text.split("/")[4]) return
try {
conn.sendMessage(m.chat, {document: {url: text + "/archive/refs/heads/main.zip"}, mimetype: 'application/zip', fileName: `${text}.zip`, contextInfo: {externalAdReply: {title: "Github Download", body: "ShielD-Bot", sourceUrl: text, mediaUrl: text, mediaType: 1, renderLargerThumbnail: true}}}, {quoted: m})
} catch(e) {
m.reply(String(e)) 
}
}
handler.help = ['github']
handler.tags = ['downloader']
handler.command = /^(github)$/

export default handler
