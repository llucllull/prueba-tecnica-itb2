import {Component, OnInit} from '@angular/core';
import {ActivityService} from "../../../../core/services/activity.service";
import {HttpClientModule} from "@angular/common/http";
import {Activity} from "../../../../core/models/activity.model";
import {map} from "rxjs";
import {SearchService} from "../../../../core/services/search-service.service";

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss'
})
export class ActivityListComponent implements OnInit {
  activities: Activity[] = [];
  filteredActivities: Activity[] = [];

  constructor(private activityService: ActivityService, private searchService: SearchService) {}

  ngOnInit() {
    this.activityService.getActivitiesData()
      .pipe(
        map(data =>
          data['hydra:member'].filter((activity: Activity) =>
            activity.price !== null && activity.price !== '' && activity.media !== null && Array.isArray(activity.media) && activity.media.length > 0
          )
        )
      )
      .subscribe(filteredActivities => {
        this.activities = filteredActivities;
        this.filteredActivities = [...this.activities];
      });

    this.searchService.searchTerm$.subscribe((term) => {
      this.filteredActivities = this.activities.filter((activity) =>
        activity.title.toLowerCase().includes(term.toLowerCase()) ||
        activity.shortDescription.toLowerCase().includes(term.toLowerCase())
      );
    });
  }

  getImageUrl(contentUrl: string): string {
    const baseUrl = 'https://api.tour2b.hub2b.travel/';
    return `${baseUrl}${contentUrl}`;
  }


}
