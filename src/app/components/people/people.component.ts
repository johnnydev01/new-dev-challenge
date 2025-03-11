import { Component, inject, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { PeopleData, Person } from '../../interfaces/person';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';

import { PeopleCardComponent } from '../people-card/people-card.component';


@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    AsyncPipe,
    PeopleCardComponent,
    LoadingComponent,

  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
})
export class PeopleComponent implements OnInit {

  private peopleService = inject(PeopleService);
  public people!: Person[]
  public peopleData =  Array<PeopleData>();


  ngOnInit() {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople()
    .subscribe({
      next: (people: Person[]) => {
        this.people = people;
        people.map((item) => {
          this.peopleData.push({
            name: item.name,
            url: item.url
          })
        })
      }
    })
  }



}
