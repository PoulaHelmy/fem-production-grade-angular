import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular-production-grade-fem/api-interfaces';

@Component({
  selector: 'angular-production-grade-fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/poula/V1');
  constructor(private http: HttpClient) {}
}
