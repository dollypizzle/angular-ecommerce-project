import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  currentProduct: { name: string; description: string; image: string; brand: string; price: number; _id: string; };

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id: string): void {
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.currentProduct = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateProduct(): void {
    const data = {
      name: this.currentProduct.name,
      description: this.currentProduct.description,
      image: this.currentProduct.image,
      brand: this.currentProduct.brand,
      price: this.currentProduct.price,
    };
    this.productService.updateProduct(this.currentProduct._id, data).subscribe(
      (response) => {
        this.router.navigate([`/products/${this.currentProduct._id}`]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
