import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GriddemoComponent } from './components/griddemo/griddemo.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { StatusMessageService } from './common/status-message.service';
import { PrimeConfigModule } from './config/primeconfig.module';
import { MenuItem, MessageService } from 'primeng/api';
import { Product } from './common/helper';
import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    GriddemoComponent,
    PrimeConfigModule,
    NgClass,
    NgIf,
    NgFor,
    NgForOf,
  ],
  providers: [
    ProductsService,
    HttpClientModule,
    StatusMessageService,
    MessageService,
  ],
})
export class AppComponent implements OnInit {
  title = 'firstclass';

  products!: Product[];
  isReadMore: boolean = true;

  items: MenuItem[] | undefined;

  bredcrumbItems: MenuItem[] | undefined;

  home: MenuItem | undefined;

  constructor(
    private productsService: ProductsService,
    private statusMessage: StatusMessageService,
    private messageService: MessageService
  ) {
    console.log('app component');
  }

  ngOnInit(): void {
    console.log('app component init');
    this.loadMenu();
    this.loadBreadcrumb();
    this.productsService.products().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error: HttpErrorResponse) => {
        // alert(this.statusMessage.getStatusMessage(error.status));
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: this.statusMessage.getStatusMessage(error.status),
          life: 3000,
        });
      },
    });
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  loadMenu() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U',
          },
          {
            separator: true,
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3',
      },
    ];
  }

  loadBreadcrumb() {
    this.bredcrumbItems = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
