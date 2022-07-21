import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable
      .pipe(
        map((element) => element * 3),
        filter((data) => !(data % 2))
      )
      .subscribe({
        next: (data) => {
          this.toastr.info('' + data);
        },
        complete: () => {
          this.toastr.warning('fin du décompte');
        },
      });
  }
}
