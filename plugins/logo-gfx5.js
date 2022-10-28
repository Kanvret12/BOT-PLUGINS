import bokep from 'knights-canvas'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example use ${usedPrefix + command} nganu`
let SPL = await new bokep.Gfx5()
.setText(text) 
.toAttachment();
let data = SPL.toBuffer();
conn.sendFile(m.chat, data, 'gfx5.png', `*Done.....*`
.trim(), m)
}
handler.help = ['gfx5']
handler.tags = ['gfx']
handler.command = /^(gfx5)$/i
export default handler