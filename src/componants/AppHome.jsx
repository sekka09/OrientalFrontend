import { useEffect, useState } from "react"
import React from "react";
export default function AppHome (props){
    const [currentimg,setcurrentimg] = useState('')
    const [imgarr,setimgarr] = useState([
                        "https://static.vecteezy.com/system/resources/previews/000/664/483/large_2x/abstract-blue-banner-design-vector.jpg" ,
                        "https://static.vecteezy.com/system/resources/previews/000/664/751/original/vector-abstract-low-poly-banner-design.jpg" ,
                        "https://cdn.thegameawards.com/frontend/jpegs/mid-section-bg_24.jpg" ,
                        "https://cdn.thegameawards.com/frontend/jpegs/mid-section-bg_24.jpg" 
    ])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/Banner`,{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },credentials: 'include'}).then((res)=>res.json()).then((data)=>{let tab = data.filter((element) => element.selected === true)[0]; console.log(tab); let tab2 = [tab.img1,tab.img2,tab.img3,tab.img4]; setimgarr(tab2);seturl(tab.img1)})
       
    },[])
    useEffect(()=>{
        let i=0;
       const interval = setInterval(() => {
        seturl(imgarr[i]);  
        if (i === imgarr.length - 1) {
          i = 0; 
        } else {
          i++; 
        }
      }, 5000);
            return () => clearInterval(interval);
    },[imgarr])
  
    
    
    function getSiblings (e) {
        e.classList.add('h-24')
        e.classList.add('w-24')
        e.classList.add('shadow-lg')
        e.classList.add('shadow-white')
        setcurrentimg(e.id);
       
       
        let sibling  = e.parentNode.firstChild;
        
        while (sibling) {
            if (sibling.nodeType === 1 ) {
                sibling.classList.remove('h-24')
                sibling.classList.remove('w-24')
                sibling.classList.remove('shadow-lg')
                sibling.classList.remove('shadow-white')
            }
            sibling = sibling.nextSibling;
        }
    };
    const [url,seturl]=useState(imgarr[0])
    return (
        <div id="Home" style={{backgroundImage : `url(${url})`,backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} className="flex-col place-items-center  ">
            
            
            <div className="p-12 text-white w-2/6 max-lg:w-full   z-0">
                <div className="py-12 ">
                    <span className="text-6xl font-bold">Oriental</span> <br /> <span className="text-gray-400 my-2">Premium Fragrances brand that offers both quality and long-lasting fragrances .</span>
                </div>
                <div className="flex pb-12 gap-2 ">
                 <a href="#Fragrences"> <button type="submit" className="h-16   w-44 bg-orange-300 text-xl opacity-90  hover:opacity-100 text-black font-bold hover:bg-orange-200 hover:border-4 border-orange-300 rounded-2xl">Shop Now</button>
            </a>      </div>
            
            </div>
            
            
            <div  className="h-32  flex gap-2 items-center ">
               {imgarr.map((element)=> 
             <img  onClick={(e)=>{seturl(e.target.src); getSiblings(e.target)}} className="h-16 cursor-pointer hover:h-24 hover:w-24 hover:shadow-lg transition duration-500  hover:shadow-white w-16 rounded-3xl" src={element} alt="" />
            ) }
            </div>
            
            

        </div>
    )
    
    
    
}