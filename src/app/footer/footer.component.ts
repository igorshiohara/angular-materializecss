import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile/profile.service";
import {ProfileModel} from "../profile/profile.model";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  errorMessage: string;
  profile: ProfileModel;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile()
      .then(
        profile => this.profile = profile,
        error => this.errorMessage = <any>error
      )
  }

}
