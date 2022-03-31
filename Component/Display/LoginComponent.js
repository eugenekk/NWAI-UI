import { React, useState } from 'react';
import st from './LoginComponent.module.css';
import PropTypes from 'prop-types';

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
    console.log(`${id},${password},${otpDisplay}`);
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
  
  const onClickInit = () => {
    setOtpDisplay('none')
  }

  return (
    <> 
      <button className="initBtn" onClick={onClickInit}>reset</button>
      <div className={st.loginWrapper}>
        <h1 className={st.projectName}>NWAI-UI</h1>
        <p className={st.subName}>NWAI UI Templates</p>
        <div style={{width : '100%', display : 'flex', flexDirection : 'column', flexGrow : 1, justifyContent:'center', alignItems: 'center'}}>
          <p className={st.comment}>kate 계정으로 로그인하세요.</p>
          {/* 사번 입력 */}
          <input
            className={st.inputBox}
            value={id}
            placeholder="사번"
            onChange={onChangeId}
          />
          {/* 비밀번호 입력 */}
          <input
            type="password"
            className={st.inputBox}
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
            className={st.inputBox}
            onChange={onChangeOtp}
            onKeyPress={onKeyPress}
            style={{ display: `${otpDisplay}`, marginBottom:"0.5em"}}
          />
          <button className={st.loginButton} onClick={otpDisplay === 'none' ? onClick : LoginSuccess}>로그인</button>
          <p className={st.teamName}>ⓒKT 네트워크AI개발팀</p>
        </div>
      </div>
    </>
  );
}

LoginComponent.propTypes = {
  init : PropTypes.bool,
}
export default LoginComponent;
