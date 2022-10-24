
const Scooter = require('../src/Scooter')
const User = require('../src/User')

const basicSetup = () => {
  // Station
  station = "King's Cross"
  // User object
  user = new User("Tom", "password123", 28)
  scooter = new Scooter(station, user)
}

//typeof scooter === object
describe('scooter object', () => {
  // Basic Setup
  beforeEach(() => basicSetup())

  test("scooter exist and is assigned to expected vlaue", () => {
    expect(scooter).not.toEqual(null)
    expect(scooter).toBeInstanceOf(Scooter)
    expect(scooter.station).toBe(station)
    expect(scooter.user).toBe(user)
  })

  test("scooter station exist and is assigned to expected value", () => {
    expect(scooter.station).not.toBe(null)
    expect(scooter.station).toBe(station)
  })

  test("scooter user exist and is assiged to expected value", () => {
    expect(scooter.user).not.toEqual(null)
    expect(scooter.user).toEqual(user)
  })

  test("scooter serial number exist and is assigned to a value betweeen 0 and 1,000", () => {
    expect(scooter.serial).not.toBe(null)
    expect(0 <= scooter.serial && scooter.serial <= 1_000).toBeTruthy()
  })

  test("scooter charge exist and is assiged to a value between 0 and 1000", () => {
    expect(scooter.charge).not.toBe(null)
    expect(0 <= scooter.charge && scooter.charge <= 100).toBeTruthy()
  })

  test("scooter isBroken value exist and is initally set to false", () => {
    expect(scooter.isBroken).not.toBe(null)
    expect(scooter.isBroken).toBe(false)
  })

  test("scooter docked value exist and is initally set to true", () => {
    expect(scooter.docked).not.toBe(null)
    expect(scooter.docked).toBe(true)
  })

})

//Method tests
describe('scooter methods', () => {
  // Basic Setup
  beforeEach(() => basicSetup())

  // rent method
  test("rent scooter method that isn't charged", () => {
    scooter.charge = 19
    expect(() => scooter.rent()).toThrow("Scooter low on battery, please charge.")
  })

  test("rent scooter method that is broken", () => {
    scooter.isBroken = true
    scooter.charge = 100
    expect(() => scooter.rent()).toThrow("Scooter is broken, please send a repair request.")
  })

  test("rent scooter method", () => {
    const logSpy = jest.spyOn(console, "log")
    scooter.charge = 90
    scooter.rent()
    expect(logSpy).toHaveBeenCalledWith("Enjoy the ride!")
  })

  // dock method
  test("dock scooter method without station argument", () => {
    scooter.docked = false
    expect(() => scooter.dock()).toThrow("Docking station required!")
  })

  test("dock scooter method", () => {
    newStation = "London Bridge"
    scooter.dock(newStation)
    expect(scooter.station).toBe(newStation)
    expect(scooter.docked).toBeTruthy()
    expect(scooter.user).toBe("")
  })

  // requestRepair method
  test("request repair method", async () => {
    scooter.requestRepair()
    await new Promise(resolve => setTimeout(resolve, 3000));
    expect(scooter.isBroken).toBeFalsy()
  })

  // charge method
  test("recharge scooter method", async () => {
    scooter.recharge()
    await new Promise(resolve => setTimeout(resolve, 3000));
    expect(scooter.charge).toBe(100)
  })

})
