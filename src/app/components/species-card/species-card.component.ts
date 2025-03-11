import { Data } from './../../interfaces/category';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-species-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './species-card.component.html',
  styleUrl: './species-card.component.scss'
})
export class SpeciesCardComponent {
  @Input() data!: Data[];

  public title = "Species"
  public subtitle = "especie";
}
