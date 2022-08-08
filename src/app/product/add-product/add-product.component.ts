import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    name: '',
    image: '',
    brand: '',
    price: '',
    description: '',
  };
  submitted = false;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    const data = {
      name: this.product.name,
      image: this.product.image,
      brand: this.product.brand,
      price: this.product.price,
      description: this.product.description
    };

    this.productService.create(data)
      .subscribe(
        response => {
          this.router.navigate(['/products/all-products']);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      image: '',
      brand: '',
      price: '',
      description: '',
    };
  }


}
