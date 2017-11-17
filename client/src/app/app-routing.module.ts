import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
	{path:'',pathMatch:'full',component: LoginComponent},
	{path:'dashboard',pathMatch:'full',component: DashboardComponent},
	{path:'questions/:id/new_answer',pathMatch:'full',component: AnswerComponent},
	{path:'new_question',pathMatch:'full',component: NewquestionComponent},
	{path:'questions/:id',pathMatch:'full',component: QuestionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
