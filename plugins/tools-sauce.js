import { search } from 'googlethis'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
	let q = m.quoted ? m.quoted : m,
		mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime)) {
		let url = await webp2png(await q.download()),
			res = (await search(url, { safe: false, ris: true })).results,
			img = await conn.getFile(res[0]?.favicons?.high_res).catch(() => null),
			txt = res.map((v) => `*${v.title}*\n_${v.url}_\n_${v.description}_`).join`\n\n`
		if (!res.length) throw 'Not Found :/'
		if (img) return conn.sendHydrated(m.chat, txt.trim(), null, img.data, res[0].url, 'Source', null, null, [])
		else m.reply(txt.trim())
	} else throw `Send/reply an image with command ${usedPrefix + command}`
}
handler.help = ['sauce']
handler.tags = ['tools']
handler.command = /^(sauce)$/i

export default handler
