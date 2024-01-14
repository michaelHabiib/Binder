import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrl: './profile-form.component.css'
})
export class ProfileFormComponent {
  profileForm!: FormGroup;
  interests: string[] = ['Interest 1', 'Interest 2', 'Interest 3']; // Replace with your actual interests

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      profileImage: [null],
      displayName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      about: ['', Validators.maxLength(100)],
      areaOfInterest: [[]],
      studentOrProfessional: ['', Validators.required],
      experience: [''],
      expertise: [''],
      role: ['', Validators.maxLength(200)],
    });
  }

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.profileForm.patchValue({
          profileImage: reader.result,
        });
      };
    }
  }

  saveProfile() {
    Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Your profile is updated!", "", "success");
      this.profileForm.reset();
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
  }
}
