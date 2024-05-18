import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GriddemoComponent } from './components/griddemo/griddemo.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, GriddemoComponent],
  providers: [ProductsService, HttpClientModule],
})
export class AppComponent implements OnInit {
  title = 'firstclass';

  constructor(private productsService: ProductsService) {
    console.log('app component');
  }

  ngOnInit(): void {
    console.log('app component init');
    console.log(this.productsService.alert());
  }
}
