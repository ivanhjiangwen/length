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
  parseTo(unit) {
    let result = this
    if (this.unit === 'yard') {
      if (unit === 'f') {
        result = new Length(this.value * 3, unit)
      } else if (unit === 'inch') {
        result = new Length(this.value * 36, unit)
      }
    }

    if (this.unit === 'inch') {
      if (unit === 'yard') {
        result = new Length(this.value / 36, unit)
      } else if (unit === 'f') {
        result = new Length(this.value / 12, unit)
      }
    }

    if (this.unit === 'f') {
      if (unit === 'yard') {
        result = new Length(this.value / 3, unit)
      } else if (unit === 'inch') {
        result = new Length(this.value * 12, unit)
      }
    }

    return result
  }
}
