import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { MES_ROUTES } from '../../config/routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (mesParams) => {
        this.cvService.getCvById(mesParams['id']).subscribe({
          next: (cv) => {
            this.cv = cv;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate([MES_ROUTES.cv]);
          },
        });
      },
    });
  }
  delete() {
    if (this.cv)
      this.cvService.deleteCvById(this.cv.id).subscribe({
        next: () => {
          this.toastr.info(
            `${this.cv?.firstname} ${this.cv?.name} a été supprimé avec succès`
          );
          this.router.navigate([MES_ROUTES.cv]);
        },
        error: () => {},
      });
  }
}
