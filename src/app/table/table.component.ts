import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  singleMessage = '';
  appData = [];

  constructor() { }

  ngOnInit() {
  }

  onClickAddMessage() {
    if (this.singleMessage === '') {
      return;
    }
    this.appData.push({
        uuid: uuid(),
        message: this.singleMessage,
        likes: 0
      });
    this.singleMessage = '';
  }
  addRemoveLikes(uUid, like) {
    this.appData.forEach(data => {
      if (data.uuid !== uUid) {
        return;
      }
      data.likes = 1;
      if (like !== 0) {
        data.likes = 0;
      }
    });
  }
}
