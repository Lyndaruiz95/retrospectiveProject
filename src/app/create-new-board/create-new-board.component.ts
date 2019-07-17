import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../retroboard/retroboard.component'

@Component({
  selector: 'app-create-new-board',
  templateUrl: './create-new-board.component.html',
  styleUrls: ['./create-new-board.component.scss']
})
export class CreateNewBoardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  navigateTo(location, params = {}) {
    console.log('clicked')
    console.log('window', window)
    console.log('this.router',this.router)
    this.router.navigate([location], params);

  }

}
