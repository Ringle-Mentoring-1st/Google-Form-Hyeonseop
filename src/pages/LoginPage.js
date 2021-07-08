import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import InputText from '../components/InputText';
import Button from '../components/Button'
import classNames from 'classnames';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 10%;
`

const InputBox = styled.div`
  width: 400px;
  height: 70px;
  margin-bottom: 30px;
`;

const ButtonsContainer = styled.div`
  width: 400px;
  height: 70px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ErrorMsg = styled.span`
  color: red;
  font-size: 0.75rem;
`;


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const [loading, setLoading] = useState(false);

  const checkValid = () => {
    if(email.trim().length < 1) {
      setErrMsg('이메일을 입력해주세요.');
      return false;
    }
    if(pw.trim().length < 1) {
      setErrMsg('패스워드를 입력해주세요.');
      return false;
    }
    return true;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(loading) return;
    setLoading(true);

    if(checkValid()) {
      setErrMsg('');
      
      //로그인 하기
    }

    setLoading(false);
  };

  return (
    <Container>
      <LoginForm onSubmit={onSubmit}>
        <h2>로그인</h2>
        <InputBox>
          <InputText 
            placeholder="이메일" 
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <InputText 
            placeholder="패스워드" 
            type="password" 
            value={pw}
            onChange={(e)=>{setPw(e.target.value)}}
          />
        </InputBox>
        <ButtonsContainer>
          <Link to="/users/signup">계정 만들기</Link>

          <Button 
            className={classNames({"loading": loading})}
            value = {
              loading
              ? <i className="fas fa-circle-notch fa-spin"></i>
              : '로그인'
            } 
          />
        </ButtonsContainer>
        <ErrorMsg>{errMsg}</ErrorMsg>
      </LoginForm>
    </Container>
  );
}
