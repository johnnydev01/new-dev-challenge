import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { Data } from '../../interfaces/category';

@Component({
  selector: 'app-people-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './people-card.component.html',
  styleUrl: './people-card.component.scss'
})
export class PeopleCardComponent {

  @Input() data!: Data[];

  public title = "People"
  public subtitle = "personagem";

}
