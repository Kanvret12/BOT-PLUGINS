import bokep from 'knights-canvas'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example use ${usedPrefix + command} minecraft`
let SPL = await new bokep.Gfx2()
.setName(text) 
    .toAttachment();
let data = SPL.toBuffer();
conn.sendFile(m.chat, data, 'gfx2.png', `*Done.....*`
.trim(), m)
}

handler.help = ['gfx2']
handler.tags = ['gfx']
handler.command = /^(gfx2)$/i
export default handler