import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  currentProduct;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id): void {
    this.productService.get(id)
      .subscribe(
        data => {
          this.currentProduct = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateProduct(): void {
    const data = {
      name: this.currentProduct.name,
      description: this.currentProduct.description,
      image: this.currentProduct.image,
      brand: this.currentProduct.brand,
      price: this.currentProduct.price,

    };
    this.productService.update(this.currentProduct._id, data)
      .subscribe(
        response => {
          this.router.navigate([`/products/${this.currentProduct._id}`]);
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
