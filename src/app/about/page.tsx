import Navbar from "@/components/Layouts/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About" 
        shortText={""} 
        bgImg={"/images/work-details-2"}      />

      <div className="ptb-120">
        <div className="container">
          <div className="main-textarea"> 
            <p>UNITORQ group founded in 1997, positioned itself as the pioneer of innovation in designing, development & manufacturing of industrial Electromagnetic clutches, Brakes, Clutch & Brake combinations and allied products With five thousand (5000) square meter of production area engaging 150 employees capable of producing 1.5 lakh units per year,we are serving to various segments of domestic and overseas industries and has lot of renowned brands as our customers.
“Unitorq” is one of the most recognized brands of AC & DC Brakes in India having our manufacturing plants – two at Udaipur, (Rajasthan) and one at Latur, (Maharashtra). We have compelling presence in AC & DC Brakes all over India. We have registered noticeable growth in sales year over year.
With our Head-Office at Udaipur and regional sales & service offices in Delhi, Mumbai, Kolkata, Ahmedabad & Latur, we have a large chain of sales network including twenty eight (28) dealers in more than sixteen (16) states of India to give required support to our customers.
Unitorq is specialized in designing, developing and manufacturing high performance,configurable standard products right from clutches and brakes, from simple to complex applications, with wide operational scope like Navy Deck Machinery to highly sophisticated Rocket Launchers, Tyre Industry, Cement Plants, Wind Turbines, Textile machines, Printing Machines, Marble Cutting Machines, Stone polishing Machines, Steel Plant Machineries, Packaging Machines, Pick & Place Robots, Conveyors, Paper Machines, Coil Winding Machines, Material Handling Equipments, Cranes & Hoistsand many more.
We have dedicated department which is engaged in further development of series of products and optimization of customized solutions based on experience and the latest findings from applications.
Unitorq has a system of Global purchasing of components and sub-assemblies with Modern Manufacturing and warehouse technology, as well asCNC & VMC machinery Installed thus offering perfect conditions for fast assembly of different products with quick delivery times. We source out best of raw material from India and abroad.
Unitorq Brand is well known for its customer satisfaction and this could only be possible through our strong technical experts who are continuously achieving their best in terms of accuracy & quality standardsthus making us a major player in the industry circle.</p>

          </div>
        </div>
      </div>
    

      <Footer />
    </>
  );
}
