const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.registeredUsers = {}
  }

  static _locations = {
    Manhattan: [],
    Brooklyn: [],
    Queens: [],
    Bronx: [],
    StatenIsland: []
  }

  static scooterSessions = []

  static get locations() {
    return ScooterApp._locations
  }

  registerUser(user) {
    if (user.username in this.registeredUsers) {
      throw new Error("already registered!")
    } else if (user.age <= 17) {
      throw new Error("too young to register!")
    } else {
      this.registeredUsers[user.username] = {
        password: user.password,
        age: user.age,
        loggedIn: false,
        accountChange: 0
      }
    }

    console.log("user has been registered")
  }

  logIn(username, password) {
    if (!(username in this.registeredUsers)) {
      throw new Error("Username or password is incorrect.")
    } else if (this.registeredUsers[username].password != password) {
      throw new Error("Username or password is incorrect.")
    } else {
      this.registeredUsers[username].loggedIn = true
      console.log("user has logged in successfully.")
    }
  }

  addScooter(location, scooter) {
    // To be finished
  }

  removeScooter(scooterToRemove) {
    // To be finished
  }
}

module.exports = ScooterApp
