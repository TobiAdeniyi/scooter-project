const User = require('../src/User')

// User tests here
describe("user object", () => {
  beforeEach(() => {
    username = "Josh_Sims";
    password = "password1";
    age = 25;
    user = new User(username, password, age);
  })

  // User
  test("user exist and is constructed as expected", () => {
    expect(user).not.toEqual(null)
    expect(user).toEqual(new User(username, password, age))
  })

  // Username
  test("username exists and is assigned to the correct value", () => {
    expect(user.username).not.toBe(null)
    expect(user.username).toBe(username)
  })

  // Password
  test("password existts andis assigned to the correct value", () => {
    expect(user.password).not.toBe(null)
    expect(user.password).toBe(password)
  })

  // Age
  test("age existts and is assigned to the correct value", () => {
    expect(user.age).not.toBe(null)
    expect(user.age).toBe(age)
  })

})
