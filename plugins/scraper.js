import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'

async function sekaikomikDl(url) {
	let res = await fetch(url)
	let $ = cheerio.load(await res.text())
	let data = $('script').map((idx, el) => $(el).html()).toArray()
	data = data.filter(v => /wp-content/i.test(v))
	data = eval(data[0].split('"images":')[1].split('}],')[0])
	return data.map(v => encodeURI(v))
}
async function wallpaperhp(text) {
return new Promise((resolve, reject) => {
axios ({
    methode: "GET",
    url: `https://mobile.alphacoders.com/by-device/573/iPhone-XR-Wallpapers?search=${text}`,
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36",
        "XSRF-TOKEN":"eyJpdiI6IllkSnFwSmFtT1MwV3pRQ3ZWN0NpRUE9PSIsInZhbHVlIjoiTXljUDBGZjd1OUk0RlFpRm9MVFVxd3lQdVg4SDg4WG03VVNyRE9vd2doN1hCZ2JPNldVVndlME1oaVk4XC9PNVUiLCJtYWMiOiJjZGM2YmMxYWYwOWU3YTM4YTA1MDEwZDNiNGYzZWMwMTBiNTRjNjI3YTE2MThjMGZmMTBjYjJiZDEzYWY0ZTdkIn0%3D"
    }
}).then(res => {
    const $ = cheerio.load(res.data);
    let Array = [];
    $("div.thumb-element").each((i, el) => {
        Array.push($(el).find("div.thumb-element > a > img ").attr("src").replace('thumb-',''))
    })
bruh = Array[Math.floor(Math.random() * Array.length)]
    resolve(bruh)
}).catch(reject)
})
}
async function facebookDl(url) {
	let res = await fetch('https://fdownloader.net/')
	let $ = cheerio.load(await res.text())
	let token = $('input[name="__RequestVerificationToken"]').attr('value')
	let json = await (await fetch('https://fdownloader.net/api/ajaxSearch', {
		method: 'post',
		headers: {
			cookie: res.headers.get('set-cookie'),
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			referer: 'https://fdownloader.net/'
		},
		body: new URLSearchParams(Object.entries({ __RequestVerificationToken: token, q: url }))
	})).json()
	let $$ = cheerio.load(json.data)
	let result = {}
	$$('.button.is-success.is-small.download-link-fb').each(function () {
		let quality = $$(this).attr('title').split(' ')[1]
		let link = $$(this).attr('href')
		if (link) result[quality] = link
	})
	return result
}

export {
	wallpaperhp,
	sekaikomikDl,
	facebookDl
}

