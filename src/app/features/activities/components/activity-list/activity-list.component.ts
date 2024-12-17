import {Component, OnInit} from '@angular/core';
import {ActivityService} from "../../../../core/services/activity.service";
import {HttpClientModule} from "@angular/common/http";
import {Activity} from "../../../../core/models/activity.model";

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss'
})
export class ActivityListComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.activityService.getActivitiesData().subscribe(data => {
      this.activities = data['hydra:member'];
    })
  }

}
