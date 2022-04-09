import { Component, OnInit } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[];
  loading = true;
  error: any;

  // gridColumns = 3;

  constructor(private apollo: Apollo) { }
  log(val) { console.log({val}); }
  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
        {
          users {
            id
            firstName
            lastName
            username
            email
            password
          }
        }
      `,
    })
    .valueChanges.subscribe((result: any) => {
      console.log('User', result);
      this.users = result?.data?.users;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

  toggleGridColumns(): void {
  }

}
