import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
const Memberright = ({ data, updateall }) => {
  const TABLE_HEAD = ["No.", "Name", "Sent"];

  const TABLE_ROWS = [
    {
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
    },
    {
      name: "Alexa Liras",
      job: "Developer",
      date: "23/04/18",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Michael Levi",
      job: "Developer",
      date: "24/12/08",
    },
    {
      name: "Richard Gran",
      job: "Manager",
      date: "04/10/21",
    },
  ];
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [sendfrom, setSendfrom] = useState("");
  const [sendername, setSenderName] = useState("");
  const [replyto, setReplyTo] = useState("");
  const [smtpvalue, setSmtpvalue] = useState("");
  const [port, setPort] = useState("");
  const [context, setcontext] = useState(false);
  const [xyPosition, setxyPosition] = useState({ x: 0, y: 0 });
  const [addsender, setAddSender] = useState(false);
  const [value, setValue] = useState("new category");
  const showcontext = (e) => {
    e.preventDefault();
    console.log("contextmenu clicked");
    let x = 0;
    if (e.pageX > 1420) {
      x = 1420;
    } else {
      x = e.pageX;
    }
    const positionChange = {
      x,
      y: e.pageY,
    };

    console.log("this is X: ");
    console.log(e.pageX);
    console.log("this is Y: ");
    console.log(e.pageY);
    setxyPosition(positionChange);
    setcontext(true);
  };
  console.log("data from sender memember");
  console.log(data);
  // data to save to local storage on the basis of selected title from home
  const SenderInfo = {
    username,
    password,
    sendfrom,
    sendername,
    replyto,
    port,
    smtpvalue,
  };
  const updatedata = JSON.parse(localStorage.getItem("data"));
  const addSender = () => {
    const update = updatedata.filter((item) => item.title === data.title);
    update[0].senderdata.push(SenderInfo);
    localStorage.setItem("data", JSON.stringify(updatedata));
    console.log("from addd sender");
    updateall();
    console.log(updatedata);
    setUserName("");
    setPassword("");
    setSendfrom("");
    setSenderName("");
    setPort("");
    setReplyTo("");
    setSmtpvalue("");
    setAddSender(false);
  };
  return (
    <>
      <div
        className="h-full w-full"
        onContextMenu={showcontext}
        onClick={() => {
          setcontext(false);
        }}
      >
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-2"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.senderdata.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.username}</td>
                <td>{0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {context ? (
        <div
          className="addresscontext absolute top-0 z-10 border-2 text-black px-0   w-64 rounded-md"
          style={{ top: xyPosition.y, left: xyPosition.x }}
        >
          <div className="menu">
            <p
              className=" border-2 border-[#fddd1a] px-4 py-1 w-full    rounded hover:bg-[#fddd1a] hover:text-black font-semibold transition-all cursor-pointer"
              onClick={() => {
                setAddSender(true);
                setcontext(false);
              }}
            >
              New sender
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
      {addsender ? (
        <div className="addsender fixed w-screen h-screen backdrop-blur-[1px] top-0 z-10 flex justify-center items-center ">
          <div className="container w-[600px] bg-slate-100 h-[530px] rounded-md overflow-hidden">
            <div className="w-full bg-red-500 pt-2 h-10 flex justify-between px-4">
              <p>add new sender</p>
              <p
                className=" cursor-pointer"
                onClick={() => setAddSender(false)}
              >
                X
              </p>
            </div>
            <div className=" w-full">
              <div className="topbtn flex w-full  py-2 px-4 gap-5">
                <p className=" border-2 px-3 bg-white rounded ">smtp server</p>
                <p className=" border-2 px-3 bg-white rounded ">pop3</p>
                <p className=" border-2 px-3 bg-white rounded ">Advance</p>
              </div>

              {/* smtp  */}
              <div className="container w-full  h-[405px] p-4 ">
                <div className="flex  gap-8 justify-center bg-white px-4 py-2">
                  {/* <p>SMTP Server</p> */}
                  <p>SMTP server</p>
                  <select
                    name=""
                    id=""
                    className="border-2 px-3 w-[300px]"
                    value={smtpvalue}
                    onChange={(e) => setSmtpvalue(e.target.value)}
                  >
                    {/* <option value=""></option> */}
                    <option value="smtp">smtp server</option>
                    <option value="smtp1">smtp server 1</option>
                    <option value="smtp2">smtp server 2</option>
                    <option value="smtp3">smtp server 3</option>
                    <option value="smtp4">smtp server 4</option>
                    <option value="smtp5">smtp server 5</option>
                  </select>
                </div>
                <div className="w-full bg-white p-2 flex gap-4 justify-center">
                  <div className="flex gap-2">
                    <p>PORT</p>
                    <input
                      type="number"
                      name=""
                      id=""
                      className="border-2 border-blue-950"
                      value={port}
                      onChange={(e) => setPort(e.target.value)}
                    />
                  </div>
                  <div className="border-2 px-3 rounded border-blue-950">
                    Default
                  </div>
                </div>
                <div className="w-full gap-2 bg-white  p-2 flex justify-evenly ">
                  <div className="flex gap-2 ">
                    <input type="checkbox" name="" id="" />
                    <p>Enable Authentication</p>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <p>Enable SSL/Tls</p>
                  </div>
                </div>
                <div className=" bg-white p-4">
                  <div className="px-4 flex justify-end mb-4 mr-4">
                    <label htmlFor="" className="mr-2">
                      Username :
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-zinc-400 w-2/3 focus:outline-none focus:border-b-2"
                      value={username}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  <div className="px-4 flex justify-end mb-4 mr-4">
                    <label htmlFor="" className="mr-2">
                      Password :
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-zinc-400 w-2/3 focus:outline-none focus:border-b-2"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="px-4 flex justify-end mb-4 mr-4">
                    <label htmlFor="" className="mr-2">
                      Send from :
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-zinc-400 w-2/3 focus:outline-none focus:border-b-2"
                      value={sendfrom}
                      onChange={(e) => setSendfrom(e.target.value)}
                    />
                  </div>
                  <div className="px-4 flex justify-end mb-4 mr-4">
                    <label htmlFor="" className="mr-2">
                      Sender name :
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-zinc-400 w-2/3 focus:outline-none focus:border-b-2"
                      value={sendername}
                      onChange={(e) => setSenderName(e.target.value)}
                    />
                  </div>
                  <div className="px-4 flex justify-end mb-4 mr-4">
                    <label htmlFor="" className="mr-2">
                      Reply - to :
                    </label>
                    <input
                      type="text"
                      className="border-b-2 border-b-zinc-400 w-2/3 focus:outline-none focus:border-b-2"
                      value={replyto}
                      onChange={(e) => setReplyTo(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-evenly">
              <p
                className=" bg-red-500 px-3  py-1 rounded cursor-pointer "
                onClick={() => setAddSender(false)}
              >
                Cancel{" "}
              </p>
              <p
                className=" bg-green-600 px-3  py-1 rounded cursor-pointer"
                onClick={addSender}
              >
                Add Sender
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default Memberright;
