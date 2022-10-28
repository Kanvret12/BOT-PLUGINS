import { search } from 'googlethis'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Input Query' 
	let res = await search(text, { safe: false }),
		img = res.results[0]?.favicons?.high_res,
		txt = res.results.map((v) => `*${v.title}*\n_${v.url}_\n_${v.description}_`).join`\n\n`
	if (!txt.length) throw 'Not Found :/'
	//if (img) return conn.sendMessage(m.chat, { image: { url: img }, caption: txt }, { quoted: m })
	m.reply(txt)
}
handler.help = handler.alias = ['google']
handler.tags = ['tools']
handler.command = /^google$/i

export default handler
