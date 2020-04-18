import { fizzBuzzCompare } from './components/FizzBuzz';
import { reducer } from './components/Timer';
import { valueCheck } from './components/Settings';

const fizzTestSequence = [
  {
    time: { hours: 0, minutes: 0, seconds: 2, deciseconds: 5, paused: false },
    fizz: 2,
    buzz: 2,
    result: { buzzComp: true, fizzComp: true }

  },
  {
    time: { hours: 0, minutes: 0, seconds: 2, deciseconds: 5, paused: false },
    fizz: 2,
    buzz: 3,
    result: { buzzComp: false, fizzComp: true }
  },
  {
    time: { hours: 0, minutes: 0, seconds: 3, deciseconds: 5, paused: false },
    fizz: 2,
    buzz: 2,
    result: { buzzComp: false, fizzComp: false }
  },
  {
    time: { hours: 0, minutes: 0, seconds: 3, deciseconds: 5, paused: false },
    fizz: 2,
    buzz: 3,
    result: { buzzComp: true, fizzComp: false }
  },
  {
    time: { hours: 9, minutes: 47, seconds: 2, deciseconds: 5, paused: false },
    fizz: 5,
    buzz: 10,
    result: { buzzComp: false, fizzComp: false }
  },
  {
    time: { hours: 9, minutes: 47, seconds: 2, deciseconds: 5, paused: false },
    fizz: 8,
    buzz: 2,
    result: { buzzComp: true, fizzComp: false }

  },
];

const reducerIncrementSequence = [
  {
    state: { hours: 0, minutes: 0, seconds: 0, deciseconds: 9, paused: false },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 0, seconds: 1, deciseconds: 0, paused: false }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 59, deciseconds: 9, paused: false },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 1, seconds: 0, deciseconds: 0, paused: false }
  },
  {
    state: { hours: 0, minutes: 1, seconds: 0, deciseconds: 1, paused: false },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 1, seconds: 0, deciseconds: 2, paused: false }
  },
  {
    state: { hours: 0, minutes: 59, seconds: 59, deciseconds: 9, paused: false },
    action: { type: 'increment' },
    result: { hours: 1, minutes: 0, seconds: 0, deciseconds: 0, paused: false }
  },
  {
    state: { hours: 1, minutes: 0, seconds: 0, deciseconds: 9, paused: false },
    action: { type: 'increment' },
    result: { hours: 1, minutes: 0, seconds: 1, deciseconds: 0, paused: false }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, deciseconds: 59, paused: false },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: false }
  }
];

const reducerPausedSequence = [
  {
    state: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: true },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: true }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 59, paused: true },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 0, seconds: 59, paused: true }
  },
  {
    state: { hours: 0, minutes: 1, seconds: 0, deciseconds: 0, paused: true },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 1, seconds: 0, deciseconds: 0, paused: true }
  },
  {
    state: { hours: 0, minutes: 59, seconds: 59, deciseconds: 5, paused: true },
    action: { type: 'increment' },
    result: { hours: 0, minutes: 59, seconds: 59, deciseconds: 5, paused: true }
  },
  {
    state: { hours: 1, minutes: 0, seconds: 0, deciseconds: 0, paused: true },
    action: { type: 'increment' },
    result: { hours: 1, minutes: 0, seconds: 0, deciseconds: 0, paused: true }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, deciseconds: 0, paused: true },
    action: { type: 'increment' },
    result: { hours: 9, minutes: 59, seconds: 59, deciseconds: 0, paused: true }
  }
];

const reducerButtonSequence = [
  {
    state: { hours: 0, minutes: 0, seconds: 0, deciseconds: 5, paused: true },
    action: { type: 'play' },
    result: { hours: 0, minutes: 0, seconds: 0, deciseconds: 5, paused: false }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, deciseconds: 5, paused: true },
    action: { type: 'play' },
    result: { hours: 9, minutes: 59, seconds: 59, deciseconds: 5, paused: false }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: false },
    action: { type: 'stop' },
    result: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: true }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, deciseconds: 5, paused: false },
    action: { type: 'stop' },
    result: { hours: 9, minutes: 59, seconds: 59, deciseconds: 5, paused: true }
  },
  {
    state: { hours: 9, minutes: 59, seconds: 59, deciseconds: 5, paused: true },
    action: { type: 'stop' },
    result: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: true }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: true },
    action: { type: 'stop' },
    result: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: true }
  },
  {
    state: { hours: 0, minutes: 0, seconds: 1, deciseconds: 5, paused: true },
    action: { type: 'stop' },
    result: { hours: 0, minutes: 0, seconds: 0, deciseconds: 0, paused: true }
  },
];

const valueCheckSequence = [
  {
    num: '2',
    result: true
  },
  {
    num: '5',
    result: true
  },
  {
    num: '10',
    result: true
  },
  {
    num: '1',
    result: false
  },
  {
    num: '11',
    result: false
  },
  {
    num: "",
    result: false
  },
  {
    num: ' ',
    result: false
  },
  {
    num: 'a',
    result: false
  },
  {
    num: 'z',
    result: false
  },
  {
    num: '2.5',
    result: false
  },
  {
    num: '2.000000000001',
    result: false
  },
  {
    num: '1.999999999',
    result: false
  },
  {
    num: '1.999999999',
    result: false
  },
  {
    num: '-1',
    result: false
  },
  {
    num: 'alphabet',
    result: false
  },
  {
    num: '5.5',
    result: false
  },
  {
    num: '8h',
    result: false
  }
];

function timeString(time, fizz, buzz) {
  const { hours, minutes, seconds, deciseconds, paused } = time;
  let str = `time:${hours}:${minutes}:${seconds}:${deciseconds} play:${paused}`;
  str = fizz === undefined ? str : `${str} fizz:${fizz} buzz:${buzz}`;
  return str;
}

describe('Fizz buzz comparison testing', () => {
  for (let i = 0; i < fizzTestSequence.length; i += 1) {
    const { time, fizz, buzz, result } = fizzTestSequence[i];
    it(timeString(time, fizz, buzz), () => {
      expect(fizzBuzzCompare(time, fizz, buzz)).toMatchObject(result);
    });
  }
});

describe('Reducer increment testing', () => {
  for (let i = 0; i < reducerIncrementSequence.length; i += 1) {
    const { state, action, result } = reducerIncrementSequence[i];
    it(timeString(state), () => {
      expect(reducer(state, action)).toMatchObject(result);
    });
  }
});

describe('Reducer paused testing', () => {
  for (let i = 0; i < reducerPausedSequence.length; i += 1) {
    const { state, action, result } = reducerPausedSequence[i];
    it(timeString(state), () => {
      expect(reducer(state, action)).toMatchObject(result);
    });
  }
});

describe('Reducer button testing', () => {
  for (let i = 0; i < reducerButtonSequence.length; i += 1) {
    const { state, action, result } = reducerButtonSequence[i];
    it(timeString(state), () => {
      expect(reducer(state, action)).toMatchObject(result);
    });
  }
});

describe('Value check testing', () => {
  for (let i = 0; i < valueCheckSequence.length; i += 1) {
    const { num, result } = valueCheckSequence[i];
    it(num, () => {
      expect(valueCheck(num)).toEqual(result);
    });
  }
});
