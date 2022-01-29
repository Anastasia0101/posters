import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      posters: [
        {
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi',
          description: 'quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamostrum rerum est autem sunt rem eveniet architecto',
          dateOfCreation: '20/10/20'
        },
        {
          id: 2,
          title: "qui est esse",
          description: "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla",
          dateOfCreation: '20/10/20'
        },
        {
          id: 3,
          title: "ea molestias quasi exercitationem repellat",
          description: "et iusto sed quo iurevoluptatem occaecati omnis eligendi",
          dateOfCreation: '20/10/20'
        },
        {
          id: 4,
          title: "eum et est occaecati",
          description: "ullam et saepe reiciendis voluptatem adipisci sit amet autem",
          dateOfCreation: '20/10/20'
        },
        {
          id: 5,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          description: "et iusto sed quo iurevoluptatem occaecati omnis eligendi",
          dateOfCreation: '20/10/20'
        },
        {
          id: 6,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          description: "et iusto sed quo iurevoluptatem occaecati omnis eligendi",
          dateOfCreation: '20/10/20'
        }
      ]
    };
  }
}
