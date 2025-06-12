import { Telegraf, Markup } from 'telegraf'

const token = '7815324525:AAGQfSwg0tdH0zWTFIZCLmVZPYFhgjhbHd4'
const webAppUrl = 'https://192.168.1.213:8080'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать, нажмите на кнопку ниже чтобы запустить приложение',
        Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl)])
    )
})

bot.launch()