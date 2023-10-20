'use client';

import Home from '@/components/Teacher/Home';
import React from 'react';
import Fillters from '@/components/Teacher/Fillters';
export default function App() {
  return (
    <div className={'text-black'}>
      <Home>
        <Fillters />
      </Home>
    </div>
  );
}
