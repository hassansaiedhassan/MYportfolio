import { ContantComponent } from '../contant/contant.component';
import { EducationComponent } from '../education/education.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from './../about/about.component';
import { Component } from '@angular/core';
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AboutComponent, HomeComponent, EducationComponent, ContantComponent, ProjectsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
