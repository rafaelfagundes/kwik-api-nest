export class NewFirebaseUserDTO {
  email: string;
  emailVerified: boolean;
  phoneNumber: string;
  password: string;
  displayName: string;
  disabled: boolean;

  constructor(
    email: string,
    emailVerified: boolean,
    phoneNumber: string,
    password: string,
    displayName: string,
    disabled: boolean,
  ) {
    this.email = email;
    this.emailVerified = emailVerified;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.displayName = displayName;
    this.disabled = disabled;
  }
}
