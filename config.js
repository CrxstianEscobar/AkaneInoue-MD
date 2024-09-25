import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
   ['51927238856', 'Owner 🌙', true],
   ['51965911060', 'Akane Inoue', true],
]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = 'ㅤㅤㅤㅤ👑\nㅤ  𝐀𝐤𝐚𝐧𝐞 𝐈𝐧𝐨𝐮𝐞\nㅤㅤ      𝐁𝐨𝐭\n\n✯᭄ 𝑩𝒚 𝑪𝒓𝒙𝒔𝒕𝒊𝒂𝒏 \n｡･ﾟ♡ﾟ｡･ﾟ･𝑬𝒔𝒄𝒐𝒃𝒂𝒓\n\n-•°○ ⊹ ִ ᣞ 🌙  ֺ   ֢֢ ｡ﾟ･'
global.botname = 'Akane Inoue - MD'
global.wm = 'Akane Inoue - MD'
global.author = '╭╼• ⏤͟͟͞͞ƁɑлɢLɪɢʜᴛs\n┃\n┃ » 𝖨𝗇𝗌𝗍𝖺𝗀𝗋𝖺𝗆\n┃ @usxr.crxxs\n┃\n┃ » 𝖦𝗂𝗍𝖧𝗎𝖻:\n┃ CrxstianEscobar\n┃\n╰────╼ • ◆ • ╾────╯'
global.dev = 'Akane Inoue - MD'
global.textbot = 'Akane Bot : Cristian Escobar'
global.vs = '1.1.3'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.imagen1 = fs.readFileSync('./Menu.jpg')
global.fantasyVid = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')
global.welcome = fs.readFileSync('./media/welcome.jpg')
global.adios = fs.readFileSync('./media/adios.jpg')
global.catalogo = fs.readFileSync('./storage/img/catalogo1.jpg')
global.ianurl = fs.readFileSync('./storage/img/crowurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.grupo = 'https://chat.whatsapp.com/IEpwMOFY9d7IFbnxu4VnFo'
global.grupo2 = 'https://chat.whatsapp.com/IEpwMOFY9d7IFbnxu4VnFo'
global.grupo3 = 'https://chat.whatsapp.com/IEpwMOFY9d7IFbnxu4VnFo'
global.channel = 'https://whatsapp.com/channel/0029Vafxnat8qIzxOjUrwP41'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "543876577197-120363317332020195@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '𝗧𝗵𝗲𝗖𝗿𝗼𝘄𝗕𝗼𝘁 💛', orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment        

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
