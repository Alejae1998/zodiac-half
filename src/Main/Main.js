import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard';
import { zodiac } from '../data';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* import the ZodiacCard component */}
      {/* get the zodiac array from props */}
      {zodiac.map((zodiac, i) => (
        <ZodiacCard {...zodiac} key={zodiac.name + i} />
      ))}
    </main>
  );
}
