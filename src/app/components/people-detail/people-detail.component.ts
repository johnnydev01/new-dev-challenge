import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';


import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

import { Person } from '../../interfaces/person';

@Component({
  selector: 'app-people-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink,
    MatIconModule

  ],
  templateUrl: './people-detail.component.html',
  styleUrl: './people-detail.component.scss'
})
export class PeopleDetailComponent implements OnInit {
  constructor(private location: Location) {}

  private categoryService = inject(CategoryService);

  resourceUrl!: string;
  public title = "Detalhes do Personagem"
  public person!: Person;
  ngOnInit(): void {
    this.resourceUrl = history.state.url;
    this.getResource();

  }

  getResource() {
    this.categoryService.getResource<Person>(this.resourceUrl)
    .subscribe({
      next: (data) => {
        this.person = data;
      }
    })
  }

  back() {
    this.location.back();
  }

}
