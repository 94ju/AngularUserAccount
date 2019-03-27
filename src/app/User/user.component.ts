import { Component, OnInit } from "@angular/core";
import { User } from "../models/User";
import { UserService } from "../Services/user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user: User;
  isPersonalDetailsEditableDisabled = true;
  isContactDetailsEditableDisabled = true;

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.user = this.userService.getUser("1");
  }

  personalDetailsEditBtnClick(event) {
    this.isPersonalDetailsEditableDisabled = false;
  }

  contactDetailsEditBtnClick(event) {
    this.isContactDetailsEditableDisabled = false;
  }

  addNewContact() {
    this.user.contacts.push("");
  }
}
