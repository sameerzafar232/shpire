import Image from "next/image";

import Hero from "./(components)/Hero";
import New from "./(components)/New";
import Shop from "./(components)/Shop";
import Styled from "./(components)/Styled";
import Footer from "./(components)/Footer";
import ScrollToTopButton from "./(components)/Scroller";

export default function Home() {
  return (
   <>
     <Hero/>
   <New/>
   <Shop/>
   <Styled/>
   <Footer/>
   <ScrollToTopButton/>
   </>
  );
}
