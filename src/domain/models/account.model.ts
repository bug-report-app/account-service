export class AccountModel {
  private _id: string | undefined;
  private _name: string | undefined;
  private _email: string | undefined;
  private _password: string | undefined;

  get id(): string | undefined {
    return this._id;
  }

  set id(value: string | undefined) {
    this._id = value;
  }

  get name(): string | undefined {
    return this._name;
  }

  set name(value: string | undefined) {
    this._name = value;
  }

  get email(): string | undefined {
    return this._email;
  }

  set email(value: string | undefined) {
    this._email = value;
  }

  get password(): string | undefined {
    return this._password;
  }

  set password(value: string | undefined) {
    this._password = value;
  }

  fromJSON(json: any): AccountModel {
    if (!json) {
      return this;
    }

    this.id = json?.id ? json.id : undefined;
    this.name = json?.name ? json.name : undefined;
    this.email = json?.email ? json.email : undefined;
    this.password = json?.password ? json.password : undefined;

    return this;
  }

  toJSON() {
    return {
      id: this.id ? this.id : undefined,
      name: this.name ? this.name : undefined,
      email: this.email ? this.email : undefined,
    };
  }
}
