import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule,MatButtonModule,MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  products: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit() {
    this.products = [
      { id: 1, category: 'Total Projects', count: 98, note: 'Includes all types of projects handled across timelines.' },
      { id: 2, category: 'Ended Projects', count: 34, note: 'Successfully completed and closed projects.' },
      { id: 3, category: 'Running Projects', count: 25, note: 'Projects that are currently in progress.' },
      { id: 4, category: 'Pending Projects', count: 67, note: 'Projects waiting for approval or kickoff.' }
    ];
  }
}
