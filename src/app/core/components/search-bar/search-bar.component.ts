import { Component } from '@angular/core';
import {SearchService} from "../../services/search-service.service";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  constructor(private searchService: SearchService) {}

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const term = input.value;
    this.searchService.updateSearchTerm(term);
  }
}
