import { CommonService } from "../Service/common.service";
import { MatTableDataSource } from '@angular/material/table';
import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  result: any;
  sum: any;
  constructor(private service: CommonService, @Inject(MAT_DIALOG_DATA) private data: any, private matDilog: MatDialogRef<ChildComponent>) { }
  ngOnInit(): void {
    this.viewChild();
    console.log(this.data)
  }
  close() {
    this.matDilog.close();
  }
  viewChild() {
    this.service.getchild().subscribe(res => {
      this.result = res;
      this.sum = 0;
      let resArray = [];
      this.result.forEach(element => {
        if (element.parentId == this.data.id) {
          this.sum = this.sum + element.paidAmount;
          element.receiver = this.data.receiver;
          element.sender = this.data.sender;
          element.totalAmount = this.data.totalAmount;
          resArray.push(element);
        }
      });
      this.result = resArray;
      //this.matDilog.close(sum)
    })
  }
}
