
// Package dependencies
import React from 'react';
import styled from 'styled-components';
import SettingEntry from './SettingEntry';
import NavButton from './NavButton';

export function valueCheck(num) {
  const value = parseInt(num);
  return (value >= 2 && value <= 10 && value.toString() === num);
}

// Component
export default function Settings({ page, setPage, fizz, setFizz, buzz, setBuzz }) {
  return (
    <Container page={page}>
      <Instructions>
        Please enter a fizz and buzz time in seconds.
        <strong>  Values should be 2 to 10, inclusive.</strong>
      </Instructions>
      <EntryContainer>
        <SettingEntry text="Fizz:" data={fizz} update={setFizz} />
        <SettingEntry text="Buzz:" data={buzz} update={setBuzz} />
      </EntryContainer>
      <NavButton
        text="Go to Timer >"
        condition={valueCheck(fizz) && valueCheck(buzz)}
        error="Please set Fizz and Buzz to integers between 2 and 10"
        update={() => setPage('timer')}
      />
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
  opacity: ${(props) => (props.page === 'settings' ? 1 : 0)};
  z-index: ${(props) => (props.page === 'settings' ? 1 : 0)};
`;

const Instructions = styled.p`
  font-size: 30px;
  margin-bottom: 40px;
`;


const EntryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;
