export const LoginJsx = `
import { React, useState } from 'react';
import './LoginComponent.css';

function LoginComponent() {
  
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpDisplay, setOtpDisplay] = useState('none');
  const onChangeId = (e) => setId(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeOtp = (e) => setOtp(e.target.value);

  const onClick = () => {
    setId(id);
    setPassword(password);
    setOtpDisplay('block');
    console.log(id, password, otpDisplay);
  };

  const LoginSuccess = () => {
    setOtp(otp);
    console.log('Login Success');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (otpDisplay === 'block') {
        LoginSuccess();
      } else {
        onClick();
      }
    }
  };

  return (
    <div id="login">
      <h1 className="project-name">NWAI-UI</h1>
      <p className="sub-name">NWAI UI Template</p>
      <div style={{width : '100%', display : 'flex', flexDirection : 'column', flexGrow : 1, justifyContent:'center', alignItems: 'center'}}>
        <p className="comment">kate 계정으로 로그인하세요.</p>
        {/* 사번 입력 */}
        <input
          className="inputBox"
          value={id}
          placeholder="사번"
          onChange={onChangeId}
        />
        {/* 비밀번호 입력 */}
        <input
          type="password"
          className="inputBox"
          value={password}
          placeholder="비밀번호"
          onChange={onChangePassword}
          onKeyPress={onKeyPress}
        />
        <br />
        {/* OTP 번호 입력, 로그인 버튼 클릭시에만 노출 */}
        <input
          value={otp}
          placeholder="OTP번호(6자리)"
          className="inputBox"
          onChange={onChangeOtp}
          onKeyPress={onKeyPress}
          style={{ display: {otpDisplay}, marginBottom:'0.5em'}}
        />
        <button className="loginButton" onClick={otpDisplay === 'none' ? onClick : LoginSuccess}>로그인</button>
        <p className="team-name">ⓒKT 네트워크AI개발팀</p>
      </div>
    </div>
  );
}

export default LoginComponent;
`;

export const LoginCss = `
#login{
    width: 300px;
    height: 350px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items:center ;
    background: #E2E4F3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding : 20px;
    border-radius: 10px;
}

.inputBox{
    width: 75%;
    min-height: 2em;
    margin : 2px;
}

.loginButton{
    background-color: #1A1D36;
    text-align: center;
    color: white;
    width: 77%;
    min-height: 2.5em;
}

.project-name{
    color: var(--darkNavMint);
    font-size : 16pt;
    margin-block-start: 1em;
    margin-block-end: 0;
}

.sub-name{
    color: black;
    font-size : x-small;
    margin-block-start: 0.2em;
}

.comment{
    color: grey;
    font-size : x-small;
    margin-block-end: 0.1em;
    margin-block-start: 1em;
    width: 75%
}

.team-name{
    color: black;
    font-size : small;
    margin-block-start: 2em;
}
`;
