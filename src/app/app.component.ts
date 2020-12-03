import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService, CookieText } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  form: FormGroup
  cookies: CookieText[] = [
    { cookie: 'Press Get Cookies to get some fortune cookies'}
  ]

  constructor(private fb:FormBuilder, private cookieService: CookieService) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.form = this.fb.group({
      count: this.fb.control(1)
    })
  }

  async getCookie(){
    
    const count = parseInt(this.form.value['count'])
    this.cookies = await this.cookieService.getCookies(count)
      console.log(this.cookies)
  }
}
