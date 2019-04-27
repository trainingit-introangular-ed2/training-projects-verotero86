import { Project } from './modelos/project';

export interface Projects {
  saveProject: (project: Project) => void;
  deleteProject: (id: number) => void;
  getNumProjects: () => number;
  viewProject: (id: number) => Project;
  getProjects: () => Project[];
}
