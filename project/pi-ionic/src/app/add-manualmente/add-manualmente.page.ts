import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-manualmente',
  templateUrl: './add-manualmente.page.html',
  styleUrls: ['./add-manualmente.page.scss'],
})
export class AddManualmentePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToPage(a: string):void{
    this.router.navigate([a])
  }

  ngOnInit() {
  }

}
