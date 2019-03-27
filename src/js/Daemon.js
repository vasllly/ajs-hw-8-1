import Character from './Character';

export default class Daemon extends Character {
  constructor() {
    super();
    this.attack = 10;
    this.defence = 40;
  }
}
