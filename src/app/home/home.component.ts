import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChildComponent } from '../child/child.component';
import { CommonService } from '../Service/common.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  childData: any;

  constructor(private commonService: CommonService, private popup: MatDialog,) { }
  products: any;
  ngOnInit(): void {
    this.getChild();
    this.getproducts();
  }
  getproducts() {
    this.commonService.getall().subscribe(res => {
      // console.log(res);
      this.products = res;
      this.products.forEach(element => {
        let id = element.id;
        let sum = 0;
        this.childData.forEach(element1 => {
          if (element1.parentId == id) {
            sum = +(sum + element1.paidAmount)
          }
        });
        element["sum"] = sum;
      });
      console.log(this.products)
    })
  }
  getChild() {
    this.commonService.getchild().subscribe(res => {
      this.childData = res;
    });
  }
  view(element) {
    let mobilewidth = "65%";
    let height = "65%";

    if (window.innerWidth < 600) {
      mobilewidth = "95%",
        height = "55%"
    }

    const dialog = this.popup.open(ChildComponent, {
      width: mobilewidth,
      height: height,
      data: element,
    })
    dialog.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
}