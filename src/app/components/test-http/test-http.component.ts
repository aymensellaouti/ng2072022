import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SayHelloService } from '../../services/say-hello.service';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css'],
})
export class TestHttpComponent implements OnInit {
  constructor(private hello: SayHelloService) {}

  ngOnInit(): void {
    this.hello.getTodos().subscribe({
      next: (todos) => {
        console.log('mes todos', todos);
      },
      complete: () => {
        console.log('fin de l envoi des todos');
      },
      error: (error) => {
        console.log('Il y a une erreur dans l api');
        console.log(error);
      },
    });
  }
}
