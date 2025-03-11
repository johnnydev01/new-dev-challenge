import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CategoryService, Root } from '../../services/category.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    CommonModule,
    RouterLink,
    AsyncPipe,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  private categoryService = inject(CategoryService);

  resources$!: Observable<Root[]>;


  ngOnInit(): void {
    this.resources$ = this.categoryService.getRoot();
  }

}
