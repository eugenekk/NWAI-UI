import Layout from "../Component/Layout";
import Head from "next/head";
import styled from '@emotion/styled';

const CodePre = styled.pre`
  background-color : #1A1D36;
  padding : 10px;
  color : white;
  border-radius : 10px;
`
const AnnotDiv = styled.div`
  color : green;
  font-style : italic;
`
function getstart() {
  return (
    <>
      <Layout>
        <Head>
          <meta charSet='utf-8' />
          <title>시작하기 | NWAI-UI</title>
        </Head>
        <div> 시작하기 입니다</div>
        <CodePre className="codeBox">
          <code>
            <AnnotDiv>// with npm</AnnotDiv>
            npm install @mui/material @emotion/react @emotion/styled<br/>
            <br/>
            <AnnotDiv>// with yarn</AnnotDiv>
            yarn add @mui/material @emotion/react @emotion/styled<br/>
          </code>
        </CodePre>
      </Layout>
    </>
  );
}

export default getstart;
