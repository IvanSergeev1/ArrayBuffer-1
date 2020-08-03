import AdvancedCharacter from './AdvancedCharacter';

export default class Magician extends AdvancedCharacter {
  constructor(name) {
    super(name);
    this.attack = 100;
    this.defense = 40;
  }
}
