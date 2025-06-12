import { Injectable } from '@angular/core';
import { Telegram } from 'telegraf';

declare global {
  interface Window {
    Telegram: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private telegramApp: any;

  constructor() {
    if (window.Telegram) {
      this.telegramApp = window.Telegram.WebApp;
      this.telegramApp.ready();
      this.telegramApp.MainButton.color = '#2481cc';
    }
   }

   getUserName(): string {
    if (this.telegramApp && this.telegramApp.initDataUnsafe?.user) {
      return this.telegramApp.initDataUnsafe.user.first_name || '';
    }
    return '';
  }

  sendDataToBot(data: any): void {
    if (this.telegramApp) {
      this.telegramApp.sendData(JSON.stringify(data))
    }
  }
}

