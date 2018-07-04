import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../../../../services/animations';
import { AlertService, DialogType, MessageSeverity } from '../../../../services/alert.service';
import { Project } from '../../../../models/project';
import { Router } from '@angular/router';
import { ProjectService } from '../../../../services/custom/project.service';

@Component({
  selector: 'projects-layout',
  templateUrl: './projects-layout.component.html',
  styleUrls: ['./projects-layout.component.css'],
  animations: [fadeInOut]
})
export class ProjectsLayoutComponent implements OnInit {

    public projects: Project[] = [];
    public columnsForsearch: any[];

    constructor(private alertService: AlertService,
                private router: Router,
                private projectService: ProjectService) { }

    ngOnInit(): void {
        this.columnsForsearch = [
            { field: 'name', header: 'name' },
            { field: 'client', header: 'client' },
            { field: 'status', header: 'status' }
        ];

        this.projectService.getProjectsList()
            .subscribe( data => { this.projects = data; } );
    }

    edit(id: number): void {
        this.router.navigate(['/project-edit/', id]);
    }

    delete(id: number): void {
        this.alertService.showDialog('Are you sure?', DialogType.confirm,
            () => this.projectService.deleteProject(id)
                .subscribe(
                data => data,
                error => {
                    console.log(error);
                    this.alertService.showMessage('An error has occurred!', error, MessageSeverity.error);
                },
                () => { this.projects = this.projects.filter(x => x.id !== id); }),
        () => this.alertService.showMessage('Operation DELETE cancelled!', '', MessageSeverity.default));
    }

}
