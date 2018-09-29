import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
        { id: 1, name: 'Приемы объектно-ориентированного проектирования. Паттерны проектирования' },
        { id: 2, name: 'Совершенный код. Мастер-класс' },
        { id: 3, name: 'Git для профессионального программиста' },
        { id: 4, name: 'Теоретический минимум по Computer Science. Все что нужно программисту и разработчику' },
        { id: 5, name: 'Предметно-ориентированное проектирование. Паттерны, принципы и методы' },
        { id: 6, name: 'Предметно-ориентированное проектирование (DDD). Структуризация сложных программных систем' },
        { id: 7, name: 'Объектно-ориентированный анализ и проектирование' },
        { id: 8, name: 'Большие данные. Принципы и практика построения масштабируемых систем обработки данных в реальном времени' },
        { id: 9, name: 'Continuous delivery. Практика непрерывных апдейтов' },
        { id: 10, name: 'Android. Программирование для профессионалов' },
        { id: 11, name: 'Реализация методов предметно-ориентированного проектирования' }
    ];
    return {books};
  }

  // Overrides the genId method to ensure that a book always has an id.
  // If the books array is empty,
  // the method below returns the initial number (11).
  // if the books array is not empty, the method below returns the highest
  // book id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
