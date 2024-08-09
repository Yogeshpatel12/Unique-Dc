import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomeFour/MainBanner";
import Footer from "@/components/Layouts/Footer";
import Image from "next/image";


export default function Page() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Image   src="images/mainpage.jpg"
              
                  alt="about"
                  width={1640}
                  height={619}
             />
   
   
      <Footer />
    </>
  );
}
