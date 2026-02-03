import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [employees, setEmployees] = useState([])

  const handleClick = async()=>{
    try{
      await axios.post("/api/generate",{})

    }catch(err :any){
      console.log(err.message)
    }
    getDetails()
  }

  const getDetails = async ()=>{
    const details  = await axios.get("/api/employees")
    setEmployees(details.data)
  }

  return (
    <>
      <div className="cont bg-zinc-900 w-screen h-screen flex justify-center items-center">
        <div className="bg-zinc-800 w-1/2 h-3/4 rounded-4xl flex flex-col gap-5 items-center justify-between px-5 py-20">

            <div className='dummyData text-white flex gap-2 flex-wrap justify-center items-center'>
                {
                  employees.map((emp,index)=>{
                    return (
                      <div key={index} className="card flex flex-col rounded-4xl bg-zinc-700 p-5">
                          <div className='fond-bold text-xl text-blue-500'>
                              {emp.name}
                          </div>
                          <div>
                              {emp.salary}
                          </div>
                          <div>
                              {emp.language}
                          </div>
                          <div>
                              {emp.city}
                          </div>
                          <div>
                              {emp.isManager ? <p className='text-red-300'>Manager</p> : "Employee"}
                          </div>
                      </div>
                    )
                  })
                }
            </div>

            <button
            onClick={handleClick}
            className='bg-yellow-500 w-20 rounded-2xl cursor-pointer hover:bg-yellow-600 py-2'>
              Press
            </button>
        </div>
      </div>
    </>
  )
}

export default App
