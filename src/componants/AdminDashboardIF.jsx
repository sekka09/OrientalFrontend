import { useState,useEffect } from "react"
export default function AdminDashboardIF (props){
    
    const [window,setwindow]= useState('')
    const [param,setparam]=useState('')
    const [name,setname]=useState()
    const [price,setprice]=useState()
    const [refresh,setrefresh]=useState(false)
    const [quantity,setquantity]=useState()
    const [img1,setimg1]=useState()
    const [img2,setimg2]=useState()
    const [img3,setimg3]=useState()
    const [img4,setimg4]=useState()
    const [prixB,setprixB]= useState()
    const [nav,setnav]=useState(false)
    const [prixAD,setprixAD]= useState()
    const [promocodesarray,setpromocodesarray]= useState()
    const [contactarray,setcontactarray]= useState()
    const [description,setdescription]=useState()
    const [fragrancefamily,setfragrancefamily]=useState()
    const [display,setdisplay]= useState("Orders")
    const [ordersarray,setorderarray] = useState ([])
    const [banneredited,setbanneredited]=useState()
    const [fargranceedited,setfragranceedited]=useState()
    const [fragrancessarray,setfragrancesarray] = useState ([])
    const [bannersarray,setbannersarray] = useState ([])
    const [Shippingarray,setShippingarray] = useState ([])
    useEffect(()=>{
        
        fetch(`${process.env.REACT_APP_API_URL}/api/Order`,{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },credentials: 'include'}).then((res)=>res.json()).then((data)=>{setorderarray(data)});
          fetch(`${process.env.REACT_APP_API_URL}/api/Banner`,{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },credentials: 'include'}).then((res)=>res.json()).then((data)=>{setbannersarray(data)})
        
        fetch(`${process.env.REACT_APP_API_URL}/api/fragrences`,{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },credentials: 'include'}).then((res)=>res.json()).then((data)=>{setfragrancesarray(data)})
          fetch(`${process.env.REACT_APP_API_URL}/api/Shipping`,{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },credentials: 'include'}).then((res)=>res.json()).then((data)=>{setShippingarray(data)})
          
        fetch(`${process.env.REACT_APP_API_URL}/api/Contact`,{headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },credentials: 'include'}).then((res)=>res.json()).then((data)=>{setcontactarray(data)});
        
        fetch(`${process.env.REACT_APP_API_URL}/api/CodesPromo`,{headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },credentials: 'include'}).then((res)=>res.json()).then((data)=>{setpromocodesarray(data)});
    },[param,refresh])
    function getSiblings (e) {
        e.style.backgroundColor = "#d1d5db";
        setparam(e.id);
       
       
        let sibling  = e.parentNode.firstChild;
        
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
                sibling.style.removeProperty('background-color');
            }
            sibling = sibling.nextSibling;
        }
    };
    return (
        <div className="bg-black flex">
         
            <div className="max-sm:hidden max-xl:w-2/6 w-1/6 bg-gray-100 flex-col justify-items-center min-h-screen ">
            <h1 className="text-3xl text-center font-bold mt-8  mb-12">Admin DashBoard</h1>
                <div className="flex-col text-center text-xl">
                    <div id='Orders' onClick={(e)=>{setwindow('');
                        getSiblings(e.target.tagName.toLowerCase() === 'div' ? e.target  : e.target.parentElement )
                    }} className=" text-black my-1 py-4 px-12 hover:bg-gray-200 cursor-pointer flex content-center justify-center gap-1 rounded-md">
                        <img className="h-8 w-8" src="https://www.svgrepo.com/show/493951/order.svg" alt="" />   <span>Orders</span>
                    </div>
                    <div id='Fragrances' onClick={(e)=>{setwindow('');
                        getSiblings(e.target.tagName.toLowerCase() === 'div' ? e.target  : e.target.parentElement )
                    }} className=" text-black my-1 py-4 px-12 hover:bg-gray-200  flex content-center justify-center gap-1 cursor-pointer rounded-md">
                       <img  className="h-8 w-8" src="https://www.svgrepo.com/show/317246/perfume-channel-national-culture-paris.svg" alt="" /> <span>Fragrances</span>
                    </div>
                    <div id='Main Page banners' onClick={(e)=>{setwindow('');
                        getSiblings(e.target.tagName.toLowerCase() === 'div' ? e.target  : e.target.parentElement )
                    }} className=" text-black my-1 py-4 px-12 hover:bg-gray-200 flex content-center justify-center gap-1 cursor-pointer rounded-md">
                    <img  className="h-8 w-8" src="https://www.svgrepo.com/show/459067/images.svg" alt="" /> <span>Main Page banners</span>
                    </div>
                    <div id='Shipping' onClick={(e)=>{setwindow('');
                        getSiblings(e.target.tagName.toLowerCase() === 'div' ? e.target  : e.target.parentElement )
                    }} className=" text-black my-1 py-4 px-12 hover:bg-gray-200 flex content-center justify-center gap-1 cursor-pointer rounded-md">
                    <img  className="h-8 w-8" src="https://www.svgrepo.com/show/521229/shipping-truck.svg" alt="" />  <span>Shipping </span>
                    </div>
                    <div id='Contact' onClick={(e)=>{setwindow('');
                        getSiblings(e.target.tagName.toLowerCase() === 'div' ? e.target  : e.target.parentElement )
                    }} className=" text-black my-1 py-4 px-12 hover:bg-gray-200 flex content-center justify-center gap-1 cursor-pointer rounded-md">
                    <img  className="h-8 w-8" src="https://www.svgrepo.com/show/440938/contact-form.svg" alt="" /> <span>Contact </span>
                    </div>
                    <div id='Codes Promo' onClick={(e)=>{setwindow('');
                        getSiblings(e.target.tagName.toLowerCase() === 'div' ? e.target  : e.target.parentElement )
                    }} className=" text-black my-1 py-4 px-12 hover:bg-gray-200 flex content-center justify-center gap-1 cursor-pointer rounded-md">
                    <img  className="h-8 w-8" src="https://www.svgrepo.com/show/425581/discount-promo-ecommerce.svg" alt="" /> <span>Codes Promo </span>
                    </div>
                </div>
                <div >
                    <img className="h-8 w-8 rounded-lg hover:bg-gray-300 cursor-pointer" src="https://www.svgrepo.com/show/511053/log-out.svg" alt="Log-Out" onClick={()=>{
                      fetch(`${process.env.REACT_APP_API_URL}/api/Admin/logout`,{headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },credentials: 'include',method : 'post'}).then(()=>{ props.setconnected(false)})
                       
                    }}
                    />
                </div>
            </div>
            <div className="max-sm:w-full max-xl:w-4/6 w-5/6 flex items-center justify-center bg-white ">
                 {param === 'Orders' && <div className="flex-col place-items-center w-full    content-center"><h1 className=" text-6xl  mb-12 w-4/5">Orders</h1>
                    <div className="bg-white h-96 w-4/5 flex rounded-2xl text-center overflow-x-scroll text-black custom-scroll">
                    <div className=" whitespace-nowrap flex-col "><p className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">name</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.name}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">phone number</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.phonenumber}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">adresse</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.adresse}</p>)} </div>
                    <div className="whitespace-nowrap  flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold   ">wilaya / shipping</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.wilaya}</p>)} </div>
                    
                    <div className="whitespace-nowrap  flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold   "> shipping type</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.shipping === "AD" ?  "Home" :   "Desk"}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">fregrance</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.parfum}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">volume</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.volume}</p>)} </div>
                    <div className="whitespace-nowrap  flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">total</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.total}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">date</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.orderDate}</p>)} </div>
                    
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">confirm status</p>{ordersarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.confirmed ? "confirmed" : "not confirmed"}</p>)} </div>
                    <div  className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">confirm order</p>{ordersarray.map((element) =>    <img onClick={()=>{
                        fetch(`${process.env.REACT_APP_API_URL}/api/Order/${element._id}`,{headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },credentials: 'include',method : "PATCH",body : JSON.stringify({confirmed : true})})
                          
                          
                          
                          .then(()=>{
                            
                            fetch( `${process.env.REACT_APP_API_URL}/api/fragrences/${fragrancessarray.filter((fragrance)=> fragrance.name === element.parfum)[0]._id}`,{headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },credentials: 'include',method : "PATCH", body : JSON.stringify({
                              quantity : fragrancessarray.filter((fragrance)=> fragrance.name === element.parfum)[0].quantity -1
                            })}).then((response)=> response.json()).then((data)=>{console.log(data)}).catch((e)=>{console.log(e)})
                          }).then(()=>{setrefresh((currentstate)=>!currentstate) }).then(()=>{setparam('Orders') }).catch((e)=>{console.log(e)})
                        
                    }} src="https://www.svgrepo.com/show/448920/active.svg" style={{height: "28px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>  
                
                   ) } </div> 
                    </div>
                    </div>  }
                    {param === 'Fragrances' && <div className="flex-col place-items-center w-full    content-center"><h1 className=" text-6xl  mb-12 w-4/5">Fragrances</h1> <button onClick={()=>{setparam('');setwindow('add')}} className="border-2 rounded-md px-2 mb-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">Add new fragrance</button>
                    <div className="bg-white h-96 w-4/5 flex rounded-2xl text-center overflow-x-scroll text-black custom-scroll">
                    <div className=" whitespace-nowrap flex-col "><p className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">name</p>{fragrancessarray.map((element) => <p  className="w-full border-2 px-2" key={element._id}>{element.name}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">price</p>{fragrancessarray.map((element) =>  <p  className="w-full border-2 px-2" key={element._id}>{element.price}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">quantity</p>{fragrancessarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.quantity}</p>)} </div>
                    <div className="whitespace-nowrap  flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold   ">img1</p>{fragrancessarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.img1}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">img2</p>{fragrancessarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.img2}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">img3</p>{fragrancessarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.img3}</p>)} </div>
                    <div className="whitespace-nowrap  flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">description</p>{fragrancessarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.description}</p>)} </div>
                    
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">fragrancefamily</p>{fragrancessarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.fragrancefamily}</p>)} </div>
                    
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">edit</p>{fragrancessarray.map((element) => <img onClick={()=>{
                        setparam('');
                        
                        setname(element.name) ;
                        setprice(element.price) 
                        setquantity(element.quantity) 
                        setimg1(element.img1) 
                       
                        setimg2(element.img2) 
                       
                        setimg3(element.img3) 
                        setfragrancefamily(element.fragrancefamily) 
                        
                        setdescription(element.description) 
                        setfragranceedited(element._id)
                        setwindow('edit');
                    }} src="https://www.svgrepo.com/show/522527/edit-3.svg" style={{height: "28px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>)} </div>
                   <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">delete</p>{fragrancessarray.map((element) => <img onClick={()=>{
                        fetch(`${process.env.REACT_APP_API_URL}/api/fragrences/${element._id}`,{headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },credentials: 'include',method : "DELETE"}).then(()=>{setrefresh((currentstate)=>!currentstate) }).catch((e)=>{console.log(e)})
                        
                    }} src="https://www.svgrepo.com/show/533010/trash-alt.svg" style={{height: "28px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>)} </div>
                   </div>
                    </div>  }
                    {param === 'Main Page banners' && <div className="flex-col place-items-center w-full    content-center"><h1 className=" text-6xl  mb-12 w-4/5">Main Page banners </h1> <button onClick={()=>{setparam('');setwindow('addbanner')}} className="border-2 rounded-md px-2 mb-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">Add new banner-set</button>
                    <div className="bg-white h-96 w-4/5 flex rounded-2xl text-center overflow-x-scroll text-black custom-scroll">
                    <div className=" whitespace-nowrap flex-col "><p className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">name</p>{bannersarray.map((element) => <p style={{height : "59.6px"}}  className=" w-full border-2 px-2" key={element._id}>{element.name}</p>)} </div>
                    <div className="whitespace-nowrap  flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold   ">img1</p>{bannersarray.map((element) => <img style={{height : "59.6px"}} className=" border-2 px-2" key={element._id} src={element.img1}></img>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">img2</p>{bannersarray.map((element) => <img style={{height : "59.6px"}} className=" border-2 px-2" key={element._id} src={element.img2}></img>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">img3</p>{bannersarray.map((element) => <img  style={{height : "59.6px"}} className=" border-2 px-2" key={element._id} src={element.img3}></img>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">img4</p>{bannersarray.map((element) => <img style={{height : "59.6px"}} className=" border-2 px-2" key={element._id} src={element.img4}></img>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">edit</p>{bannersarray.map((element) => <img onClick={()=>{
                        setparam('');
                        
                        setname(element.name) ;
                       
                        setimg1(element.img1) 
                       
                        setimg2(element.img2) 
                       
                        setimg3(element.img3) 
                        setimg4(element.img4) 
                        
                        setwindow('editbanner');
                    }} src="https://www.svgrepo.com/show/522527/edit-3.svg" style={{height : "59.6px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>)} </div>
                  <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">active</p>{bannersarray.map((element) =>   <img onClick={()=>{
                        fetch(`${process.env.REACT_APP_API_URL}/api/Banner/${element._id}`,{headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },credentials: 'include',method : "PATCH",body : JSON.stringify({selected : !element.selected})}).then(()=>{setrefresh((currentstate)=>!currentstate) }).then(()=>{setparam('Main Page banners') }).catch((e)=>{console.log(e)})
                        
                    }} src="https://www.svgrepo.com/show/448920/active.svg" style={{height: "59.6px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img> 
                
                    )} </div> 
                   <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">delete</p>{bannersarray.map((element) => <img onClick={()=>{
                        fetch(`${process.env.REACT_APP_API_URL}/api/Banner/${element._id}`,{headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },credentials: 'include',method : "DELETE"}).then(()=>{setrefresh((currentstate)=>!currentstate) }).catch((e)=>{console.log(e)})
                        
                    }} src="https://www.svgrepo.com/show/533010/trash-alt.svg" style={{height : "59.6px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>)} </div>
                   </div>
                    </div>  }
                    {param === 'Shipping' && <div className="flex-col place-items-center w-full    content-center"><h1 className=" text-6xl  mb-12 w-4/5">Shipping List</h1><button onClick={()=>{setparam('');setwindow('addshipping')}} className="border-2 rounded-md px-2 mb-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">Add new one </button>
                    <div className="bg-white h-96 w-4/5 flex rounded-2xl text-center overflow-x-scroll text-black custom-scroll">
                    <div className=" whitespace-nowrap flex-col "><p className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">willaya</p>{Shippingarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.willaya}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">Prix A Domicicle</p>{Shippingarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.PrixAD}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">Prix bureau</p>{Shippingarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.PrixB}</p>)} </div>
                    
                    
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">edit</p>{Shippingarray.map((element) => <img onClick={()=>{
                        setparam('');
                        setfragranceedited(element._id)
                        setname(element.willaya) ;
                        setprixAD(element.PrixAD) 
                        setprixB(element.PrixB) 
                        setwindow('editShipping');
                    }} src="https://www.svgrepo.com/show/522527/edit-3.svg" style={{height: "28px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>)} </div>
                   <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">delete</p>{Shippingarray.map((element) => <img onClick={()=>{
                        fetch(`${process.env.REACT_APP_API_URL}/api/Shipping/${element._id}`,{headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },credentials: 'include',method : "DELETE"}).then(()=>{setrefresh((currentstate)=>!currentstate) }).then(()=>{setparam('Shipping') }).catch((e)=>{console.log(e)})
                        
                    }} src="https://www.svgrepo.com/show/533010/trash-alt.svg" style={{height: "28px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>)} </div>
                    </div>
                    </div>  }
                    {param === 'Contact' && <div className="flex-col place-items-center w-full    content-center"><h1 className=" text-6xl  mb-12 w-4/5">Contact</h1>
                    <div className="bg-white h-96 w-4/5 flex rounded-2xl text-center overflow-x-scroll text-black custom-scroll">
                    <div className=" whitespace-nowrap flex-col "><p className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">name</p>{contactarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.fullname}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">phone number</p>{contactarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.phonenumber}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">message</p>{contactarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.message}</p>)} </div>
                    </div>
                    </div>  }
                    {param === 'Codes Promo' && <div className="flex-col place-items-center w-full    content-center"><h1 className=" text-6xl  mb-12 w-4/5">Codes Promo List</h1><button onClick={()=>{setparam('');setwindow('addpromocode')}} className="border-2 rounded-md px-2 mb-2 bg-gray-300 hover:bg-gray-400 cursor-pointer">Add new one </button>
                    <div className="bg-white h-96 w-4/5 flex rounded-2xl text-center overflow-x-scroll text-black custom-scroll">
                    <div className=" whitespace-nowrap flex-col "><p className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">code</p>{promocodesarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.code}</p>)} </div>
                    
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">sells confirmed</p>{promocodesarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.sellsc}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">sells</p>{promocodesarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.sells}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">% discount</p>{promocodesarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.reduction}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold  ">% affiliate</p>{promocodesarray.map((element) => <p className="w-full border-2 px-2" key={element._id}>{element.afiliateshare}</p>)} </div>
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">confirm sell</p>{promocodesarray.map((element) =>   <img onClick={()=>{
                        fetch(`${process.env.REACT_APP_API_URL}/api/CodesPromo/${element._id}`,{headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },credentials: 'include',method : "PATCH",body : JSON.stringify({sellsc : element.sellsc +1})}).then(()=>{setrefresh((currentstate)=>!currentstate) }).then(()=>{setparam('Codes Promo') }).catch((e)=>{console.log(e)})
                        
                    }} src="https://www.svgrepo.com/show/448920/active.svg" style={{height: "28px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img> 
                
                    )} </div>
                    
                    <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">edit</p>{promocodesarray.map((element) => <img onClick={()=>{
                        setparam('');
                        setfragranceedited(element._id)
                        setname(element.code) ;
                        setprixAD(element.reduction) 
                        setprixB(element.affiliateshare) 
                        setwindow('editpromocode');
                    }} src="https://www.svgrepo.com/show/522527/edit-3.svg" style={{height: "28px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>)} </div>
                   <div className=" whitespace-nowrap flex-col "><p  className="text-lg px-2 border-2 w-full bg-gray-300 flex justify-center items-center font-bold ">delete</p>{promocodesarray.map((element) => <img onClick={()=>{
                        fetch(`http://localhost:3000/api/CodesPromo/${element._id}`,{headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                          },credentials: 'include',method : "DELETE"}).then(()=>{setrefresh((currentstate)=>!currentstate) }).then(()=>{setparam('Codes Promo') }).catch((e)=>{console.log(e)})
                        
                    }} src="https://www.svgrepo.com/show/533010/trash-alt.svg" style={{height: "28px"}} className=" cursor-pointer hover:bg-gray-300 w-full border-2 px-2" key={element._id} id={element.id}></img>)} </div>
                    </div>
                    </div>  }
                    {
                        window==='edit' && <form>
                        <div class="">
                          <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base/7 font-semibold text-gray-900">Edit </h2>
                            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                      
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">parfum's name :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">price :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={price} onChange={(e)=>{setprice(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">quantity :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={quantity} onChange={(e)=>{setquantity(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img1 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img1} onChange={(e)=>{setimg1(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img2 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img2} onChange={(e)=>{setimg2(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img3 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img3} onChange={(e)=>{setimg3(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">fragrance family :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={fragrancefamily} onChange={(e)=>{setfragrancefamily(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              
                      
                              <div class="col-span-full">
                                <label for="about" class="block text-sm/6 font-medium text-gray-900">description :</label>
                                <div class="mt-2">
                                  <textarea required value={description} onChange={(e)=>{setdescription(e.target.value)}} name="about" id="about" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900   placeholder:text-gray-400  border-2  sm:text-sm/6"></textarea>
                                </div>
                                <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences describing the parfum.</p>
                              </div>
                      
                              
                      
                            </div>
                          </div>
                      
                        
                      
                        </div>
                      
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm/6 font-semibold text-gray-900" onClick={()=>{setparam('Fragrances'); setwindow('')}}>Cancel</button>
                          <button type="submit" class="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e)=>{
                            e.preventDefault()
                            fetch( `http://localhost:3000/api/fragrences/${fargranceedited}`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include',method : "PATCH", body : JSON.stringify({
                                name : name,
                                price : price,
                                quantity : quantity,
                                img1 : img1,
                                img2 : img2,
                                img3 : img3,
                                fragrancefamily : fragrancefamily,
                                description : description
                              })}).then((response)=> response.json()).then((data)=>{setparam('Fragrances') ; setwindow('')}).catch((e)=>{console.log(e)})
                          }}>Save</button>
                        </div>
                      </form>
                    }
                     {
                        window==='add' && <form>
                        <div class="">
                          <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base/7 font-semibold text-gray-900">Add new fragrance </h2>
                            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                      
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">parfum's name :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">price :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={price} onChange={(e)=>{setprice(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">quantity :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={quantity} onChange={(e)=>{setquantity(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img1 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img1} onChange={(e)=>{setimg1(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img2 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img2} onChange={(e)=>{setimg2(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img3 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img3} onChange={(e)=>{setimg3(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">fragrance family :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={fragrancefamily} onChange={(e)=>{setfragrancefamily(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              
                      
                              <div class="col-span-full">
                                <label for="about" class="block text-sm/6 font-medium text-gray-900">description :</label>
                                <div class="mt-2">
                                  <textarea required value={description} onChange={(e)=>{setdescription(e.target.value)}} name="about" id="about" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900   placeholder:text-gray-400  border-2  sm:text-sm/6"></textarea>
                                </div>
                                <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences describing the parfum.</p>
                              </div>
                      
                              
                      
                            </div>
                          </div>
                      
                        
                      
                        </div>
                      
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm/6 font-semibold text-gray-900" onClick={()=>{ setwindow('');setparam('Fragrances');}}>Cancel</button>
                          <button type="submit" class="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e)=>{
                            e.preventDefault()
                            fetch( `http://localhost:3000/api/fragrences`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include',method : "post", body : JSON.stringify({
                                name : name,
                                price : parseInt(price),
                                quantity : parseInt(quantity),
                                img1 : img1,
                                img2 : img2,
                                img3 : img3,
                                fragrancefamily : fragrancefamily,
                                description : description
                              })}).then(()=>{ setwindow('');setparam('Fragrances') }).catch((e)=>{console.log(e)})
                          }}>Save</button>
                        </div>
                      </form>
                    }
                    {
                        window==='addbanner' && <form>
                        <div class="">
                          <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base/7 font-semibold text-gray-900">add banner set </h2>
                            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                      
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">banners-set name :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img1 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img1} onChange={(e)=>{setimg1(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img2 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img2} onChange={(e)=>{setimg2(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img3 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img3} onChange={(e)=>{setimg3(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img4 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img4} onChange={(e)=>{setimg4(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                      
                        
                      
                        </div>
                      
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm/6 font-semibold text-gray-900" onClick={()=>{ setwindow('');setparam('Main Page banners');}}>Cancel</button>
                          <button type="submit" class="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e)=>{
                            e.preventDefault()
                            fetch( `http://localhost:3000/api/Banner`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include',method : "post", body : JSON.stringify({
                                name : name,
                                img1 : img1,
                                img2 : img2,
                                img3 : img3,
                                img4 : img4
                              })}).then(()=>{ setwindow('');setparam('Main Page banners') }).catch((e)=>{console.log(e)})
                          }}>Save</button>
                        </div>
                      </form>
                    }
                      {
                        window==='editbanner' && <form>
                        <div class="">
                          <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base/7 font-semibold text-gray-900">Edit banner-set </h2>
                            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                      
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">banner-set's name :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img1 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img1} onChange={(e)=>{setimg1(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img2 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img2} onChange={(e)=>{setimg2(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img3 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img3} onChange={(e)=>{setimg3(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">img4 :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={img4} onChange={(e)=>{setimg4(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                             
                      
                              
                      
                            </div>
                          </div>
                      
                        
                      
                        </div>
                      
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm/6 font-semibold text-gray-900" onClick={()=>{setparam('Main Page banners'); setwindow('')}}>Cancel</button>
                          <button type="submit" class="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e)=>{
                            e.preventDefault()
                            fetch( `http://localhost:3000/api/Banner/${fargranceedited}`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include',method : "PATCH", body : JSON.stringify({
                                name : name,
                                img1 : img1,
                                img2 : img2,
                                img3 : img3,
                                img4 : img4
                              })}).then((response)=> response.json()).then((data)=>{setparam('Main Page banner') ; setwindow('')}).catch((e)=>{console.log(e)})
                          }}>Save</button>
                        </div>
                      </form>
                    }
                    {
                        window==='addshipping' && <form>
                        <div class="">
                          <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base/7 font-semibold text-gray-900">add </h2>
                            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                      
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">willaya name :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">Price desk :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={prixB} onChange={(e)=>{setprixB(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">price home :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={prixAD} onChange={(e)=>{setprixAD(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                             
                            </div>
                          </div>
                      
                        
                      
                        </div>
                      
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm/6 font-semibold text-gray-900" onClick={()=>{ setwindow('');setparam('Shipping');}}>Cancel</button>
                          <button type="submit" class="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e)=>{
                            e.preventDefault()
                            fetch( `http://localhost:3000/api/Shipping`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include',method : "post", body : JSON.stringify({
                                willaya : name,
                                PrixAD : parseInt(prixAD),
                                PrixB : parseInt(prixB)
                              })}).then(()=>{ setwindow('');setparam('Shipping') }).catch((e)=>{console.log(e)})
                          }}>Save</button>
                        </div>
                      </form>
                    }
                      {
                        window==='editShipping' && <form>
                        <div class="">
                          <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base/7 font-semibold text-gray-900">Edit </h2>
                            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                      
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">willaya :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">prixAD :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={prixAD} onChange={(e)=>{setprixAD(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">prixB :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={prixB} onChange={(e)=>{setprixB(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                      
                              
                      
                            </div>
                          </div>
                      
                        
                      
                        </div>
                      
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm/6 font-semibold text-gray-900" onClick={()=>{setparam('Shipping'); setwindow('')}}>Cancel</button>
                          <button type="submit" class="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e)=>{
                            e.preventDefault()
                            fetch( `http://localhost:3000/api/Shipping/${fargranceedited}`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include',method : "PATCH", body : JSON.stringify({
                                name : name,
                                PrixAD : parseInt(prixAD),
                                PrixB : parseInt(prixB)
                              })}).then((response)=> response.json()).then((data)=>{setparam('Shipping') ; setwindow('')}).catch((e)=>{console.log(e)})
                          }}>Save</button>
                        </div>
                      </form>
                    }
                    {
                        window==='addpromocode' && <form>
                        <div class="">
                          <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base/7 font-semibold text-gray-900">add </h2>
                            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                      
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">code :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">discount :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={prixB} onChange={(e)=>{setprixB(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">affiliate share :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={prixAD} onChange={(e)=>{setprixAD(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                             
                            </div>
                          </div>
                      
                        
                      
                        </div>
                      
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm/6 font-semibold text-gray-900" onClick={()=>{ setwindow('');setparam('Codes Promo');}}>Cancel</button>
                          <button type="submit" class="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e)=>{
                            e.preventDefault()
                            fetch( `http://localhost:3000/api/CodesPromo`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include',method : "post", body : JSON.stringify({
                                code : name,
                                reduction : parseFloat(prixAD),
                                afiliateshare : parseFloat(prixB)
                              })}).then(()=>{ setwindow('');setparam('Codes Promo') }).catch((e)=>{console.log(e)})
                          }}>Save</button>
                        </div>
                      </form>
                    }
                      {
                        window==='editpromocode' && <form>
                        <div class="">
                          <div class="border-b border-gray-900/10 pb-12">
                            <h2 class="text-base/7 font-semibold text-gray-900">Edit </h2>
                            <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
                      
                            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-7">
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">code :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={name} onChange={(e)=>{setname(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">% discount :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={prixAD} onChange={(e)=>{setprixAD(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="username" class="block text-sm/6 font-medium text-gray-900">afiliate share :</label>
                                <div class="mt-2">
                                  <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                   
                                    <input required value={prixB} onChange={(e)=>{setprixB(e.target.value)}} type="text" name="username" id="username" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 border-2 rounded-md focus:outline-gray-600 " placeholder="write here ..."></input>
                                  </div>
                                </div>
                              </div>
                      
                              
                      
                            </div>
                          </div>
                      
                        
                      
                        </div>
                      
                        <div class="mt-6 flex items-center justify-end gap-x-6">
                          <button type="button" class="text-sm/6 font-semibold text-gray-900" onClick={()=>{setparam('Codes Promo'); setwindow('')}}>Cancel</button>
                          <button type="submit" class="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e)=>{
                            e.preventDefault()
                            fetch( `http://localhost:3000/api/CodesPromo/${fargranceedited}`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include',method : "PATCH", body : JSON.stringify({
                                code : name,
                                reduction : parseFloat(prixAD),
                                afiliateshare : parseFloat(prixB)
                              })}).then((response)=> response.json()).then((data)=>{setparam('Codes Promo') ; setwindow('')}).catch((e)=>{console.log(e)})
                          }}>Save</button>
                        </div>
                      </form>
                    }
                
           
        </div> 
        </div>
    )
}