import bokep from 'knights-canvas'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example use ${usedPrefix + command} nganu`
let SPL = await new bokep.Gura()
.setName(text) 
.toAttachment();
let data = SPL.toBuffer();
conn.sendFile(m.chat, data, 'gura.png', `*Done.....*`
.trim(), m)
}
handler.help = ['gura']
handler.tags = ['gfx']
handler.command = /^(gura)$/i
export default handler