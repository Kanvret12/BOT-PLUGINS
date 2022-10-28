import cl from 'caliph-api'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, text, isUrl,usedPrefix, command }) => {
    if(!text) throw 'Url Invalid'
    let d = await cl.downloader.tiktok(`${args}`)
    let t = await fetch(d.nowm)
    conn.sendMessage(m.chat, {
        video: t,
        mimetype: 'video/mp4',
        fileName: `${command}.mp4`,
        caption: `Success`
    }, {quoted:m})
}
handler.help = handler.alias = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

export default handler