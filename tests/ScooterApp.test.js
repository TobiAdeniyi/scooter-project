const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

// register user
describe("register user", () => {

  beforeEach(() => {
    user = new User("ben_dover", "password123", 21)
    scooterApp = new ScooterApp()
  })

  test("user already registered", () => {
    // register user
    scooterApp.registerUser(user)

    // reregister user
    expect(() => scooterApp.registerUser(user)).toThrow("already registered!")
  })

  test("user too young", () => {
    user.age = 16
    expect(() => scooterApp.registerUser(user)).toThrow("too young to register!")
  })

  test("register user", () => {
    const logSpy = jest.spyOn(console, "log")
    scooterApp.registerUser(user)
    expect(scooterApp.registeredUsers[user.username]).toEqual({
      password: user.password,
      age: user.age,
      loggedIn: false,
      accountChange: 0
    })
    expect(logSpy).toHaveBeenCalledWith("user has been registered")
  })

})

// log in
describe("user login", () => {
  beforeEach(() => {
    username = "ben1"
    password = "password1"
    user = new User(username, password, 21)
    scooterApp = new ScooterApp()
    scooterApp.registerUser(user)
  })

  test("user is not registered", () => {
    incorrectUsername = "ben2"
    expect(incorrectUsername in scooterApp.registeredUsers).toBeFalsy()
    expect(() => scooterApp.logIn(incorrectUsername, password)).toThrow("Username or password is incorrect.")
  })

  test("user password is incorrect", () => {
    incorrectPassword = "password2"
    expect(username in scooterApp.registeredUsers).toBeTruthy()
    expect(() => scooterApp.logIn(username, incorrectPassword)).toThrow("Username or password is incorrect.")
  })

  test("login user", () => {
    const logSpy = jest.spyOn(console, "log")
    expect(username in scooterApp.registeredUsers).toBeTruthy()
    scooterApp.logIn(username, password)
    expect(logSpy).toHaveBeenCalledWith("user has logged in successfully.")
  })
})

// add and remove scooter
describe("add and remove scooter", () => {

  test("add scooter", () => {
    // TODO
  })

  test("remove scooter", () => {
    // TODO
  })
})
