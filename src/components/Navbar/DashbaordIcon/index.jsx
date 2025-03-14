import {useState} from 'react'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';


function DashboardIcon() {
  const {logout} = useAuth(); 
  const dashboardUrl = "/school/dashboard"; 
  const [showProfileMenu, setShowProfileMenu]= useState(false); 
  const handleProfileMenu =()=>{
    setShowProfileMenu((prev)=>!prev); 
  }

  const handleLogOut= async ()=>{
    try{
       await logout()
    }catch(error){
      throw error; 
    }
  }



  return (
    <>
   <Link href={dashboardUrl} className='mr-3'>
   <div className='px-4 py-3 bg-hoverlink rounded-[10px]'><span className="text-white uppercase font-bold ">dashboard</span></div>
   </Link>
    <div className='mx-2 relative '>
      <div className="profile_icon" onClick={handleProfileMenu}>
      <AccountCircleSharpIcon fontSize='large' color="#15A3EF"/>
      </div>
       {
        showProfileMenu && (
          <div className={`absolute w-[200px] flex flex-col my-4 p-3 right-3  bg-white shadow-md rounded overflow-hidden transform transition-all duration-300 ease-out`}>
          <Link href="/school/dashboard/profile"><div className=' px-3 py-2   hover:bg-gray-100 hover:text-hoverlink rounded'><span className='font-bold text-[180x] w-full hover:text-hoverlink'>PROFILE</span></div></Link>
          <div className=' px-3 py-2   mb-2 hover:bg-gray-100 hover:text-hoverlink rounded' onClick={handleLogOut}><span className='font-bold text-[180x] w-full hover:text-hoverlink'>LOGOUT</span></div>
        </div>
        )
       }
      
    </div>
    </>
  )
}

export default DashboardIcon
