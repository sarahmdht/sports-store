import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  classprice: string = "text-success";

  products = [
    {
      id: 1,
      title: "volleyball",
      price: 350,
      photo: "../../assets/images/ball.jpg"
    },
    {
      id: 2,
      title: "Knee pad",
      price: 200,
      photo: "../../assets/images/knee.jpg"
    },
    {
      id: 3,
      title: "football",
      price: 250,
      photo: "../../assets/images/football-ball.jpg"
    },
    {
      id: 4,
      title: "sneakers",
      price: 700,
      photo: "../../assets/images/sneakers.jpg"
    },
    {
      id: 5,
      title: "football shoes",
      price: 1000,
      photo: "../../assets/images/football-sneakers.jpg"
    },
    {
      id: 6,
      title: "bottle",
      price: 500,
      photo: "../../assets/images/bottle.jpg"
    }
  ]
}
