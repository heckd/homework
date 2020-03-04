import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs'
import { AppService } from './app.service';
import { Agency } from './agency.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'comissioner';
  agencies: Agency[];
  private subscription: Subscription;
  createOrUpdateForm;
  selectedAgency: Agency = null;

  constructor(private appService: AppService, private formBuilder: FormBuilder) {
    this.createOrUpdateForm = this.formBuilder.group({
      name: '',
      country: '',
      countryCode: '',
      city: '',
      street: '',
      settlementCurrency: '',
      contactPerson: ''
    })
  }

  ngOnInit() {
    this.subscription = this.getAgencies();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getItemClass(agency: Agency): String {
    return agency === this.selectedAgency ? 'active' : 'inactive'
  }

  setSelectedAgency(agency: Agency) {
    this.selectedAgency = agency
    this.createOrUpdateForm.get("name").setValue(agency.name)
    this.createOrUpdateForm.get("country").setValue(agency.country)
    this.createOrUpdateForm.get("countryCode").setValue(agency.countryCode)
    this.createOrUpdateForm.get("city").setValue(agency.city)
    this.createOrUpdateForm.get("street").setValue(agency.street)
    this.createOrUpdateForm.get("settlementCurrency").setValue(agency.settlementCurrency)
    this.createOrUpdateForm.get("contactPerson").setValue(agency.contactPerson)
  }

  clearSelectedAgency() {
    this.selectedAgency = null
    this.createOrUpdateForm.reset()
  }

  deleteSelectedAgency() {
    if (this.selectedAgency != null) {
      return this.deleteAgency(this.selectedAgency)
    }
  }

  onSubmit(agencyData: Agency) {
    console.log("Submitted ",agencyData)
    this.createOrUpdateAgency(agencyData, this.selectedAgency)
    this.selectedAgency = null
    this.createOrUpdateForm.reset()
  }

  getAgencies(): Subscription {
    return this.appService.getAll()
      .subscribe(agencies => { this.agencies = agencies }, error => console.log(error))
  }

  createOrUpdateAgency(agency: Agency, selectedAgency: Agency) {
    console.log("createOrUpdate", agency, selectedAgency)
    return this.appService.createOrUpdate(agency, selectedAgency).subscribe(() => console.log("Creating or updating agency", agency.name))
  }

  deleteAgency(agency: Agency) {
    console.log("CAUTION! Deleting", agency.name)
    this.appService.delete(agency).subscribe(() => console.log("Deleting agency", agency.name))
  }
}
