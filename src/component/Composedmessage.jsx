import React from "react";
import { useState } from "react";
import contactLogo from "../assets/contact.png";
const Composedmessage = ({ data, composepop }) => {
  const [context, setcontext] = useState(false);
  const [xyPosition, setxyPosition] = useState({ x: 0, y: 0 });
  const showcontext = (e) => {
    e.preventDefault();
    console.log("contextmenu clicked");
    let x = 0;
    let y = 0;
    if (e.pageX > 1420) {
      x = 1420;
    } else {
      x = e.pageX;
    }
    if (e.pageY > 672) {
      y = 650;
    } else {
      y = e.pageY;
    }
    const positionChange = {
      x,
      y,
    };

    console.log("this is composed X: ");
    console.log(e.pageX);
    console.log("this is  composed Y: ");
    console.log(e.pageY);
    setxyPosition(positionChange);
    setcontext(true);
  };
  return (
    <div>
      <div
        className=" border-2 h-[25vh] w-full relative overflow-auto "
        onContextMenu={showcontext}
        onClick={() => {
          setcontext(false);
        }}
      >
        <h1 className="w-full bg-[#f45363f9] pl-8 flex items-center h-8 ">
          {" "}
          <img src={contactLogo} alt="" className="w-5 h-5 mr-1" />
          {data.title}
        </h1>
        <div className="">
          <table className="w-full text-gray-500 ">
            <thead className=" font-normal">
              <tr>
                <th className=" font-[500]">Subject</th>
                <th className=" font-[500]">Sent</th>
                <th className=" font-[500]">Opened</th>
                <th className=" font-[500]">Progress</th>
                <th className=" font-[500]">Status</th>
              </tr>
            </thead>
            <tbody className=" text-center bg-white text-black">
              {data.composedata.map((data) => (
                <tr className="border-b-2 text-sm ">
                  <td>{data.subject}</td>
                  <td>hellow</td>
                  <td>hellow</td>
                  <td>hellow</td>
                </tr>
              ))}
              <tr className="border-b-2 text-sm ">
                <td>hellow</td>
                <td>hellow</td>
                <td>hellow</td>
                <td>hellow</td>
                <td>hellow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {context ? (
        <div
          className="addresscontext absolute top-0 border-2 text-white px-2 py-2 bg-slate-600 w-64 rounded-md"
          style={{ top: xyPosition.y, left: xyPosition.x }}
        >
          <div className="menu" onClick={() => composepop(true)}>
            <p className=" border-2 border-[#fddd1a] px-4 py-1 w-full    rounded hover:bg-[#fddd1a] hover:text-black font-semibold transition-all">
              New Compose
            </p>
          </div>
          <div className="menu">
            <p className=" border-2 border-[#fddd1a] px-4 py-1 w-full mt-2   rounded hover:bg-[#fddd1a] hover:text-black font-semibold transition-all">
              open file
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Composedmessage;
