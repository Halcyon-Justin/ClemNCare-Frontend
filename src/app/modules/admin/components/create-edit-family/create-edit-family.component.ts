// create-edit-family.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Family } from 'src/app/models/family.model';
import { FamilyService } from 'src/app/services/family-management.service';

@Component({
  selector: 'app-create-edit-family',
  templateUrl: './create-edit-family.component.html',
  styleUrls: ['./create-edit-family.component.scss'],
})
export class CreateEditFamilyComponent implements OnInit {
  family: Family | null = null;

  constructor(private route: ActivatedRoute, private familyService: FamilyService) {}

  ngOnInit() {
    // Retrieve the family ID from the route parameters
    const familyId = this.route.snapshot.params['id'];

    // Fetch the family details based on the ID
    if (familyId) {
      this.familyService.getFamily(familyId).subscribe(
        (family) => {
          this.family = family;
        },
        (error) => {
          console.error(`Error retrieving family: ${error}`);
        }
      );
    } else {
      // Handle the case when creating a new family (optional)
    }
  }
}
