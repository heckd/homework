import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Agency } from './agency.interface';

@Injectable()
export class AppService {

  protected url : string = 'http://localhost:8080/api/agency/';

  constructor(private http: HttpClient) {}


  getAgency(apiAgency: APIAgency): Agency {
      return {
        'name': apiAgency.name,
        'country': apiAgency.country,
        'countryCode': apiAgency.countryCode,
        'city': apiAgency.city,
        'street': apiAgency.street,
        'settlementCurrency': apiAgency.settlementCurrency,
        'contactPerson': apiAgency.contactPerson,
        'id': apiAgency.id
      }
  }

  getAll() {
    return this.http
      .get<Agency[]>(this.url)
      .pipe(map(apiAllAgencies => {
          const myAgencies: Agency[] = apiAllAgencies
          .map(apiSingleAgency => this.getAgency(apiSingleAgency));
        console.log(myAgencies)
        return myAgencies;
      }))
  }

  createOrUpdate(agency, selectedAgency) {
    if (selectedAgency != null) {
      console.log("update")
      console.log(this.url + "updateAgency/" + selectedAgency.name)
      return this.http.put(this.url + "updateAgency/" + selectedAgency.name, agency)
    } else {
      console.log("create")
      console.log(this.url + "createAgency", agency.name)
      return this.http.post(this.url + "createAgency", agency)
    }
  }

  delete(agency) {
    return this.http.delete(this.url + "deleteAgency/" + agency.name)
  }

}

interface APIAgency {
    'name': String;
    'country': String;
    'countryCode': String;
    'city': String;
    'street': String;
    'settlementCurrency': String;
    'contactPerson': String;
    'id': Number;
  }
