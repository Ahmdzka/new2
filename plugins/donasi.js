let handler = async m => m.reply(`
            .✵.GRUP SENOBOT.✵.

            https://chat.whatsapp.com/JUJCquZdFHT2n1MFBPfT
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
