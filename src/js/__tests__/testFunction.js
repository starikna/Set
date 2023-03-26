import Team from "../app";
import Character from "../character";


const myTeam = new Team;
const zombie = new Character('Zombie');
const undead = new Character('Undead');
const magician = new Character('Magician');

test('1_Validate added character', () => {
    myTeam.add(zombie);
    expect(myTeam.members.has(zombie)).toBeTruthy();
});

test('2_Validate added character with Error', () => {
  myTeam.add(undead);
  expect(() => myTeam.add(undead)).toThrow();
});

test('3_Validate added some character', () => {
  myTeam.addAll(zombie, undead)
  expect(myTeam.members.has(zombie, undead)).toBeTruthy();
});

test('3_Validate convert to array', () => {
  myTeam.add(magician);
  const received = myTeam.toArray();
  expect(Array.isArray(received)).toBeTruthy();
});

















// const myTeam = new Team;
// myTeam.add(zombie);
// myTeam.add(undead);
// myTeam.add(zombie);
// myTeam.addAll(zombie, undead);
// console.log(myTeam.members);
// console.log(myTeam.toArray());