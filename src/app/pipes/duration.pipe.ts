import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    if (!value || !value.time_start || !value.time_end) {
      return '';
    }

    const timeStart = value.time_start;
    const timeEnd = value.time_end;

    // Логика расчета продолжительности
    const [startHours, startMinutes] = timeStart.split(':').map(Number);
    const [endHours, endMinutes] = timeEnd.split(':').map(Number);
    
    // Создаём объекты Date для сравнения
    const startDate = new Date();
    startDate.setHours(startHours, startMinutes, 0);
    
    const endDate = new Date();
    endDate.setHours(endHours, endMinutes, 0);
    
    // Если конечное время меньше начального, считаем, что это следующий день
    if (endDate < startDate) {
      endDate.setDate(endDate.getDate() + 1);
    }
    
    // Вычисляем разницу в миллисекундах
    const diffMs = endDate.getTime() - startDate.getTime();
    
    // Переводим в часы и минуты
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    // Форматируем результат
    if (diffHours > 0 && diffMinutes > 0) {
      return `${diffHours} ч. ${diffMinutes} мин.`;
    } else if (diffHours > 0) {
      return `${diffHours} ч.`;
    } else {
      return `${diffMinutes} мин.`;
    }
  }
}