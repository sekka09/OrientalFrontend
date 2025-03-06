import { useState,useEffect } from "react"
export default function AppContact (){
    const [pn,setpn ]= useState("")
    const [contactsuccess,setcontactsuccess]= useState(false)
    const [contactsent,setcontactsent]=useState(false)
    const [fullname,setfullname ]= useState("")
    const [message,setmessage ]= useState("")
    return (
        <div id="Contact" className="flex-col p-12  text-white content-center place-items-center">
           <div className="my-12 w-full flex ">
           
           <h1 style={{color : "#f2a366"}} className="text-7xl font-bold px-8 max-lg:text-5xl"> Contact</h1>
           
            
           
            </div> 
            {! contactsent &&<form style={{background : "rgb(26, 26, 29)"}} className="flex-col place-items-center max-sm:w-full w-3/4 p-4  my-12" action="">
                <h1 className="font-bold text-3xl my-12">Hi, how can we help ?</h1>
                <div className="my-12  w-3/4 max-lg:w-11/12 ">
                <h1 htmlFor="num" className="text-xl font-medium my-4 " >phone number : </h1>
                <input value={pn} onChange={(e)=>{setpn(e.target.value)}} type="number" className="w-full  h-12 rounded-xl px-6  font-bold text-lg text-black focus:border-black focus:border-4" name="num" id="num" />
                    </div>
                    <div className="my-12   w-3/4 max-lg:w-11/12 ">
                    <h1 htmlFor="name" className="text-xl font-medium my-4 ">Full Name :</h1>
                    
                    <input value={fullname} onChange={(e)=>{setfullname(e.target.value)}} className=" w-full h-12 rounded-xl px-6  font-bold focus:border-black text-black focus:border-4 text-lg " type="text" name="name" id="name" />
                    </div>
                    <div className="my-12   w-3/4 max-lg:w-11/12 ">
                    <h1 htmlFor="msg" className="text-xl font-medium my-4 ">Message : </h1>
                    <textarea value={message} onChange={(e)=>{setmessage(e.target.value)}} className="h-32 w-full rounded-xl px-6 py-4  font-bold text-lg focus:border-black text-black focus:border-4 " name="msg" id="msg"></textarea>   
                    </div>
                    <div className="my-12   w-3/4 max-lg:w-11/12 ">
                        <button type="submit"  className="h-16 w-44 bg-orange-300 text-xl text-black font-bold  backdrop-blur-lg hover:bg-orange-200 hover:border-4 border-orange-300 rounded-2xl"
                        onClick={(e)=>{
                            e.preventDefault();
                            setcontactsent(true)
                            fetch(`${process.env.REACT_APP_API_URL}/api/Contact`,{headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                              },credentials: 'include', method : "post",body : JSON.stringify({
                               
                                "fullname" : fullname , 
                                "phonenumber" : pn ,
                                "message" : message
                            })}).then(()=>{
                                setcontactsuccess(true);
                            }).catch((e)=>{console.log(e)})
                        
                        }
                        }>Submit</button>
                    </div>
                
                
            </form>}
            {contactsent && <div style={{background : "rgb(26, 26, 29)"}} className="text-white rounded-xl max-sm:w-10/12 sm:w-5/6 ">
           {contactsuccess && <div>
            <div className="py-4 px-2 text-2xl  font-semibold">
                <h1 className="text-center">Contact sent ✔️, we will reach out soon ./. تم إرسال الرسالة  ✔️ ، وسوف نتصل بك قريبا. </h1>
            </div>
            <div className="flex justify-center items-center ">
                <p className="text-xl font-medium flex-row gap-y-2 flex-wrap content-center justify-items-center">
              <div className="py-2 flex justify-between w-10/12"><span> Full Name :</span> <span>{fullname}</span> <br />
                </div> 
                <div className="py-2 flex justify-evenly w-10/12"> <span>Phone Number / رقم الهاتف :</span> <span> {pn}</span> <br /> </div>
                <div className="py-2 flex justify-evenly w-10/12"> <span>Message /الرسالة :</span> <span></span>{message} <br /></div>

                </p> 
               
            </div>
                </div>}
                {!contactsuccess && <div>
                    <div className="loader">Charging...</div>
                </div>}
        </div> }
        </div>
    )
}