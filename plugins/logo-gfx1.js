import bokep from 'knights-canvas'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Example use ${usedPrefix + command} minecraft`
let SPL = await new bokep.Gfx1()
.setName(text) 
    .toAttachment();
let data = SPL.toBuffer();
conn.sendFile(m.chat, data, 'gfx1.png', `
*hasil*
`.trim(), m)
}

handler.help = ['gfx1']
handler.tags = ['gfx']
handler.command = /^(gfx1)$/i
export default handler 