// import { div } from "@material-tailwind/react";
import { useState } from "react";
import contactLogo from "../assets/contact.png";
const Addressbook = ({ data, contactpop }) => {
  const TABLE_HEAD = ["No.", "Email", "Last Name ", "Status", "Opened"];

  const TABLE_ROWS = [
    {
      name: "John ",
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
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
    },
    {
      name: "Laurent Perrier",
      job: "Executive",
      date: "19/09/17",
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
  // const Data = localStorage.getItem("data");
  // console.log(`this from addressbookitems ${data.title}`);

  // console.log(JSON.parse(Data));
  // const allData = JSON.parse(Data)
  const [context, setcontext] = useState(false);
  const [xyPosition, setxyPosition] = useState({ x: 0, y: 0 });
  // const [datas,setData]=useState(data)
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
  // if (data.data == undefined) {
  //   data = [{}];
  // }
  console.log(data.data[2]);

  return (
    <div
      className="min-h-[60vh]  w-full realtive"
      onContextMenu={showcontext}
      onClick={() => {
        setcontext(false);
      }}
    >
      <h1 className="w-full bg-[#f45363f9] pl-8 flex items-center h-8 ">
        {" "}
        <img src={contactLogo} alt="" className="w-5 h-5 mr-1" />
        {data.title} ({data.data.length})
      </h1>

      <div className="">
        <table className="w-full min-w-max table-auto text-left  pt-10 ">
          <thead>
            <tr className="">
              {TABLE_HEAD.map((head, index) => (
                <th key={index} className=" bg-blue-gray-50 p-2">
                  <div
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-100"
                  >
                    {head}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.data.map((data, index) => {
              // const isLast = index === data.length - 1;
              // const isLast = True;
              // const classes = isLast
              //   ? "p-0 border-b text-sm"
              //   : "p-0 border-b border-blue-gray-50 text-sm";
              const classes = "p-0 border-b border-blue-gray-50 text-sm";
              // console.log("mapped data is shown");
              // console.log(data);
              return (
                <tr key={index}>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal pl-4"
                    >
                      {index + 1}
                    </div>
                  </td>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal mr-0 "
                    >
                      {data.email}
                    </div>
                  </td>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data.firstName}
                    </div>
                  </td>

                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {/* {data.lastname} */}
                    </div>
                  </td>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      Status
                    </div>
                  </td>
                  <td className={classes}>
                    <div
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      opened
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tbody></tbody>
        </table>
      </div>
      {context ? (
        <div
          className="addresscontext absolute top-0 z-10 border-2 text-white px-2 py-2 bg-slate-600 w-64 rounded-md"
          style={{ top: xyPosition.y, left: xyPosition.x }}
        >
          <div className="menu" onClick={() => contactpop(true)}>
            <p className=" border-2 border-[#fddd1a] px-4 py-1 w-full   rounded hover:bg-[#fddd1a] hover:text-black font-semibold transition-all">
              New Contact
            </p>
          </div>
          <div className="menu">
            <p className=" border-2 border-[#fddd1a] px-4 py-1 w-full mt-2   rounded hover:bg-[#fddd1a] hover:text-black font-semibold transition-all">
              open
            </p>
          </div>
          <div className="menu">
            <p className=" border-2 border-[#fddd1a] px-4 py-1 w-full mt-2   rounded hover:bg-[#fddd1a] hover:text-black font-semibold transition-all">
              open
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Addressbook;
