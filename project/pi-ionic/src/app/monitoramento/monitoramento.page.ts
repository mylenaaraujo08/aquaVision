import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.page.html',
  styleUrls: ['./monitoramento.page.scss'],
})
export class MonitoramentoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToPage(a:string):void{
    this.router.navigate([a]);
  }

  ngOnInit() {
  }

}
