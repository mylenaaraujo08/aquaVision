import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comparar-datas',
  templateUrl: './comparar-datas.page.html',
  styleUrls: ['./comparar-datas.page.scss'],
})
export class CompararDatasPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToPage(a: string):void{
    this.router.navigate([a]);
  };

  ngOnInit() {
  }

}
