import { Component, Input } from '@angular/core';
import { Data } from '../../interfaces/category';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-starship-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './starship-card.component.html',
  styleUrl: './starship-card.component.scss'
})
export class StarshipCardComponent {
  @Input() data!: Data[];

  public title = "Starships"
  public subtitle = "nave espacial";
}
