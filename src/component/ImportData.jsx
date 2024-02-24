import React from 'react'

const ImportData = ({display}) => {
  return (
    <div>
      <div
        className={
          "w-screen h-screen  fixed z-10 flex justify-center items-center  bg-[#0c0d0c7a]"
        }
      >
        <div className="w-[300px] h-[300px] bg-slate-100 rounded-lg overflow-hidden">
          <div className="cntrl w-full bg-[#be3745ed] h-8 px-2 flex justify-between items-center pr-3">
            <div>import data</div>
            <div onClick={display}className='cursor-pointer '>X</div>
          </div>
          <div className="p-2 text-red-700">select file type to import</div>
          <div className="pl-4">
            <div className="flex h-8 items-center  gap-4 pl-4 mb-2">
              <input type="radio" name="import" id="" className="w-4 h-4" />
              Import from excel
            </div>
            <div className="flex h-8 items-center gap-4 pl-4 mb-2">
              <input type="radio" name="import" id="" className="w-4 h-4" />
              Import from excel
            </div>
            <div className="flex h-8 items-center  gap-4 pl-4 mb-2">
              <input type="radio" name="import" id="" className="w-4 h-4" />
              Import from excel
            </div>
          </div>
          <div className="w-[315px] h-[42px] bg-[#be3745ed] flex border-2 justify-evenly items-center mt-20 gap-2 ml-[-5px]">
            <div className=" bg-yellow-500 px-4 cursor-pointer mb-1 rounded" onClick={display}>
              close
            </div>
            <div className=" bg-yellow-500 px-4 cursor-pointer mb-1 rounded">ok</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportData
