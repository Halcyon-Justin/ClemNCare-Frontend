// create-edit-family.component.ts
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { faSquareXmark, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-edit-family',
  templateUrl: './create-edit-family.component.html',
  styleUrls: ['./create-edit-family.component.scss'],
})
export class CreateEditFamilyComponent implements OnInit {
  guardianFormArray: FormArray = this.fb.array([this.createGuardianForm()]);
  faSquareXmark = faSquareXmark;
  faSquarePlus = faSquarePlus;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.guardianFormArray = this.fb.array([this.createGuardianForm()]);
  }

  createGuardianForm(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',

    });
  }

  addGuardianForm(): void {
    this.guardianFormArray.push(this.createGuardianForm());
  }

  removeGuardian(index: number): void {
    this.guardianFormArray.removeAt(index);
  }
}
