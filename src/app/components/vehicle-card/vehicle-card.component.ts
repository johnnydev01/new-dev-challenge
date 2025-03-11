import { Component, Input } from '@angular/core';
import { Data } from '../../interfaces/category';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss'
})
export class VehicleCardComponent {
  @Input() data!: Data[];

  public title = "Vehicles"
  public subtitle = "veículo";
}
