import AdvancedCharacter from './AdvancedCharacter';

export default class Daemon extends AdvancedCharacter {
  constructor(name) {
    super(name);
    this.attack = 90;
    this.defense = 40;
  }
}
