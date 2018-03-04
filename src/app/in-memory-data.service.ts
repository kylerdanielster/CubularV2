import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cards = [
        {id: 11, name: 'One'},
        {id: 12, name: 'two'},
        {id: 13, name: 'three'},
        {id: 14, name: 'four'},
        {id: 15, name: 'five'},
        {id: 16, name: 'six'},
        {id: 17, name: 'seven'},
        {id: 18, name: 'eight'},
        {id: 19, name: 'nine'}
    ];
    return {cards};
  }
}
