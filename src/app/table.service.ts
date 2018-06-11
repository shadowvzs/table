import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/*
interface tableData {
  columns : Object;
  items: Object;
}
*/

export class TableService {


	data : object;
  constructor(private http : HttpClient) {
    this.http = http;
		console.log('Service: running');
  }


  getTableData() {
		  //const defaultData = '[{"id":"1","class":"","text":"Pickup kids #1"},{"id":"2","class":"","text":"Second item with text"},{"id": "3","class":"","text":"Third text"}]';
		  //const data = localStorage.getItem('tableData') || defaultData;
    return this.http.get('http://localhost:80/db.php');
//    return this.http.get<tableData>('http://localhost:80/db.php');
	}

	saveTableData(newData=null) : void {
		localStorage.setItem('tableData', JSON.stringify(newData));
	}


}
