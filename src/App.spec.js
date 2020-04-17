import { fizzBuzzCompare } from './components/FizzBuzz';
import { reducer } from './components/Timer';

const fizzTestSequence = [
  {
    time: { hours: 0, minutes: 0, seconds: 2 },
    fizz: 2,
    buzz: 2,
    result: { buzzComp: true, fizzComp: true }

  },
  {
    time: { hours: 0, minutes: 0, seconds: 2 },
    fizz: 2,
    buzz: 3,
    result: { buzzComp: false, fizzComp: true }
  },
  {
    time: { hours: 0, minutes: 0, seconds: 3 },
    fizz: 2,
    buzz: 2,
    result: { buzzComp: false, fizzComp: false }
  },
  {
    time: { hours: 0, minutes: 0, seconds: 3 },
    fizz: 2,
    buzz: 3,
    result: { buzzComp: true, fizzComp: false }
  },
  {
    time: { hours: 9, minutes: 47, seconds: 2 },
    fizz: 5,
    buzz: 10,
    result: { buzzComp: false, fizzComp: false }
  },
  {
    time: { hours: 9, minutes: 47, seconds: 2 },
    fizz: 8,
    buzz: 2,
    result: { buzzComp: true, fizzComp: false }

  },
];

const reducerIncrementSequence = [
  {
    state: { hours: 0, minutes: 0, seconds: 0, paused: false },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 0, seconds: 1, paused: false }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 59, paused: false },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 1, seconds: 0, paused: false }
  },
  {
    state: { hours: 0, minutes: 1, seconds: 0, paused: false },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 1, seconds: 1, paused: false }
  },
  {
    state: { hours: 0, minutes: 59, seconds: 59, paused: false },
    action: { type: 'increment' },
    result: { hours: 1, minutes: 0, seconds: 0, paused: false }
  },
  {
    state: { hours: 1, minutes: 0, seconds: 0, paused: false },
    action: { type: 'increment' },
    result: { hours: 1, minutes: 0, seconds: 1, paused: false }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, paused: false },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 0, seconds: 0, paused: false }
  }
];

const reducerPausedSequence = [
  {
    state: { hours: 0, minutes: 0, seconds: 0, paused: true },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 0, seconds: 0, paused: true }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 59, paused: true },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 0, seconds: 59, paused: true }
  },
  {
    state: { hours: 0, minutes: 1, seconds: 0, paused: true },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 1, seconds: 0, paused: true }
  },
  {
    state: { hours: 0, minutes: 59, seconds: 59, paused: true },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 59, seconds: 59, paused: true }
  },
  {
    state: { hours: 1, minutes: 0, seconds: 0, paused: true },
    action: { type: 'increment' },
    result: { hours: 1, minutes: 0, seconds: 0, paused: true }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, paused: true },
    action: { type: 'increment' },
    result: { hours: 9, minutes: 59, seconds: 59, paused: true }
  }
];

const reducerButtonSequence = [
  {
    state: { hours: 0, minutes: 0, seconds: 0, paused: true },
    action: { type: 'play' },
    result: { hours: 0, minutes: 0, seconds: 0, paused: false }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, paused: true },
    action: { type: 'play' },
    result: { hours: 9, minutes: 59, seconds: 59, paused: false }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 0, paused: false },
    action: { type: 'stop' },
    result: { hours: 0, minutes: 0, seconds: 0, paused: true }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, paused: false },
    action: { type: 'stop' },
    result: { hours: 9, minutes: 59, seconds: 59, paused: true }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, paused: true },
    action: { type: 'stop' },
    result: { hours: 0, minutes: 0, seconds: 0, paused: true }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 0, paused: true },
    action: { type: 'stop' },
    result: { hours: 0, minutes: 0, seconds: 0, paused: true }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 1, paused: true },
    action: { type: 'stop' },
    result: { hours: 0, minutes: 0, seconds: 0, paused: true }
  },
];


describe('Tenet3 Test Suit', () => {
  it('Fizz buzz comparison testing', () => {
    for (let i = 0; i < fizzTestSequence.length; i += 1) {
      const { time, fizz, buzz, result } = fizzTestSequence[i];
      expect(fizzBuzzCompare(time, fizz, buzz)).toMatchObject(result);
    }
  });

  it('Reducer increment testing', () => {
    for (let i = 0; i < reducerIncrementSequence.length; i += 1) {
      const { state, action, result } = reducerIncrementSequence[i];
      expect(reducer(state, action)).toMatchObject(result);
    }
  });

  it('Reducer paused testing', () => {
    for (let i = 0; i < reducerPausedSequence.length; i += 1) {
      const { state, action, result } = reducerPausedSequence[i];
      expect(reducer(state, action)).toMatchObject(result);
    }
  });

  it('Reducer button testing', () => {
    for (let i = 0; i < reducerButtonSequence.length; i += 1) {
      const { state, action, result } = reducerButtonSequence[i];
      expect(reducer(state, action)).toMatchObject(result);
    }
  });
});
