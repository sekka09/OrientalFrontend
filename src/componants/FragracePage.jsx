import { useEffect, useState } from "react";
export default function FragrancePage (props){
  const [pathname,setpathname] = useState(window.location.pathname)
  const [promocode,setpromocode]=useState("")
  const [promoapp,setpromoapp]=useState(false)
  const [total,settotal] = useState(0)
  const [filteredArray,setfilteredArray]=useState()
  const [orderdone,setorderdone]= useState(false)
  const [ordersuccess,setordersuccess]= useState(false)
  const [promocodes,setpromocodes]=useState()
  const [livraisonarray,setlivraisonarray]= useState([
      {
          state : "blida",
          price : 500 
      },
      {
          state : "alger",
          price : 800
      }
  ])
  const [name,setname]=useState("");
  const [pn,setpn]=useState("");
  const [adresse,setadresse]=useState("");
  const [selected,setselected]=useState({
      willaya : "N/A",
      PrixB : 0,
      PrixAD : 0
  })
  const [fragrance,setfragrance]= useState({
    name : "",
    img : "",
  })
    const [filter,setfilter]=useState({
        ml : "50",
        price : "2500"
    })
    const [livraison,setlivraison]= useState("B")
    const [filterResults,setfilterResults]=useState([
        {
            id : "0",
            img : "https://westock-europe.fr/wp-content/uploads/2020/11/Parfum-homme-Le-male-JEAN-PAUL-GAULTIER-75ml.jpg",
         
        },
        {
            id : "1",
            img : "https://th.bing.com/th/id/OIP.m8gHiYf4knSYSc7lPWzR4gHaIa?rs=1&pid=ImgDetMain",
           
        },
        {
            id : "3",
            img : "https://th.bing.com/th/id/OIP.4NXznXEtsVcv4whOgXI43QAAAA?rs=1&pid=ImgDetMain",
           
        }
    ])
    const [imgdisplayed,setimgdisplayed]= useState("") 
    function getSiblings (e) {
        e.classList.add('bg-gray-400');
        e.classList.add('text-black');
        if (e.id==="50") setfilter({ml : "50", price :fragrance.price*0.5});  else setfilter({ml : "100", price :fragrance.price});
       
       
        let sibling  = e.parentNode.firstChild;
        
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                sibling.classList.remove('bg-gray-400');
                sibling.classList.remove('text-black');
            }
            sibling = sibling.nextSibling;
        }
    };
    function getSiblings2 (e) {
        e.classList.add('bg-gray-400');
        e.classList.add('text-black');
        if (e.id==="AD") setlivraison("AD");  else setlivraison("B");
       
       
        let sibling  = e.parentNode.firstChild;
        
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                sibling.classList.remove('bg-gray-400');
                sibling.classList.remove('text-black');
            }
            sibling = sibling.nextSibling;
        }
    };
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/CodesPromo`,
            {credentials: 'include'})
            .then((response)=> response.json())
        .then((data)=>{ setpromocodes(data) ; console.log(promocodes)})
        .catch((e)=>console.log(e))
        
    },[])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/Shipping`,{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },credentials: 'include'}).then((res)=>res.json()).then((data)=>{setlivraisonarray(data)})
          
    },[])
    useEffect( ()=>{
        let newString = pathname
         setpathname(newString)
        console.log(pathname)
        fetch(`${process.env.REACT_APP_API_URL}/api${pathname}`,
            {credentials: 'include'})
            .then((data)=>data.json())
        .then((data)=> {console.log(data); setfragrance(data); setimgdisplayed(data.img1) ; setfilterResults([{id : "0", img : data.img1},{id : "1", img : data.img2},{id : "2", img : data.img3 }])})
        .catch((e)=>console.log(e)) 
        
    },[])
    useEffect(()=>{ if (livraison === "B")
        settotal(parseFloat(filter.price)+parseFloat(selected.PrixB)); else settotal(parseFloat(filter.price)+parseFloat(selected.PrixAD))
    },[filter,selected])
    useEffect(()=>
        {
            setpromoapp(false)
        },[filter.ml])
       function codeused(id,sells){
            fetch(`${process.env.REACT_APP_API_URL}/api/CodesPromo/${id}`,{
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },credentials: 'include', method : "PATCH", body : JSON.stringify({
                    sells: sells,
                  })})
                .then((response)=> response.json())
            .then((data)=>{ console.log(data)})
            .catch((e)=>console.log(e))
        }
    return (
        <div className="flex-col place-items-center content-center">
            <div className="flex w-10/12 my-12 max-xl:w-full max-lg:flex-col justify-evenly items-center flew-wrap p-12 gap-4">
                <div className="lg:w-1/6 max-lg:hidden flex-col place-items-center">
                   {filterResults.map((element)=><img onClick={(e)=> {setimgdisplayed(e.target.src)}} className="h-12 hover:h-24 hover:w-24 w-12 my-6 rounded-lg cursor-pointer" src={element.img} alt="" />
                   ) }
                </div>
                <div className="lg:w-3/6 flex justify-center">
                    <img className="lg:h-96 lg:w-96 rounded-lg"  src={imgdisplayed}  alt="" />
                </div>
                <div className="lg:w-1/6 lg:hidden flex gap-4 justify-between"> 
                   {filterResults.map((element)=><img key={element.id} onClick={(e)=> {setimgdisplayed(e.target.src)}} className="h-12 w-12 my-6 rounded-lg bg-gray-500 cursor-pointer" src={element.img} alt="" />) }
                </div>  

                <div style={{background: "rgb(26, 26, 29)"}} className="lg:w-2/6 max-lg:w-full h-96  p-2 flex-col text-white rounded-md ">
               <div className="h-1/4 p-2"><h1  className="font-bold text-2xl">{fragrance.name}</h1>
                <span className="text-gray-400">{filter.ml} ml</span>
                <h1 className="text-xl font-medium">Price : {filter.price} </h1>
                </div> 
                <div className="flex h-2/4 justify-center items-center flex-wrap gap-4">
                    <div id="50" onClick={(e)=>{getSiblings(e.target)}} className="h-20 w-20 p-2 flex justify-center items-center border-2 rounded-lg cursor-pointer hover:bg-gray-400  hover:text-black  border-gray-400 font-medium">50ml</div>
                    <div id="100" onClick={(e)=>{getSiblings(e.target)}} className="h-20 w-20 p-2 flex justify-center items-center border-2 rounded-lg cursor-pointer  hover:bg-gray-400 hover:text-black  border-gray-400 font-medium">100ml</div>
                </div>
                <div className="h-1/4 flex justify-center items-center">
                    <a href="#OrderForm">
 <div 
                 className="w-48 shadow-md flex justify-center items-center shadow-black hover:bg-white bg-gray-400 h-12 text-black font-bold text-xl rounded-xl" 
                    
                 ><span >Order Now</span></div>
                    </a>
               
                </div>


                </div>

            </div>
            <div className="flex max-md:flex-col justify-evenly my-12 p-4 w-10/12">
                <div style={{background: "rgb(26, 26, 29)"}} className="p-8 w-2/5 max-md:w-full max-md:my-4 rounded-xl">
                <p className="text-white">
                    <h1 className="text-xl font-bold mb-1 ">Description :</h1> 
                    {fragrance.description}
                                         Fragrance Family: {fragrance.fragrancefamily} <br />

                    Instantly recognizable, it has become a genuine signature scent, unique* in its confident virility. <br />

                    Like a deep breath of fresh air, {fragrance.name} is a bold composition for a man who is true to himself.   <br />      
                    </p>
                </div>
                <div style={{background: "rgb(26, 26, 29)"}} className="p-8 w-2/5 max-md:w-full max-md:my-4 rounded-xl">
                    <p className="text-white">
                    <h1 className="text-xl font-bold mb-1 ">Delivery Type :</h1> 
                                    <span className="font-medium text-lg">Standard Delivery / توصيل عادي (الى المكتب)  </span>  <br />
                                    Delivery within 2-4 working days / التسليم خلال 2-4 أيام عمل
                                     <br />
                                    <span className="font-medium text-lg">Express Delivery</span>  <br />
                                    Home delivery./توصيل الطلبات للمنازل <br />        
                    </p>
                </div>
            </div>
            {! orderdone && <form id="OrderForm" className="w-full flex items-center justify-center">
            <div style={{background: "rgb(26, 26, 29)"}} action="" className="lg:w-4/6  py-4 px-12 flex-col place-items-center content-center rounded-md my-16 text-white ">
                <h1 className="text-3xl font-bold my-9">Order Form</h1>
                
            <div className="w-2/4 max-sm:w-full max-2xl:w-3/4 " action="">
            <div className="my-12">
                <div className="my-4 flex justify-between content-center max-lg:flex-col max-lg:place-items-center" >
                    <label htmlFor="FullName" className="font-medium text-xl ">Full Name / الاسم و اللقب</label> 
                    <input required value = {name} onChange={(e)=>{setname(e.target.value)}} type="text" name="FullName" id="FullName" className="h-10 w-96 rounded-md max-sm:w-full px-4 text-black"/>
                    </div>
                    <div className="my-4 flex justify-between content-center max-lg:flex-col max-lg:place-items-center">
                    <label className="font-medium text-xl " htmlFor="PhoneNumber">Phone Number / رقم الهاتف</label>
                    <input required value = {pn} onChange={(e)=>{setpn(e.target.value)}} type="number" name="PhoneNumber" id="PhoneNumber" className="h-10 w-96 max-sm:w-full rounded-md px-4 text-black" />
                    </div>
                <div className="my-4 flex justify-between content-center max-lg:flex-col max-lg:place-items-center">
                    <label className="font-medium text-xl " htmlFor="adresse">Adresse /العنوان</label>
                    <input required value = {adresse} onChange={(e)=>{setadresse(e.target.value)}} id="adresse" name="adresse" type="text" className="h-10 w-96 max-sm:w-full rounded-md px-4 text-black" /> 
                </div>
                <div className="my-4 gap-5 flex flex-wrap justify-between content-center max-lg:flex-col max-lg:place-items-center">
                    <label className="font-medium text-xl " htmlFor="adresse"> parfum's volume :  <span> {filter.ml} ml </span> </label>
                   < div className="flex justify-center gap-3 w-full">   <div id="50" onClick={(e)=>{getSiblings(e.target)}} className="h-20 w-20 p-2 flex justify-center items-center border-2 rounded-lg cursor-pointer hover:bg-gray-400  hover:text-black  border-gray-400 font-medium">50ml</div>
                    <div id="100" onClick={(e)=>{getSiblings(e.target)}} className="h-20 w-20 p-2 flex justify-center items-center border-2 rounded-lg cursor-pointer  hover:bg-gray-400 hover:text-black  border-gray-400 font-medium">100ml</div>
                </div></div>
                <div className="my-4 flex justify-evenly content-center max-lg:flex-col max-lg:place-items-center">
                    
                <div className="flex justify-center flex-wrap gap-3 items-center">  <div className="flex justify-center flex-wrap gap-3 items-center"> <div id="B" onClick={(e)=>{getSiblings2(e.target)}} className="h-20 w-20 p-2 flex justify-center items-center border-2 rounded-lg cursor-pointer hover:bg-gray-400  hover:text-black  border-gray-400 font-medium">Desk / المكتب</div>
                    <div id="AD" onClick={(e)=>{getSiblings2(e.target)}} className="h-20 w-20 p-2 flex justify-center items-center border-2 rounded-lg cursor-pointer  hover:bg-gray-400 hover:text-black  border-gray-400 font-medium">Home / المنزل</div>
                    </div>  <select  onChange={(e)=>{setselected(livraisonarray.find((element)=>element.willaya===e.target.value)); }} name="algerian-states" id="algerian-states "  className="h-10 w-96 max-sm:w-full rounded-md px-4 text-black">
                        <option className="hidden"    disabled selected>اختر الولاية</option>
                        {
                            livraisonarray.map((element)=>
                        <option value={element.willaya}>{element.willaya}</option>
                            )
                        }
                    </select>
            <h3 >shipping price : {livraison === "B" ? selected.PrixB : selected.PrixAD} DA</h3>
            
            </div>
                   

                </div> 
                </div>
                <div 
                  
                 
                  action="">  <div  style={{background :"rgb(10, 14, 19)"}} className="px-12 py-4 rounded-lg  max-sm:flex-col flex justify-center gap-4 items-center">
                        
                        <span className="text-gray-300">Add Code Promo</span>
                              <input value={promocode} onChange={(e)=>{setpromocode(e.target.value)}} className="rounded-full max-sm:w-48 text-black px-4 py-2" type="text" />
                        
                        <button type="submit" className="px-3 py-2 rounded-lg hover:bg-gray-300 hover:text-black border-2 border-gray-300"  onClick={async(e)=>{
                    e.preventDefault();
                    
                            const fa = promocodes.filter(obj => obj.code === promocode)
                            console.log(fa)
                         await setfilteredArray(fa[0]) ;
                            
                        const containsValue = fa.length > 0;
                        console.log(filteredArray)
                           
                      if (containsValue && !promoapp)  {setfilter({...filter, price :  parseFloat(filter.price) - parseFloat(filter.price)*fa[0].reduction}); setpromoapp(true)}
                      else if (promoapp) window.alert("code already applied !")
                      else window.alert("wrong code , or not existing.")
                  }}>submit</button>

                        
                    </div></div>
                    <div className="my-4 flex justify-center content-center">
                        <h1>total : {total}</h1>
                    </div>
                    <div className="flex justify-center items-center"><button type="submit" className="h-16 w-64 bg-white rounded-md hover:bg-gray-500 hover:text-white text-black" onClick={(e)=>{
                        e.preventDefault()
                        setorderdone(true)
                        fetch(`${process.env.REACT_APP_API_URL}/api/Order`,
                            {method : "post",headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },
                                credentials: 'include',
                                body : JSON.stringify({
                                name : name,
                                phonenumber : pn,
                                adresse :adresse,
                                shipping : livraison,
                                wilaya : selected.willaya,
                                volume : filter.ml,
                                total : total,
                                parfum : fragrance.name
                                }),  
                            })
                            .then(()=>{setordersuccess(true); if (promoapp) codeused(filteredArray._id,filteredArray.sells+1)})
                        .catch((e)=>console.log(e))

                    }}>Submit</button></div>
                    
                    
               
                

                
            </div>
        </div>
        </form>}
        {orderdone && <div style={{background : "rgb(26, 26, 29)"}} className="text-white rounded-xl max-sm:w-10/12 sm:w-5/6 ">
           {ordersuccess && <div>
            <div className="py-4 px-2 text-2xl  font-semibold">
                <h1 className="text-center">Order sent ✔️, we will reach out soon ./. تم إرسال الطلب ✔️ ، وسوف نتصل بك قريبا. </h1>
            </div>
            <div className="flex justify-center items-center ">
                <p className="text-xl font-medium flex-row gap-y-2 flex-wrap content-center justify-items-center">
              <div className="py-2 flex justify-between w-10/12"><span> Full Name / الاسم و اللقب :</span> <span>{name}</span> <br />
                </div> 
                <div className="py-2 flex justify-evenly w-10/12"> <span>Phone Number / رقم الهاتف :</span> <span> {pn}</span> <br /> </div>
                <div className="py-2 flex justify-evenly w-10/12"> <span>Adresse /العنوان :</span> <span></span>{adresse} <br /></div>
                <div className="py-2 flex justify-evenly w-10/12"> <span> parfum's volume  /حجم العطر :</span>{filter.ml} ml<span></span> <br /></div>
                <div className="py-2 flex justify-evenly w-10/12">  <span> shipping price : </span> <span>{livraison === "B"? selected.PrixB : selected.PrixAD} DA</span> <br /></div>
                <div className="py-2 flex justify-evenly w-10/12"> <span>  total : </span> <span>{total} DA</span> <br /></div>

                </p> 
               
            </div>
            <div className="flex items-center justify-center py-4"> <div onClick={()=>{
                window.location.href = '/#Fragrences';
            }} className="bg-white py-2 px-1 cursor-pointer hover:bg-black hover:text-white hover:border-4 border-white text-black rounded-xl ">check other products</div></div>
                </div>}
                {!ordersuccess && <div>
                    <div className="loader">Charging...</div>
                </div>}
        </div> }
        </div>
        
    )
}