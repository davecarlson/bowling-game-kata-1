const Game = require('./game')

let game

beforeEach(() => {
  game = new Game()
})

const rollMany = (rolls, pins) => {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins)
  }
}

const rollSpare = () => {
  game.roll(5)
  game.roll(5)
}

test('gutter game', () => {
  rollMany(20, 0)
  expect(game.score).toBe(0)
})

test('all ones', () => {
  rollMany(20, 1)
  expect(game.score).toBe(20)
})

test('one spare', () => {
  rollSpare()
  game.roll(3)
  rollMany(17, 0)
  expect(game.score).toBe(16)
})
