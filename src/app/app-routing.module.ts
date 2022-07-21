import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './components/second.component';
import { CvDetailComponent } from './cv/cv-detail/cv-detail.component';
import { AddDetailComponent } from './cv/add-detail/add-detail.component';
import { NF404Component } from './components/nf404/nf404.component';
/* todo */
const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/add', component: AddDetailComponent },
  { path: 'cv/:id', component: CvDetailComponent },
  { path: 'word', component: MiniWordComponent },
  { path: 'color', component: ColorComponent },
  { path: ':qqechose', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
