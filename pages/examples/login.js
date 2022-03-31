import React from 'react';
import Layout from "../../Component/Layout";
import Head from "next/head";
import styled from '@emotion/styled';
import LoginComponent from "../../Component/Display/LoginComponent";
import CodeTab from '../../Component/CodeTab';
import {LoginJsx, LoginCss} from '../../Component/Source/LoginSrc';

const CodePre = styled.pre`
  background-color : #1A1D36;
  padding : 10px;
  color : white;
  border-radius : 10px;
`

function Login() {
  return (
    <>
      <Layout>
        <Head>
          <meta charSet='utf-8' />
          <title>Login example | NWAI-UI</title>
        </Head>
        <h1>로그인</h1>
        <div className='backDiv'>
          <LoginComponent />
        </div>

        <CodePre>
          <CodeTab jsxCode={LoginJsx} cssCode={LoginCss}/>
        </CodePre>
      </Layout>
    </>
  );
}

export default Login;
