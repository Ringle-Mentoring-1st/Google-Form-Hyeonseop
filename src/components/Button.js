import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  width: 90px;
  height: 40px;
  background-color: #689eef;
  border-radius: 7%;
  color: #fffcff;
  font-size: 1rem;
  cursor: pointer;
  &.loading {
    cursor: wait;
  }
`

export default function Button({value}) {
  return (
    <Container>{value}</Container>
  );
}

