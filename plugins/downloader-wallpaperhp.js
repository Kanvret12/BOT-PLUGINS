import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
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
    let Array = []
    $("div.thumb-element").each((i, el) => {
        Array.push($(el).find("div.thumb-element > a > img ").attr("src").replace('thumb-',''))
    })
    if (!text) throw 'Input Query / Pinterest Url'
    let bruh = Array.getRandom()
    conn.sendMessage(m.chat, {image:{ url: bruh}, caption: `Pencarian ${text}`}, {quoted: m})
}).catch(reject)
})
}
handler.help = ['wallpaperhp']
handler.tags = ['downloader']
handler.alias = ['wallpaperhp']
handler.command = /^(wallpaperhp)$/i

export default handler
