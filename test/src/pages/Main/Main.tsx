import React from 'react';
import Documents from '../../components/documents/Documents';
import FAQ from '../../components/faq/FAQ';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MainScreen from '../../components/main-screen/MainScreen';
import News from '../../components/news/News';
import Registers from '../../components/registers/Registers';

export default function Main() {
  return (
    <>
      <Header></Header>
      <MainScreen></MainScreen>
      <Registers></Registers>
      <News></News>
      <Documents></Documents>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  );
}
