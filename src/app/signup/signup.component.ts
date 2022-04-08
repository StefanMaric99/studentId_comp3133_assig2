import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  submit($event: MouseEvent): void {
    $event.preventDefault();
    // this.apollo.mutate({
    //   mutation: SIGNUP,
    //   variables: {
    //     userInput: this.signupForm.value
    //   }
    // }).subscribe((res: FetchResult) => {
    //   console.log('saved:', res);
    //   this.router.navigate([`/`]);
    // }, (error) => {
    //   console.log('there was an error:', error);
    // });
  }
}
