import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchResult } from '@apollo/client';
import { Router } from '@angular/router';

const LOGIN = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput)
  }
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private apollo: Apollo,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z]+')
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^.{5,10}$')
      ]],
    });
  }

  get username(): any {
    return this.loginForm.get('username');
  }

  get password(): any {
    return this.loginForm.get('password');
  }


  ngOnInit(): void {
  }

  submit($event: MouseEvent): void {
    $event.preventDefault();
    const { username, password } = this.loginForm.value;

    this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        loginInput: {
          username, password
        }
      }
    }).subscribe((res: FetchResult) => {
      console.log('login result:', res);
      this.router.navigate([`/hotel`]);
    }, (error) => {
      console.log('there was an error:', error);
    });
  }
}
