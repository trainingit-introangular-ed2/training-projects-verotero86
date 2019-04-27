import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewProjectFormComponent } from './new-project/new-project-form/new-project-form.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterProjectsComponent } from './projects/filter-projects/filter-projects.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './viewer-project/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './viewer-project/viewer-project.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    NewProjectComponent,
    ViewerProjectComponent,
    FilterProjectsComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
