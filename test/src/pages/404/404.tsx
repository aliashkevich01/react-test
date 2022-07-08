import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

export default function Page404() {
  return (
    <>
      <Header />
      <div>
        404 error: route is incorrect
        <Link to="/">Home page</Link>
      </div>
      <Footer />
    </>
  );
}
