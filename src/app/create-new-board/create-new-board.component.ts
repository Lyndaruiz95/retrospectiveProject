import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-board',
  templateUrl: './create-new-board.component.html',
  styleUrls: ['./create-new-board.component.scss']
})
export class CreateNewBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  onclick() {
    console.log('clicked')

  }

}
