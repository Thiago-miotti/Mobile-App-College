import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  CollegeName: string;
  CollegeCountry: string;
  URL: string = 'http://universities.hipolabs.com/';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.CollegeName = '';
    this.CollegeCountry = '';
  }
  search() {
    this.http
      .get(
        this.URL +
          'search?name=' +
          this.CollegeName +
          '&country=' +
          this.CollegeCountry
      )
      .subscribe((resposta) => {
        console.log(resposta);
        let collegedata: NavigationExtras = {
          state: {
            data: resposta[0],
          },
        };
        this.router.navigate(['/response'], collegedata);
      });
  }
}
