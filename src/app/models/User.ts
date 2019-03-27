export class User {
  id: string;
  userName: string;
  fname: string;
  lname: string;
  description: string;
  position: string;
  aboutme: string;
  contacts: string[];
  address: {
    no: string;
    street: string;
    city: string;
  };
  email: string;
}
