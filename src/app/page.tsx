'use client';

import React from 'react';
import Home from '@/components/Home';
import Fillter from '@/components/Fillters';

export default function App() {
  return (
    <main className={''}>
      <Home>
        <Fillter />
      </Home>
    </main>
  );
}
