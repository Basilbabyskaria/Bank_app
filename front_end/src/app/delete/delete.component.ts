import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
@Input() item:string |undefined
@Output()onCancel = new EventEmitter()
//input()-it is used to hold data from parent 
@Output()onDelete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item)

  }
  cancel(){
    // alert("");
    //usr defind event 
    this.onCancel.emit()
  }
}
