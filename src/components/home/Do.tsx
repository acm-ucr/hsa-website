
import Image from "next/image";
import border from "@/public/border.svg"


const Do = () => {
  return( 
  <div className="w-full flex-row rounded-lg bg-hsa-tan-100">
      <div className = "w-3/4 h-3/4 flex-row p-8 space-y-5  ">
        <div className = "w-full text-4xl font-bold font-songMyung  text-hsa-blue-100">What We Do</div>
        <div className="w-full h-3/4
         text-md font-semibold text-hsa-gray-300 font-open-sans">
        <p>Our team is made up of a group of talented individuals who are passionate about technology and innovation.</p>
        </div>
      </div>
      <div className="w-full box-content-1 space-y-5">
      <Image src={border} alt="add image description here" className = "w-full object-contain"/>

      <div className="w-full h-16 bg-hsa-gray-200"></div>
      </div>
    
  </div>
    
    
    
    
    
    
    
    
  );
};

export default Do;
