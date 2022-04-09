import {Component, OnInit} from '@angular/core';
import {Hotel} from '../type';
import {Apollo, gql} from 'apollo-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hotel-serach',
  templateUrl: './hotel-serach.component.html',
  styleUrls: ['./hotel-serach.component.scss']
})
export class HotelSerachComponent implements OnInit {
  searchBox: FormGroup;

  hotel: Hotel[];
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    private fb: FormBuilder
  ) {
    this.hotel = [];
    this.searchBox = this.fb.group({
      filter: ['', [
        Validators.required,
      ]],
    });
  }

  getByName(): void {
    this.apollo
    .watchQuery({
      query: gql`
        query($name: String!) {
          hotelByName(name: $name) {
            id
            name
            street
            city
            postalCode
            email
            price
          }
        }
      `,
      variables: {
        name: this.searchBox.value.filter
      }
    })
    .valueChanges.subscribe((result: any) => {
      this.hotel = result?.data?.hotelByName;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  getByCity(): void {
    this.apollo
    .watchQuery({
      query: gql`
        query($city: String!) {
          hotelByCity(city: $city) {
            id
            name
            street
            city
            postalCode
            email
            price
          }
        }
      `,
      variables: {
        city: this.searchBox.value.filter
      }
    })
    .valueChanges.subscribe((result: any) => {
      console.log({result});
      this.hotel = result?.data?.hotelByCity;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  ngOnInit(): void {
  }
}
