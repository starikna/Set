export default class Team {
  constructor() {
      this.members = new Set();
  }
  add(character) {
      if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть в вашей команде!');
      }

   return this.members.add(character);
  };

  addAll(...characters) {
      for (const member of characters) {
         this.members.add(member); 
      }
  };

  toArray() {
      return [...this.members];
  };
}
 