import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { MES_ROUTES } from '../../config/routes.config';

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
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (mesParams) => {
        this.cv = this.cvService.getCvById(mesParams['id']);
        if (!this.cv) {
          this.router.navigate([MES_ROUTES.cv]);
        }
      },
    });
  }
}
