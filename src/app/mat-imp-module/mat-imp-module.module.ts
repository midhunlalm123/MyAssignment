import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';;
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  declarations: [

  ],
  imports: [
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,

  ],
  exports: [
       FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class MatImpModuleModule { }
