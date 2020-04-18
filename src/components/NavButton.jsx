
// Package dependencies
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Component
export default function NavButton({ text, condition, error, update }) {
  const [warning, setWarning] = useState(false);

  function handleClick() {
    if (condition) {
      setWarning(false);
      update();
    } else {
      setWarning(true);
    }
  }

  useEffect(() => {
    const id = setTimeout(() => setWarning(false), 5000);
    return () => {
      clearTimeout(id);
    };
  }, [warning]);

  return (
    <>
      <Button onClick={handleClick} warning={warning}>
        {text}
      </Button>
      <WarningText warning={warning}>
        {error}
      </WarningText>
    </>
  );
}

const Button = styled.div`
  border: 2px solid ${({ warning, theme: { color } }) => (warning ? 'red' : color)};
  color: ${({ warning, theme: { color } }) => (warning ? 'red' : color)};
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: border .5s, color .5s;
  border-radius: 5px;
`;

const WarningText = styled.div`
  margin-top: 5px;
  font-weight: bold;
  color: red;
  cursor: default;
  opacity: ${({ warning }) => (warning ? 1 : 0)};
  transition: opacity .5s;
`;
