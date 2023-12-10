import { Component, OnInit } from '@angular/core';
import { FamilyService } from 'src/app/services/family-management.service';

@Component({
  providers: [FamilyService],
  selector: 'app-family-management',
  templateUrl: './family-management.component.html',
  styleUrls: ['./family-management.component.scss']
})
export class FamilyManagementComponent implements OnInit {
  familyData: any;

  constructor(private familyService: FamilyService) { }

  ngOnInit(): void {
    this.getFamilyData();
  }

  getFamilyData(): void {
    this.familyService.getFamilyData().subscribe(
      (data: any) => {
        this.familyData = data.data; // Assuming family data is nested under 'data' key
      },
      error => {
        console.error('Error fetching family data:', error);
      }
    );
  }

}
