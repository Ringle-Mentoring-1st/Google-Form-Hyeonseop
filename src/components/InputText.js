import React, {useState} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border-color: #e7e7e7;
  font-size: 1.1rem;
  z-index: 2;
  padding: 5%;

  &:focus {
    outline: 1px solid #327be9
    outline-radius: 10px;
  }
`

const Placeholder = styled.div`
  position: relative;
  display: inline-box;
  color: #7d7d7d;
  &.active {
    color: #327be9;
  }
  top: 12%;
  left: 5%;
  font-size: 1rem;
  background-color: white;
  z-index: 1;
  padding: 0px 10px;
`

export default function InputText({type, placeholder, onChange}) {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Placeholder className={classNames({"active": active})}>
        {placeholder}
      </Placeholder>
      <Input 
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={()=>{setActive(true)}}
        onBlur={(e)=>{setActive(false)}}
      />
    </Container>
  );
}