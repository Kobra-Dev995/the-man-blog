'use client';

import Content from './components/Content';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Header from './components/Header';


export default function Home() {
  return (
    <>
      <Drawer>
        <Header />
        <Content />
        <Footer />
      </Drawer>
    </>
  );
}
