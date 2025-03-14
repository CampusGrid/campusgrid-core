import {useState} from 'react'
import Link from 'next/link'
import Data from "./data.json"
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import { useAuth } from "@/context/AuthContext";



function DashboardNavbar() {
  const {logout} = useAuth(); 
  const [openMenus, setOpenMenus] = useState(Data.navlist.map(() => false)); // Initial state: all menus closed

  const handleMenu = (index) => {
    console.log(index); 
    setOpenMenus(prevOpenMenus => {
      const newOpenMenus = [...prevOpenMenus]; // Create a copy of the array
      newOpenMenus[index] = !newOpenMenus[index]; // Toggle the state for the clicked item
      return newOpenMenus;
    });
  };

  const handleLogOut= async ()=>{

    try{
       await logout()
    }catch(error){
      throw error; 
    }
  }

  return (
    <aside
    className="fixed top-0 left-0 h-full w-64 bg-[#fff]"
    style={{zIndex: 10}} >
    <div className=" border border-red-500 h-full ">
      <div className="heading w-full  text-center mb-4  my-2  p-2">
      <Link href="/">
        <div className='p-2 text-center bg-hoverlink rounded  cursor-pointer'>
        <h2 className="text-lg font-semibold text-white text-2xl">CAMPUS GRID</h2>
        </div>
        </Link>
      
      </div>
      
      <ul className=''>
          {
            Data.navlist.map((itm, index)=>{
              return (
               <div className='w-full flex flex-col'> 
                <li key={index} className="mb-2  p-2 flex justify-between cursor-pointer" onClick={itm?.subList && itm.subList.length > 0 ? () => handleMenu(index) : itm.title==="logout"? handleLogOut:undefined}>
                  <span>{itm.title.split(" ").map(itm=>itm[0].toUpperCase()+itm.slice(1)).join(" ")}</span> {itm?.subList && itm.subList.length>0 && (!openMenus[index]? <ArrowDropDownSharpIcon/>: <ArrowDropUpSharpIcon/>) }
                </li>
                {
                  openMenus[index] && (
                    <div className={`transition-all duration-700 overflow-hidden ${
                      openMenus[index] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                    <ul>
                        {
                          itm.subList.map((sub, index)=>{
                           return  <li key={index} className='mb-2 p-2 text-[12px] cursor-pointer hover' > {sub.title.split(" ").map(itm=>itm[0].toUpperCase()+itm.slice(1))}</li>  
                          })
                        }
                    </ul>
                    </div>
                  )
                }
              </div>
              )
            })
          }
       
      </ul>
    </div>
  </aside>
  )
}

export default DashboardNavbar
