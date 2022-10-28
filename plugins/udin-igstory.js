let require = global.__require(import.meta.url)
let { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi('csrftoken=aoi8Qy0aRdxMTpTvMZ6gpvnKYsu7DjXm; rur=EAG; mid=Yr4AaAALAAHKohvrU-WI6fSSXDyo; ds_user_id=52950990750; sessionid=52950990750%3ADjBTypSk2ft88Q%3A27%3AAYeqbpookGuZerWXm5LAXK4fqkd57BPe5P_JX1Mu1w; ig_did=BCBB70B6-9B2C-4EF6-9A6C-2FD99B7EF601');
const delay = time => new Promise(res => setTimeout(res, time))
let handler = async (m, { conn, text }) => {
if (!text) throw 'Input username'
ig.fetchStories(text)
.then(async (v) => {
let txt = `_*UserName:*_ ${v.username}\n*_Jumlah Story:_* ${v.stories_count}`
for (let i of v.stories) {
await delay(2000)
conn.sendFile(m.chat, i.url, null, txt, m)
}}).catch(e => m.reply('Story Tidak Di Temukan Pantek :)'))
}
handler.help = ['igstory']
handler.tags = ['instagram']
handler.command = /^(igstory)$/i
export default handler