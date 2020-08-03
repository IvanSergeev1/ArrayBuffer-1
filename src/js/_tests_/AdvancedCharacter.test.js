/* eslint-disable no-unused-vars */
import Character from '../classes/Character';
import AdvancedCharacter from '../classes/AdvancedCharacter';
import Magician from '../classes/Magician';
import Daemon from '../classes/Daemon';

test('Magician attack without stoned for distance 2', () => {
  const magician = new Magician('Iennifer');
  magician.stoned = false;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(90);
});
test('Magician attack with stoned for distance 2', () => {
  const magician = new Magician('Iennifer');
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(85);
});
test('Daemon attack without stoned for distance 3', () => {
  const daemon = new Daemon('Sebastian');
  daemon.stoned = false;
  daemon.distance = 3;
  const result = daemon.attack;
  expect(result).toBe(70);
});
test('Daemon attack with stoned for distance 3', () => {
  const daemon = new Daemon('Sebastian');
  daemon.stoned = true;
  daemon.distance = 3;
  const result = daemon.attack;
  expect(result).toBe(62);
});
