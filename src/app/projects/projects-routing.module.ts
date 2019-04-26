import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: 'new',
    component: NewProjectComponent
  },
  {
    path: 'view/:id',
    component: ViewerProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
