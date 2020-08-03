/* eslint-disable no-underscore-dangle */
import Character from './Character';

export default class AdvancedCharacter extends Character {
  constructor(name) {
    super(name);
    this.stoned = false;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let attack = this._attack - 10 * (this.distance - 1);
    if (this.stoned === true) {
      attack -= Math.log2(this.distance) * 5;
    }
    return Math.round(attack);
  }

  set attack(value) {
    this._attack = value;
  }
}
