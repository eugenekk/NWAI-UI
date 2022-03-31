import Layout from "../../Component/Layout";
import Head from "next/head";
import DarkThemeComponent from "../../Component/Display/DarkThemeComponent";
import LightThemeComponent from "../../Component/Display/LightThemeComponent";

function Color() {
  return (
    <>
      <Layout>
        <Head>
          <meta charSet='utf-8' />
          <title>Color | NWAI-UI</title>
        </Head>
        <h1>테마 및 컬러</h1>
        <h2>Light Theme</h2>
        <div className='backDiv'>
          <LightThemeComponent />
        </div>
        <h2>Dark Theme</h2>
        <div className='backDiv'>
          <DarkThemeComponent />
        </div>
      </Layout>
    </>
  );
}

export default Color;
