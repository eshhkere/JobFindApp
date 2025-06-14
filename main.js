import { Telegraf, Markup } from 'telegraf'

const token = '7815324525:AAGQfSwg0tdH0zWTFIZCLmVZPYFhgjhbHd4'
const webAppUrl = 'https://3633bb31a30e8e95f462c88d4d51fe32.serveo.net'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать, нажмите на кнопку ниже чтобы запустить приложение',
        Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl)])
    )
})

bot.launch()