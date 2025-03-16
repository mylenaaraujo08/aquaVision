import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-ponto',
  templateUrl: './novo-ponto.page.html',
  styleUrls: ['./novo-ponto.page.scss'],
})
export class NovoPontoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToPage(a:string):void{
    this.router.navigate([a])
  }

  ngOnInit() {
  }

}
