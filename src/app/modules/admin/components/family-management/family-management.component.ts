import { Component, OnInit} from '@angular/core';
import { FamilyService } from 'src/app/services/family-management.service';
import { Family } from 'src/app/models/family.model';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-family-management',
  templateUrl: './family-management.component.html',
  styleUrls: ['./family-management.component.scss'],
})
export class FamilyManagementComponent implements OnInit {
  familiesData!: Family[];
  familyData!: Family;
  faTrash = faTrash;
  faPencil = faPencil;
  familyToDeleteId!: number;

  constructor(private familyService: FamilyService, private router: Router) {}

  ngOnInit() {
    this.getFamilies();
  }

  getFamilies() {
    this.familyService.getFamilies().subscribe(
      (families) => {
        this.familiesData = families;
      },
      (error) => {
        console.error(`Error retrieving families: ${error}`);
      }
    );
  }

  editFamily(familyId: number) {
    this.router.navigate(['/admin/create-edit-family', familyId]);
  }

  getFamilyId(familyId: number):void {
    this.familyToDeleteId = familyId;
  }


  deleteFamily() {
    return this.familyService.deleteFamily(this.familyToDeleteId).subscribe(
      (response) => {
        this.getFamilies();
      },
      (error) => {
        console.error(`Error deleting family: ${error}`);
      }
    );
  }
}

