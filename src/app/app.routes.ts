import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailComponent } from './components/people-detail/people-detail.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { FilmComponent } from './components/film/film.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { SpeciesComponent } from './components/species/species.component';
import { SpeciesDetailComponent } from './components/species-detail/species-detail.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';

type PathMatch = "full" | "prefix" | undefined;


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'people',
    pathMatch: 'full' as PathMatch,
  },
  {
    path: 'people',
    component: PeopleComponent,
    title: 'People'
  },
  {
    path: 'people-detail',
    component: PeopleDetailComponent,
  },

  {
    path: 'planets',
    component: PlanetComponent,
    title: 'Planets'
  },
  {
    path: 'planet-detail',
    component: PlanetDetailComponent,
  },
  {
    path: 'films',
    component: FilmComponent,
    title: 'Films'
  },
  {
    path: 'film-detail',
    component: FilmDetailComponent,
  },
  {
    path: 'species',
    component: SpeciesComponent,
    title: 'Species'
  },
  {
    path: 'species-detail',
    component: SpeciesDetailComponent,
  },
  {
    path: 'vehicles',
    component: VehicleComponent,
    title: 'Vehicles'
  },
  {
    path: 'vehicle-detail',
    component: VehicleDetailComponent,
  },
  {
    path: 'starships',
    component: StarshipComponent,
    title: 'Starships'
  },
  {
    path: 'starship-detail',
    component: StarshipDetailComponent,
  }
];
