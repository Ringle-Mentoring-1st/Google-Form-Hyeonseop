import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';
import InputText from '../components/InputText';
import Button from '../components/Button'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.form`
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

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [pwDup, setPwDup] = useState('');
  const [name, setName] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const checkValid = () => {
    if(email.trim().length < 5) {
      setErrMsg('이메일을 제대로 입력해주세요.');
    }
    if(pw.trim().length < 6) {
      setErrMsg('패스워드가 6자리 이상이어야 합니다.');
      return false;
    }
    if(pw !== pwDup) {
      setErrMsg(`'패스워드'와 '패스워드 확인'이 다릅니다.`);
      return false;
    }
    if(name < 2) {
      setErrMsg('이름이 2자리 이상이어야 합니다.');
    }
    return true;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if(checkValid()){
      setErrMsg('');

      const payload = {
        email, name
      };

      // 회원가입 하기.

      console.log(payload);
    }
    
    setLoading(false);
  }

  return (
    <Container>
      <SignupForm onSubmit={onSubmit}>
        <h2>회원가입</h2>
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
        <InputBox>
          <InputText 
            placeholder="패스워드 확인" 
            type="password" 
            value={pwDup}
            onChange={(e)=>{setPwDup(e.target.value)}}
          />
        </InputBox>
        <InputBox>
          <InputText 
            placeholder="이름" 
            type="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </InputBox>
        <ButtonsContainer>
          <Link to="/users/login">로그인 하기</Link>
          <Button 
            className={classNames({"loading": loading})}
            value = {
              loading
              ? <i className="fas fa-circle-notch fa-spin"></i>
              : '계정 생성'
            } 
          />
        </ButtonsContainer>
        <ErrorMsg>{errMsg}</ErrorMsg>
      </SignupForm>
    </Container>
  );
}
