import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-sensor',
  templateUrl: './cadastro-sensor.page.html',
  styleUrls: ['./cadastro-sensor.page.scss'],
})
export class CadastroSensorPage implements OnInit {

  constructor(
    private router:Router
  ) { }

  goToPage(a: string):void{
    this.router.navigate([a])
  }

  ngOnInit() {
  }

}
