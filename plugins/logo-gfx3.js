import bokep from 'knights-canvas'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example use ${usedPrefix + command} nganu|kau`
let [teks1, teks2] = text.split('|')
if (!teks2) throw `Example use ${usedPrefix + command} nganu|kau`
let SPL = await new bokep.Gfx3()
.setText1(teks1) 
.setText2(teks2)
 .toAttachment();
let data = SPL.toBuffer();
conn.sendFile(m.chat, data, 'gfx3.png', `*Done.....*`
.trim(), m)
}
handler.help = ['gfx3']
handler.tags = ['gfx']
handler.command = /^(gfx3)$/i
export default handler