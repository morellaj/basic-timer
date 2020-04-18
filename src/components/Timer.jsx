
// Package dependencies
import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components';
import TimerButton from './TimerButton';
import NavButton from './NavButton';
import FizzBuzz from './FizzBuzz';

const initialTime = {
  deciseconds: 0,
  seconds: 0,
  minutes: 0,
  hours: 0,
  paused: true
};

export function reducer(state, action) {
  let { deciseconds, seconds, minutes, hours, paused } = state;
  if (action.type === 'increment' && !paused) {
    deciseconds += 1;
    if (deciseconds >= 10) {
      deciseconds = 0;
      seconds += 1;
      if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
        if (minutes >= 60) {
          minutes = 0;
          hours += 1;
          if (hours >= 10) {
            hours = 0;
          }
        }
      }
    }
    return { deciseconds, seconds, minutes, hours, paused };
  } if (action.type === 'reset') {
    return { deciseconds: 0, seconds: 0, minutes: 0, hours: 0, paused: true };
  } if (action.type === 'play' && paused) {
    return { deciseconds, seconds, minutes, hours, paused: false };
  } if (action.type === 'stop') {
    if (!paused) {
      return { deciseconds, seconds, minutes, hours, paused: true };
    }
    return { deciseconds: 0, seconds: 0, minutes: 0, hours: 0, paused: true };
  }

  return state;
}


// Component
export default function Timer({ page, setPage, fizz, buzz }) {
  const [time, setTime] = useReducer(reducer, initialTime);

  useEffect(() => {
    const id = setInterval(() => setTime({ type: 'increment' }), 100);
    return () => {
      clearInterval(id);
    };
  }, []);

  const secondsDisplay = time.seconds >= 10 ? time.seconds : `0${time.seconds}`;
  const minutesDisplay = time.minutes >= 10 ? time.minutes : `0${time.minutes}`;
  return (
    <Container page={page}>
      <NavButtonContainer>
        <NavButton
          text="< Set Times"
          condition={time.paused}
          error="Please pause before returning to settings"
          update={() => setPage('settings')}
        />
      </NavButtonContainer>
      <Label>
        Time Elapsed
      </Label>
      <TimeDisplay>
        {`${time.hours}:${minutesDisplay}:${secondsDisplay}`}
      </TimeDisplay>
      <ButtonContainer>
        <TimerButton text="Start" color="#5CCC87" click={() => setTime({ type: 'play' })} />
        <TimerButton text="Stop / Reset" color="#E66666" click={() => setTime({ type: 'stop' })} />
      </ButtonContainer>
      <FizzBuzz time={time} fizz={fizz} buzz={buzz} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.page === 'timer' ? 1 : 0)};
  z-index: ${(props) => (props.page === 'timer' ? 1 : 0)};
`;

const NavButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Label = styled.p`
  font-size: 30px;
  margin-bottom: 50px;
`;

const TimeDisplay = styled.div`
  font-size: 30px;
  font-weight: bold;
  border: 2px solid ${({ theme: { color } }) => color};
  border-radius: 5px;
  width: 640px;
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  padding: 28px;
  margin-bottom: 50px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 65px;
  display: flex;
  justify-content: center;
`;
