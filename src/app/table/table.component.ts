import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableService } from '../table.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css'],
	providers: [TableService]
})

export class TableComponent implements OnInit {

	columnNames;
	columns;
	table;
	id;
	text;
	lastId;
	defaultClass : string = 'normal';
	highlightClass : string = 'highlight';

	@Input('parentData') public tableData;
	@Output() public childEvent = new EventEmitter();

	constructor(private _dataService: TableService) {	}

	ngOnInit() {
			let len = 0;
			const timer = setInterval( () => {
					len =  Object.keys(this.tableData).length;
					if (len > 0 || timer > 200 ) {
							this.createTable();
							clearInterval(timer);
					}
			}, 100);
	}

	createTable() {
			this.columns = this.tableData.columns;
			this.columnNames = [...this.columns, 'class','tool'];
			this.table = this.tableData.items;
			this.lastId = 0;

			this.table.forEach( (e,i) => {
				e.id = i;
				e.class = this.defaultClass;
				if (e.id && e.id > this.lastId) {
						this.lastId = e.id;
					}
			});
	}

	getColumn(row){
			let col = [];
			const keys = Object.keys(row);
			for(let key of keys) {
					col.push(row[key]);
			}
			return col;
	}

	addRow() {
			if (this.text.length < 1) { return; }
			const data = this.text.split(",");
			let record, newRecord;

			this.lastId++;

			newRecord = {
					id: this.lastId,
			};
			this.columns.forEach( (e) => {
					if (!newRecord[e]) {
							newRecord[e] = data.length > 0 ? data.shift() : "--";
					}
			});

			newRecord['class'] = this.defaultClass;
			this.table.push(newRecord);
			this._dataService.saveTableData(this.table);
			this.childEvent.emit('field was added!' );
	}

	deleteRow(rowId) {
		let i : number, m : number = this.table.length;
		for( i = 0; i < m; i++) {
			if (this.table[i].id == rowId) {
				this.table.splice(i, 1);
				break;
			}
		}
		this._dataService.saveTableData(this.table);
		this.childEvent.emit('field was deleted!' );
	}

	highligthRow(rowId) {
			let i : number, m : number = this.table.length;
			for( i = 0; i < m; i++) {
						if (this.table[i].id == rowId) {
								this.table[i].class = this.table[i].class === this.highlightClass ? this.defaultClass : "highlight";
								break;
						}
			}
			this._dataService.saveTableData(this.table);
	}

	filter(txt) {
			const t = this.table, c = this.columns;
			let i;

			if (txt.trim().length > 0) {
				for (let r of t) {
						if (r.class !== this.defaultClass) { r.class = this.defaultClass; }
						for (let k of c) {
								i = typeof r[k] === "string" ? r[k].toLowerCase() : r[k].toString();
								if ( i.indexOf(txt.toLowerCase()) !== -1) {
										r.class = this.highlightClass;
										break
								}
						}
				}
			} else {
				for (let r of t) {
					r.class = this.defaultClass;
				}
			}
	}


}
