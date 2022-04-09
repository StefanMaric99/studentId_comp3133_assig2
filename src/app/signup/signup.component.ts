import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Apollo, gql} from 'apollo-angular';
import {FetchResult} from '@apollo/client';

const SIGNUP = gql`
  mutation createUser($userInput: UserInput!) {
    createUser(userInput: $userInput)
  }
`;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private router: Router,
    private apollo: Apollo,
    private fb: FormBuilder,
  ) {
    this.signupForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^.{5,10}$')

      ]],
      firstName: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z]+')
      ]],
      lastName: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z]+')
      ]],
      username: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z]+')
      ]],
    });
  }

  get email(): any {
    return this.signupForm.get('email');
  }

  get password(): any {
    return this.signupForm.get('password');
  }

  get firstName(): any {
    return this.signupForm.get('firstName');
  }

  get lastName(): any {
    return this.signupForm.get('lastName');
  }

  get username(): any {
    return this.signupForm.get('username');
  }

  ngOnInit(): void {
  }

  submit($event: MouseEvent): void {
    $event.preventDefault();
    this.apollo.mutate({
      mutation: SIGNUP,
      variables: {
        userInput: this.signupForm.value
      }
    }).subscribe((res: FetchResult) => {
      console.log('saved:', res);
      this.router.navigate([`/`]);
    }, (error) => {
      console.log('there was an error:', error);
    });
  }
}
