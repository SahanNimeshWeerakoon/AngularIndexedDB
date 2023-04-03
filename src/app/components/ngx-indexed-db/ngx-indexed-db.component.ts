import { Component } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-ngx-indexed-db',
  templateUrl: './ngx-indexed-db.component.html',
  styleUrls: ['./ngx-indexed-db.component.scss']
})
export class NgxIndexedDbComponent {
  constructor(private dbService: NgxIndexedDBService) {}

  public key = "";
  public nameVal = "";
  public email = "";

  add() {
    this.dbService
      .add('people', {
        nameVal: this.nameVal,
        email: this.email
      })
      .subscribe(key => {
        console.log({ key });
        this.nameVal = "";
        this.email = "";
      });
  }
  get() {
    this.dbService
      .getAll('people')
      .subscribe(response => {
        console.log(response);
      })
  }
  update() {
    this.dbService
      .update('people', {
        id: parseInt(this.key),
        name: this.nameVal,
        email: this.email
      })
      .subscribe(res => {
        this.key = "";
        this.nameVal = "";
        this.email = "";
        console.log(res);
      });
  }
  delete() {
    this.dbService
      .delete('people', parseInt(this.key))
      .subscribe(res => {
        console.log(res);
      });
  }
}
