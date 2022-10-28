let handler = async (m) => {
	let emojis = ["🍏","🍎","🍊","🍋","🍑","🪙","🍅","🍐","🍒","🥥","🍌"]
	let a = ~~(Math.random() * emojis.length),
		b = ~~(Math.random() * emojis.length),
		c = ~~(Math.random() * emojis.length)
	let x = [], y = [], z = []
	for (let i = 0; i < 3; i++) {
		x[i] = emojis[a]
		a++
		if (a == emojis.length) a = 0
	}
	for (let i = 0; i < 3; i++) {
		y[i] = emojis[b]
		b++
		if (b == emojis.length) b = 0
	}
	for (let i = 0; i < 3; i++) {
		z[i] = emojis[c]
		c++
		if (c == emojis.length) c = 0
	}
	let end, gcha
	if (a == b && b == c) {
		end = "_*JACKPOT*_"
		gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`
		m.reply(`*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`)
	} else if (a == b || a == c || b == c) {
		end = "_*YOU WIN*_"
		gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`
		m.reply(`*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`)
	} else {
		end = "_*YOU LOSE*_"
		gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${x[2]} | ${y[2]} | ${z[2]}`
		m.reply(`*[ 🎰 VIRTUAL SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`)
	}
}
handler.command = /^(slot)$/i
handler.rowner = true

export default handler
