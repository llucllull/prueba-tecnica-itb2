import {Component, OnInit} from '@angular/core';
import {ActivityService} from "../../../../core/services/activity.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss'
})
export class ActivityListComponent implements OnInit {

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.activityService.getActivitiesData().subscribe(data => {
      console.log(data);
    });
  }

}
