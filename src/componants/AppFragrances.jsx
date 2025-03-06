import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
export default function AppFragrances (props){
    
    const [filterResults,setfilterResults]=useState([
        {
            _id : "0",
            img : "https://westock-europe.fr/wp-content/uploads/2020/11/Parfum-homme-Le-male-JEAN-PAUL-GAULTIER-75ml.jpg",
            name : "jpg le male",
            price : 12
        },
        {
            _id : "1",
            img : "https://th.bing.com/th/id/OIP.m8gHiYf4knSYSc7lPWzR4gHaIa?rs=1&pid=ImgDetMain",
            name : "jpg le beau",
            price : 13
        },
        {
            _id : "2",
            img : "https://th.bing.com/th/id/R.38b1f6744e9e51f9a9a705c644d0ccaa?rik=kRKEAZUseQw7wg&riu=http%3a%2f%2fc.shld.net%2frpx%2fi%2fs%2fi%2fspin%2f10130226%2fprod_1886871412%3f%3fhei%3d64%26wid%3d64%26qlt%3d50&ehk=YeByhLFp%2blnPoXPEHB%2fTMbNtsu1kZ1qKjdaC9wg2Gg0%3d&risl=&pid=ImgRaw&r=0",
            name : "Dior Homme intense",
            price : 77
        },
        {
            _id : "3",
            img : "https://th.bing.com/th/id/OIP.4NXznXEtsVcv4whOgXI43QAAAA?rs=1&pid=ImgDetMain",
            name : "Dior savage elixir",
            price : 52
        }
    ])
    const [filter,setfilter]=useState("")
    function getSiblings (e) {
        e.style.backgroundColor = "#f2a366";
        e.style.color = "black";
        setfilter(e.id);
       
       
        let sibling  = e.parentNode.firstChild;
        
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                sibling.style.removeProperty('background-color');
                sibling.style.removeProperty('color');
            }
            sibling = sibling.nextSibling;
        }
    };
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/fragrences`).then((data)=>data.json()).then((data)=>{
            setfilterResults(data)
        }).catch((e)=>{console.log(e)})
    },[])
    
    useEffect(()=>{let array = [...filterResults];
        switch (filter){
            
            case "Name" : {array.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
                }); break;
                }
                case "Latest" : {array.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                );
                    break;}
                case "Price" : {
                    setfilterResults(array.sort((a,b)=> a.price - b.price))
                    console.log(filterResults)
                    break;
                }
                default : {array.sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();
                    if (nameA < nameB) return -1;
                    if (nameA > nameB) return 1;
                    return 0;
                    }); break;}
                    
        };
        
        setfilterResults([...array]);

    },[filter])
    return (
        <div id="Fragrences" className="flex-col  place-items-center content-center text-white p-12">
            <div className="my-12 w-full flex ">
           <h1 style={{color : "#f2a366"}} className="text-7xl max-lg:text-5xl font-bold px-8"> Fragrances</h1>
            </div> 
            <div className="w-full flex flex-wrap justify-between px-12 my-12">
                <div id="Name" onClick={(e)=>{ getSiblings(e.target);   }} className="py-2 cursor-pointer text-center px-6 rounded-xl m-2 hover:border-2 hover:border-orange-300  text-lg font-bold" >Name</div>
                <div id="Price" onClick={(e)=>{ getSiblings(e.target);   }} className="py-2 cursor-pointer text-center px-6 rounded-xl m-2 hover:border-2 hover:border-orange-300 text-lg font-bold ">Price : Low to High</div>
                <div id="Latest" onClick={(e)=>{ getSiblings(e.target);   }} className="py-2 cursor-pointer text-center px-6 rounded-xl m-2 hover:border-2 hover:border-orange-300 text-lg font-bold ">Latest </div>
                 </div>

            
                <div className="flex justify-evenly gap-6 my-12 flex-wrap md:px-32">
                     
               {filterResults.map(((element)=> <div key ={element._id} className="my-8 flex-col place-items-center content-center ">
               <Link  onClick={()=>{props.setNavProd(true)}} to={`/fragrences/${element._id}`}><img className="h-72 w-72 mb-3 cursor-pointer " src={element.img1} alt="" /></Link>
               
                    <Link  onClick={()=>{props.setNavProd(true)}} className="hover:border-b-2 border-orange-300 hover:text-orange-300 text-xl font-medium" to={`/fragrences/${element._id}`}>{element.name}</Link>
                </div>)) 
               } 
                </div>
        </div>
    )
}