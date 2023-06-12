import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  ProjectGroupID: string;
  MetroAreaID: string;
  ProjectName: string;
  ProductID: string;
  ProductName: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Product Search";
  searchTerm = '';
  homes: Data[] = [];
  allhomes: Data[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Data[]>('./assets/homes.json')
      .subscribe((data: Data[]) => {
        this.homes = data;
        this.allhomes = this.homes;
      });
  }
  search(value: string): void {
    console.log("h")
    this.homes = this.allhomes.filter((val) =>
    {
      const s = val.ProjectName.toLowerCase().includes(value.toLowerCase())
      return s
    }
    );
  }
}
