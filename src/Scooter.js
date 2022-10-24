class Scooter{

  #serial

  constructor(station, user) {
    // Station
    this._station = station

    // User
    this._user = user

    // Serial Number
    this.#serial = Math.random() * 1_000

    // Charge pecentage
    this._charge = Math.random() * 100

    // Is scooter broken
    this._isBroken = false

    // Is scooter docked
    this._docked = true
  }

  get station() {
    return this._station
  }

  set station(station) {
    this._station = station
  }

  get user() {
    return this._user
  }

  set user(user) {
    this._user = user
  }

  get serial() {
    return this.#serial
  }

  get charge() {
    return this._charge
  }

  set charge(charge) {
    if (charge < 0 || 100 < charge) {
      throw new Error("Charge must be between 0 and 100.")
    } else {
      this._charge = charge
    }
  }

  get isBroken() {
    return this._isBroken
  }

  set isBroken(isBroken) {
    this._isBroken = isBroken
  }

  get docked() {
    return this._docked
  }

  set docked(docked) {
    this._docked = docked
  }

  // Methods
  rent() {
    if (this._charge <= 20) {
      throw new Error("Scooter low on battery, please charge.")
    } else if (this._isBroken) {
      throw new Error("Scooter is broken, please send a repair request.")
    } else {
      this._docked = false
      console.log("Enjoy the ride!")
    }
  }

  dock(station) {
    if (station === undefined) {
      throw new Error("Docking station required!")
    } else {
      this._station = station
      this._docked = true
      this._user = ""
    }
  }

  recharge() {
    this._charge = 100
  }

  requestRepair() {

  }

}

module.exports = Scooter
