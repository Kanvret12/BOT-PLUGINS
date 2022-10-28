import speedtest from 'speedtest-net'
import { sizeFormatter } from 'human-readable'
import cp from 'child_process'
import { promisify } from 'util'
const formatSize = sizeFormatter({
	std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B/s`
})

export default async function handler(m, exec) {
	 m.reply('Testing Speed...')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
}
handler.alias = ['ping', 'speed', 'speedtest']
handler.command = /^ping|speed(test)?$/i
