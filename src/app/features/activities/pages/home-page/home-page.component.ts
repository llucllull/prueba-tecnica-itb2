import { Component } from '@angular/core';
import {SearchBarComponent} from "../../../../core/components/search-bar/search-bar.component";
import {ActivityListComponent} from "../../components/activity-list/activity-list.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBarComponent, ActivityListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
