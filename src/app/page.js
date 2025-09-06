"use client";

import Link from 'next/link';
import Banner from "../components/Banner";
import SectionInicio1 from '../components/SectionInicio1.jsx';
import SectionInicio2 from "../components/SectionInicio2";
import SectionInicio3 from "../components/SectionInicio3";
import SectionInicio4 from "../components/SectionInicio4";

export default function Home() {
  return (
    <>
      <div className="container-fluid mx-auto flex flex-col items-center">
        <Banner />
        <SectionInicio1 />
        <SectionInicio2 />
        <SectionInicio3 />
        <SectionInicio4 />
        
        
      </div>
    </>
  );
}
