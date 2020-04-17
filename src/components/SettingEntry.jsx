
// Package dependencies
import React from 'react';
import styled from 'styled-components';

// Component
export default function SettingEntry({ text, data, update }) {
  return (
    <Container>
      <Label>{text}</Label>
      <Form value={data} onChange={(e) => { update(e.target.value); }} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.p`
  font-size: 18px;
  margin-right: 5px;
`;

const Form = styled.input`
  width: 100px;
  padding: 8px 16px;
  border: 1px solid ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border-radius: 5px;
  font-size: 16px;
  margin-right: 40px;
`;
