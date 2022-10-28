let require = global.__require(import.meta.url)
let { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi('csrftoken=aoi8Qy0aRdxMTpTvMZ6gpvnKYsu7DjXm; rur=EAG; mid=Yr4AaAALAAHKohvrU-WI6fSSXDyo; ds_user_id=52950990750; sessionid=52950990750%3ADjBTypSk2ft88Q%3A27%3AAYeqbpookGuZerWXm5LAXK4fqkd57BPe5P_JX1Mu1w; ig_did=BCBB70B6-9B2C-4EF6-9A6C-2FD99B7EF601');
let handler = async (m, { conn, text }) => {
if (!text) throw 'Input username'
ig.fetchUserV2(text)
.then(async (user) => {
await conn.sendFile(m.chat, user.profile_pic_url_hd, 'anu.jpg', `✅ *Sukses Get Porfil Instagram*\nUsername : ${user.username}\nFull Name : ${user.full_name}\nFollowing : ${(user.edge_follow.count)}\nFollowers : ${(user.edge_followed_by.count)}\nLink Profile : https://instagram.com/${user.username}\n${user.biography}\nBusiness : ${user.is_business_account ? '✅' : '❌'}\nVerified : ${user.is_verified ? '✅' : '❌'}`, m)})
.catch(e => 
m.reply('User Tidak Di Temukan Pantek :)')
)
}
handler.help = ['igstalk']
handler.tags = ['instagram']
handler.command = /^(igstalk|stalkig)$/i

export default handler