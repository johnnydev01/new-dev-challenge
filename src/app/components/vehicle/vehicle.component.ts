import { Component, inject } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { Data } from '../../interfaces/category';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [
    AsyncPipe,
    VehicleCardComponent,
    LoadingComponent,
  ],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export class VehicleComponent {

  private vehiclesService = inject(VehicleService);
  public vehicles!: Vehicle[]
  public vehicleData =  Array<Data>();

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.vehiclesService.getVehicles()
    .subscribe({
      next: (vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
        vehicles.map((item) => {
          this.vehicleData.push({
            name: item.name,
            url: item.url
          })
        })
      }
    })
  }
}
