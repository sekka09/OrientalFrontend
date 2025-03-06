import { useState,useEffect } from "react"
import AdminDashboardIF from "./AdminDashboardIF"
 export default function AdminDashboard (){
const [connected,setconnected]=useState(false)
const [username,setusername] = useState()
const [password,setpassword] = useState()
useEffect(()=>{
  fetch(`${process.env.REACT_APP_API_URL}/api/authcheck`,{headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },credentials: 'include'}).then((res)=>{if (res.ok )setconnected(true);}).catch((e)=>{console.log(e)});
},[])


    return ( connected ?
        <AdminDashboardIF setconnected={setconnected}/> :
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>
 
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6 bg-gray-200 p-12 rounded-xl" action="#" method="POST">
      <div>
        <label for="username" class="block text-sm/6 font-medium text-gray-900">username </label>
        <div class="mt-2">
          <input value={username} onChange={(e)=>{setusername(e.target.value)}} type="username" name="username" id="username" autocomplete="username" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></input>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input value={password} onChange={(e)=>{setpassword(e.target.value)}}  type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          </input> </div>
      </div>

      <div>
        <button onClick={(e)=>{
          e.preventDefault();
          fetch(`${process.env.REACT_APP_API_URL}/api/Admin/login`,{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },credentials: 'include',method : 'post',body : JSON.stringify({name : username , password : password})}).then(()=>{fetch("process.env.REACT_APP_API_URL/api/authcheck",{headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },credentials: 'include'}).then((res)=>{if (res.ok )setconnected(true);}).catch((e)=>{console.log(e)});}).catch((e)=>{console.log(e)})
        }} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

  </div>
</div>

    )
 }