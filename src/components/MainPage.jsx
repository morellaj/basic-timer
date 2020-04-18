
// Package dependencies
import React, { useState } from 'react';
import styled from 'styled-components';
import Settings from './Settings';
import Timer from './Timer';


// Component
export default function MainPage() {
  const [page, setPage] = useState('settings');
  const [fizz, setFizz] = useState('');
  const [buzz, setBuzz] = useState('');
  return (
    <Container>
      <Timer
        page={page}
        setPage={setPage}
        fizz={fizz}
        buzz={buzz}
      />
      <Settings
        page={page}
        setPage={setPage}
        fizz={fizz}
        setFizz={setFizz}
        buzz={buzz}
        setBuzz={setBuzz}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
