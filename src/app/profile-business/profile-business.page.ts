import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-business',
  templateUrl: './profile-business.page.html',
  styleUrls: ['./profile-business.page.scss'],
})
export class ProfileBusinessPage implements OnInit {

  constructor() { }

  business =
      {
        "name": "Muster GmbH",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor " +
            "invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo" +
            " dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. " +
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et " +
            "dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet " +
            "clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        "emailAddress": "muster@web.de",
        "tel": "01234567890",
        "websiteURL": "https:www.google.com",
      }
  ;

  ngOnInit() {
  }

}
