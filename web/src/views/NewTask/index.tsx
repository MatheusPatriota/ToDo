import React from 'react';
import Footer from '../../components/Footer';
import { Header } from '../../components/Header';

function NewTaskPage() {

  return (
    // isso é um fragment
    <>
      <Header/>
      <body>
        Oi mundo eu sou o corpo, sou exclusivo
      </body>
      <Footer/>
    </>
  );

}

export { NewTaskPage };