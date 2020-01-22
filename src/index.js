export class Length {
  value
  unit

  constructor(value, unit) {
    this.value = value
    this.unit = unit
  }

  getValue() {
    return this.value
  }

  getUnit() {
    return this.unit
  }

  static YARD = 'yard'
  static FOOT = 'f'
  parseTo(unit) {
    let result = this
    if (this.unit === Length.YARD) {
      if (unit === 'f') {
        result = new Length(this.value * 3, unit)
      } else if (unit === 'inch') {
        result = new Length(this.value * 36, unit)
      }
    }

    if (this.unit === 'inch') {
      if (unit === Length.YARD) {
        result = new Length(this.value / 36, unit)
      } else if (unit === 'f') {
        result = new Length(this.value / 12, unit)
      }
    }

    if (this.unit === 'f') {
      if (unit === Length.YARD) {
        result = new Length(this.value / 3, unit)
      } else if (unit === 'inch') {
        result = new Length(this.value * 12, unit)
      }
    }

    return result
  }
}
