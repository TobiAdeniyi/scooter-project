class User {

  constructor(username, password, age) {
    this._username = username;
    this._password = password;
    this._age = age;
  }

  get username() {
    return this._username
  }

  set username(username) {
    this._username = username
  }

  get password() {
    return this._password
  }

  set password(password) {
    this._password = password
  }

  get age() {
    return this._age
  }

  set age(age) {
    this._age = age
  }

}

module.exports = User
