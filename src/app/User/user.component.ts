import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
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
  @ViewChild("contactList") contactList: ElementRef;

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
    const newContact = prompt("Enter new contact...");
    this.user.contacts.push(newContact);
  }
}
