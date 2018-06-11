import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

@Component({
    selector: 'app-table-parent',
    templateUrl: './table-parent.component.html',
    styleUrls: ['./table-parent.component.css'],
  	providers: [TableService]
})

export class TableParentComponent implements OnInit {

  public tableData = {};
  public message = "";

  constructor(private _dataService: TableService) { }

  ngOnInit() {
      this._dataService.getTableData().subscribe( data => { this.tableData = data; return data;  });
  }

}
