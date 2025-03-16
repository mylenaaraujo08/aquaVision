import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToPage(a: string):void{
    this.router.navigate([a]);
  };

  ngOnInit() {
  }

}
