"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Cookies from "js-cookie";
import { ConstructionOutlined } from "@mui/icons-material";
import Loader from "@/components/Loader";
import  useApi from "@/hooks/useApi"; 
import constant from "@/config/constant";

function Page() {
  const { user } = useAuth();
  const [schoolData, setSchoolData] = useState(null);
  const [error, setError] = useState(null);
  const {request}  = useApi(); 

  useEffect(() => {

    const fetchDashboardData = async () => {
      try {
        const postData = { schoolId: user?.userInfo?.schoolId };
         request(constant.DASHBOARD_END_POINT, "POST", postData)
         .then((res)=>{
          setSchoolData(res);
         })
       
      } catch (err) {
        setError(err.message);
      }
    };
      fetchDashboardData();
  }, [user]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <>
      <div className="w-full flex items-center justify-between px-3 bg-gray-100 py-2 rounded ">
        <div className="dashboard font-600 text-2xl">Dashboard</div>
        <div className="schoolName font-bold">{user?.userInfo?.schoolName}</div>
      </div>
    { schoolData?
      <div className="flex flex-col w-full ">
       <div className="total flex flex-row m-2">
        <div className="total_student flex flex-col py-2 px-5 rounded border border-gray-300 shadow mr-3">
          <div className="total font-bold text-2xl">{schoolData.result.studentCount}</div>
          <div className="title font-500 text-[12px] mb-2">Total Student</div>
        </div>
        <div className="total_student flex flex-col py-2 px-5 rounded border border-gray-300 shadow mr-3">
          <div className="total font-bold text-2xl">{schoolData.result.teacherCount}</div>
          <div className="title font-500 text-[12px] mb-2">Total Teacher</div>
        </div>
       </div>
      </div> : 
         <Loader/>
    }
      
      </>
  );
}

export default Page;
