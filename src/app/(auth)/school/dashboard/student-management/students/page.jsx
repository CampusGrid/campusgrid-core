'use client'
import {useState, useEffect} from 'react'
import { useSearchParams, useRouter } from 'next/navigation'; 
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link';
import constant from '@/config/constant';
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel  } from "@tanstack/react-table";
import Loader from '@/components/Loader';
import useApi from "@/hooks/useApi";
import { DataGrid } from "@mui/x-data-grid";
import { Box, CircularProgress, Pagination } from "@mui/material";
import { IconButton, Menu, MenuItem, Select } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Tooltip from "@mui/material/Tooltip";  


function Page() {
  const searchParams = useSearchParams(); 
  const {request}   = useApi(); 
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get("page")) || 1);
  const [menuAnchorEl, setMenuAnchorEl] = useState({});
  const { user } = useAuth(); 
  const router = useRouter(); 

  useEffect(() => {
      setLoading(true);
      request(`${constant.STUDENT_TABLE_END_POINT}?page=${currentPage}`, "POST", { 
        schoolId: user?.userInfo?.schoolId 
      })
      .then((res) => {
        setData(res.result?.content || []);
        setTotalPages(res.result?.totalPages || 1);
      })
      .finally(() => setLoading(false));
  }, [user, currentPage]);
  const columns = [
    { accessorKey: "user_id", header: "User ID" },
    { accessorKey: "admission_number", header: "Admission No." },
    { accessorKey: "first_name", header: "First Name" },
    { accessorKey: "last_name", header: "Last Name" },
    { accessorKey: "class", header: "Class" },
    { accessorKey: "section", header: "Section" },
    { accessorKey: "gender", header: "Gender" },
    { 
      accessorKey: "date_of_birth", 
      header: "DOB",
      cell: ({ row }) => {
        const dob = row.original.date_of_birth;
        const formattedDate = dob ? new Date(dob).toLocaleDateString("en-GB") : "N/A";
        return <span>{formattedDate}</span>;
      }
    },
    { accessorKey: "phone_number", header: "Phone" },
    { accessorKey: "email_id", header: "Email" },
    { accessorKey: "father_name", header: "Father Name" },
    { accessorKey: "mother_name", header: "Mother Name" },
    { 
      accessorKey: "address", 
      header: "Address", 
      minSize: 250, 
      maxSize: 400, 
      cell: ({ row }) => (
        <Tooltip title={row.original.address} arrow>
          <div style={{ 
            width: "250px", 
            overflow: "hidden", 
            textOverflow: "ellipsis", 
            whiteSpace: "nowrap",
            padding: "4px"
          }}>
            {row.original.address}
          </div>
        </Tooltip>
      )
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="relative">
          <IconButton onClick={(e) => handleMenuOpen(e, row.original.id)}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl[row.original.id]}
            open={Boolean(menuAnchorEl[row.original.id])}
            onClose={() => handleMenuClose(row.original.id)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={() => handleView(row.original)}>View</MenuItem>
            <MenuItem onClick={() => handleEdit(row.original)}>Edit</MenuItem>
            <MenuItem onClick={() => handleDelete(row.original.id)} sx={{ color: "red" }}>
              Delete
            </MenuItem>
          </Menu>
        </div>
      ),
    },
  ];
  
  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    router.push(`?page=${newPage}`, { scroll: false });
  };

  const handleMenuOpen = (event, rowId) => {
    setMenuAnchorEl((prev) => ({ ...prev, [rowId]: event.currentTarget }));
  };
  const handleMenuClose = (rowId) => {
    setMenuAnchorEl((prev) => ({ ...prev, [rowId]: null }));
  };
  return (
    <div className='w-full p-2'>
      <div className="flex flex-row mx-2 my-2 justify-between">
        <div className="title"><span className='text-2xl font-medium'>Students</span></div>
        <div><span className='font-bold text-2xl'>{user?.userInfo?.schoolName || "loading..."}</span></div>
      </div>

      <div className='bg-white w-full min-h-screen p-2 flex flex-col mx-2 my-3 rounded shadow'>
        
        <div className="w-full p-2 font-bold flex justify-between items-center">
          <span>All Student List</span>
          <Link href="/school/dashboard/student-management/students/add">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            + Add New Student
          </button>
          </Link>
          
        </div>
        <div className="w-full p-4 bg-white rounded-md shadow my-2">
          <form className="grid grid-cols-4 gap-4 w-full">
            <input 
              type="text" 
              placeholder="Search by Enrollment Number" 
              className="border p-3 rounded-md w-full bg-gray-100"
            />
            <input 
              type="text" 
              placeholder="Search by Name" 
              className="border p-3 rounded-md w-full bg-gray-100"
            />
            <select className="border p-3 rounded-md w-full bg-gray-100 mr-4">
              <option value="">Select Class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Class {i + 1}
                </option>
              ))}
            </select>
            <button className="bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 w-full">
              Search
            </button>
          </form>
        </div>
        { data.length==0? 
           <Loader/>
        :
          (<div className='p-4 w-full '>
           <div className='overflow-x-scroll max-w-full custom-scrollbar'>
  <table className='min-w-max border-collapse border border-gray-300'>
    <thead className='bg-gray-100'>
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th key={header.id} className='border p-2'>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr key={row.id} className='border'>
          {row.getVisibleCells().map((cell) => (
            <td key={cell.id} className='border p-2'>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>

<Box display='flex' justifyContent='right' mt={2}>
    <Pagination
      count={totalPages}
      page={currentPage}
        onChange={handlePageChange}
      color='primary'
    />
</Box>
    </div>)

        }
      
      </div>
    </div>
  )
}

export default Page;



