"use client"
import { useEffect, useState } from "react";
import blog_data from "@/data/blog-data";

const UseTag = () => {

    const [sustainabilityDataCount, setSustainabilityDataCount] = useState(0);
    const [itDataCount, setItDataCount] = useState(0);

    useEffect(() => {
        // Filter data by tag
        const sustainabilityData=blog_data.filter(item=>item.tag==='sustainability');
        const itData=blog_data.filter(item=>item.tag==='IT');
        setSustainabilityDataCount(sustainabilityData.length);
        setItDataCount(itData.length);
      },[]);

      console.log(sustainabilityDataCount);

      return{
        sustainabilityDataCount,
        itDataCount,
      }

}

export default UseTag;