import {useState , useEffect} from 'react'
import Link from 'next/link'
import DashboardIcon from '../DashbaordIcon';
import { useAuth } from "@/context/AuthContext";

function NavEssentialButton({essential, scrollToSection}) {
  const {user} = useAuth(); 
  const [loggedInUser, setLoggedInUser] = useState(null); 

  useEffect(()=>{
     setLoggedInUser(user); 
  }, [user])
 
  return (
    <>
     <li className="h-full px-2 flex items-center cursor-pointer mx-2 text-sm">
                        {essential.link ? 
                        (loggedInUser && Object.keys(loggedInUser).length>0 ?
                        <DashboardIcon/>
                          :
                          <Link 
                          href={essential.link}
                          className="font-bold  border rounded-[10px] px-4 py-3 text-white bg-[#15A3EF]"
                        >
                          {essential.name.toUpperCase()}
                        </Link> 
                        ) :  (
                          <span
                            onClick={() => {
                              scrollToSection(essential.id);
                            }}
                            className="font-bold  border rounded-[10px] px-4 py-3 text-white bg-[#15A3EF]"
                          >
                            {essential.name.toUpperCase()}
                          </span>
                         ) 
                         
                         
                         }
                      </li> 
    </>
  )
}

export default NavEssentialButton
