import React from 'react';
import { FeaturesTitle } from '@/components/Features/FeaturesTitle';
import { Welcome } from '../components/Welcome/Welcome';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { HeaderMenu } from '@/components/Navbar/HeaderMenu';
export default function HomePage() {
  return (
    <>
      <HeaderMenu />
      <Welcome />
      <FeaturesTitle/>
      <GetInTouch />
      <FooterSocial />
    </>
  );
}