import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Booking} from '../type.d.ts';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookings: Booking[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
        {
          bookings {
            id
            user
            hotel
            date
            booking_end
            booking_start
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      console.log('Booking', result);
      this.bookings = result?.data?.bookings;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
