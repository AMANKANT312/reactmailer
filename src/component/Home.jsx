import React, { useEffect, useState } from "react";

import Mainnav from "./Mainnav";
import fileLogo from "../assets/files.png";
import Leftcategory from "./Leftcategory";
import Memberright from "./Memberright";
import Addressbook from "./Addressbook";
import Composedmessage from "./Composedmessage";
import Bottombar from "./Bottombar";

import NewContactpopup from "./NewContactpopup";
import AppSetting from "./AppSetting";
import ImportData from "./ImportData";
import Emailcollectorpopup from "./Emailcollectorpopup";
import Contextmenu from "./Contextmenu";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Compose from "./Compose";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
// const useCustomEffect = () => {
//   useEffect(() => {
//     console.log("useCustomEffect ran");
//     // Additional side effects or logic can be added here
//   }, []);
// };
const Home = () => {
  let initdata = JSON.parse(localStorage.getItem("data"));
  console.log(initdata);
  if (initdata === null) {
    let data = [{ title: "Home", data: [], composedata: [], senderdata: [] }];
    localStorage.setItem("data", JSON.stringify(data));
  }
  // let data = [{ title: "Home", data: [], composedata: [], senderdata: [] }];
  // localStorage.setItem("data", JSON.stringify(data));
  const [category, setCategory] = useState(true);
  const [contact, setContact] = useState(false);
  const [appsetting, setAppsetting] = useState(false);
  const [importdata, setImportdata] = useState(false);
  const [emailcollector, setEmailcollector] = useState(false);
  const [compose, setCompose] = useState(false);
  const [Title, setTitle] = useState("Home");
  console.log(Title);

  const [mainData, setMainData] = useState(
    JSON.parse(localStorage.getItem("data"))
  );
  console.log("this is from home through console");
  console.log(JSON.parse(localStorage.getItem("data")));

  // useEffect(() => {
  //   setMainData(JSON.parse(localStorage.getItem("data")));
  // }, [compose, contact]);

  const categoryHandle = () => {
    setCategory(true);
  };
  const memberHandle = () => {
    setCategory(false);
  };
  // console.log("from home after setting maindata");
  // console.log(mainData);
  // ------------------------------------------------------  left category
  const [Data, setData] = useState([]);
  const [value, setValue] = useState("");
  const addNewCategory = () => {
    setAddCategory(false);
    console.log(value);
    let getdata = localStorage.getItem("data");
    console.log(getdata);
    let data = [
      ...Data,
      { title: value, data: [], composedata: [], senderdata: [] },
    ];
    setData(data);
    // localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data));
    // localStorage.removeItem("data");
    setValue("");
  };
  useEffect(() => {
    // console.log(localStorage.getItem("data"));
    setData(JSON.parse(localStorage.getItem("data")));
  }, [value, mainData]);

  // const UpdateAll = () => {
  //   console.log("this is from updateall ..............");
  //   console.log(JSON.parse(localStorage.getItem("data")));
  //   // setMainData(JSON.parse(localStorage.getItem("data")));
  //   let localdata = JSON.parse(localStorage.getItem("data"));
  //   console.log("from local data");
  //   console.log(localdata);
  //   console.log("from main data");
  //   console.log(mainData);
  //   console.log("after updating mainData");
  //   setMainData(JSON.parse(localStorage.getItem("data")));
  //   console.log(mainData);
  //   setData(JSON.parse(localStorage.getItem("data")));
  //   let datas = mainData.filter((item) => item.title === Title);
  //   console.log("this is filtered data from update all");
  //   console.log(datas);
  //   setMainData(datas);
  //   console.log("latest data in main data from useState");
  //   console.log(mainData);
  // };

  const [update, setUpdate] = useState(false);
  // let datafromupdate = "";
  const UpdateAll = () => {
    console.log("this is from updateall ..............");
    console.log("updatint set update from func");
    setUpdate(true);
    // console.log("after updating mainData");
    // console.log(mainData); // This may still not reflect the updated state immediately
  };
  useEffect(() => {
    console.log("use effect run on update");
    // Filter data based on condition
    let localdata = JSON.parse(localStorage.getItem("data"));
    let datas = localdata.filter((item) => item.title === Title);
    console.log("this is filtered data from update all useEffect");
    console.log(datas);

    // Update mainData state with filtered data
    setMainData(datas);
    setUpdate(false);
  }, [update]);

  console.log("maindata in outside the function");
  console.log(mainData[0]);

  const [context, setcontext] = useState(false);
  const [xyPosition, setxyPosition] = useState({ x: 0, y: 0 });
  const [addcategory, setAddCategory] = useState(false);

  const datatoparent = (title) => {
    console.log("sending data to parent");
    setTitle(title);
    console.log(title);
    let datas = Data.filter((item) => item.title === title);
    // console.log(datas);
    setMainData(datas);
  };
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
  // left category end
  return (
    <>
      {/* popu upp container   */}
      {contact ? (
        <NewContactpopup
          display={() => setContact(false)}
          data={mainData[0]}
          updateall={UpdateAll}
        />
      ) : (
        <></>
      )}
      {appsetting ? <AppSetting display={() => setAppsetting(false)} /> : <></>}
      {importdata ? <ImportData display={() => setImportdata(false)} /> : <></>}
      {compose ? (
        <Compose display={() => setCompose(false)} updateall={UpdateAll} />
      ) : (
        <></>
      )}
      {emailcollector ? (
        <Emailcollectorpopup display={() => setEmailcollector(false)} />
      ) : (
        <></>
      )}

      {/* <AppSetting/> */}
      {/* <ImportData/> */}
      {/* <Emailcollectorpopup/> */}
      {/* <Contextmenu/> */}
      {/* popu upp container  end  */}
      <div className="w-full h-[100vh]  ">
        {/* topnav */}
        <div className="w-full h-[45px] bg-[#f45363f7] fixed">
          <div className="flex gap-5  font-serif items-center h-full ml-5 ">
            <button className="text-sm hover:border-b-0">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-1 text-sm text-gray-900 hover:bg-[#fddd1a]">
                    File
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </button>
            <button className="text-sm hover:border-b-0">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-1 text-sm text-gray-900 hover:bg-[#fddd1a]">
                    Edit
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </button>
            <button className="text-sm  hover:border-b-0">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-1 text-sm  text-gray-900 hover:bg-[#fddd1a]">
                    Tools
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </button>
            <button className="text-sm hover:border-b-0">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-1 text-sm text-gray-900 hover:bg-[#fddd1a]">
                    Help
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </button>
            <button className="text-sm hover:border-b-0">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-1 text-sm text-gray-900 hover:bg-[#fddd1a]">
                    Languages
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute  z-30  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full px-4 py-2 text-left text-sm"
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </button>
          </div>
        </div>
        <div className="overflow-hidden pt-[45px]">
          {/* main nav  */}
          <Mainnav
            appsettingpop={() => setAppsetting(true)}
            contactpop={() => setContact(true)}
            emailcollectpop={() => setEmailcollector(true)}
            importdatapop={() => setImportdata(true)}
            composedatapop={() => setCompose(true)}
          />
        </div>
        {/* body content  */}
        <div className="maincontent w-[100%] h-[calc(100vh-142px)]  flex">
          {/* left */}
          <div className="left h-full bg-white min-w-[300px]">
            <div className="head w-full h-8 bg-slate-50 ">
              <div className="h-full flex gap-2">
                <div
                  className="flex  h-full  items-center p-2 cursor-pointer"
                  onClick={categoryHandle}
                >
                  <div>
                    <img src={fileLogo} alt="" className=" w-5 mr-1" />
                  </div>
                  <div>Category(3)</div>
                </div>
                <div
                  className="flex  h-full  items-center p-2 cursor-pointer "
                  onClick={memberHandle}
                >
                  <div>
                    <img src={fileLogo} alt="" className=" w-5 mr-1" />
                  </div>
                  <div>Sender Email (2)</div>
                </div>
              </div>
            </div>
            <div className="leftbody h-[76.5vh]">
              {/* {left category} */}
              {/* <Leftcategory/> */}
              {/* sender email  */}
              {category ? (
                // <Leftcategory setdata={setMainData} />
                <>
                  <div
                    className="category  w-full h-full bg-white pt-5"
                    onContextMenu={showcontext}
                    onClick={() => {
                      setcontext(false);
                    }}
                  >
                    {Data.map((data) => (
                      <div
                        className="flex ml-2  items-center  cursor-pointer hover:bg-slate-400 p-1"
                        key={data}
                      >
                        {/* <p className="mr-1">--</p> */}
                        <div>
                          <img src={fileLogo} alt="" className=" w-5 mr-1" />
                        </div>
                        <div onClick={() => datatoparent(data.title)}>
                          {data.title}({})
                        </div>
                      </div>
                    ))}
                    {/* <div className="flex ml-4 h-4 items-center mb-2">
                      <div>
                        <img src={fileLogo} alt="" className=" w-5 mr-1" />
                      </div>
                      <div>Address Book (1)</div>
                    </div>
                    <div className="flex ml-2 h-4 items-center mb-2">
                      <p className="mr-1">--</p>
                      <div>
                        <img src={fileLogo} alt="" className=" w-5 mr-1" />
                      </div>
                      <div>Company (2)</div>
                    </div>
                    <div className="flex ml-2 h-4 items-center mb-2">
                      <p className="mr-1">--</p>
                      <div>
                        <img src={fileLogo} alt="" className=" w-5 mr-1" />
                      </div>
                      <div>Sample (0)</div>
                    </div> */}
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
                            setAddCategory(true);
                            setcontext(false);
                          }}
                        >
                          New Category
                        </p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                  {addcategory ? (
                    <div className="addcategory fixed w-screen h-screen backdrop-blur-[1px] top-0 z-10 flex justify-center items-center ">
                      <div className="container w-[400px] bg-slate-200 h-[150px] rounded-md overflow-hidden">
                        <div className="w-full bg-red-500 pt-2 h-10 flex justify-between px-4">
                          <p>add new category</p>
                          <p
                            className=" cursor-pointer"
                            onClick={() => setAddCategory(false)}
                          >
                            X
                          </p>
                        </div>
                        <div className=" w-full flex justify-evenly mt-4">
                          <label htmlFor="newcategory">
                            Enter category name
                          </label>
                          <input
                            type="text"
                            className="px-2 py-1 rounded border-2 border-slate-400  "
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                        <div className="flex w-full justify-evenly mt-4">
                          <p
                            className=" bg-red-500 px-3 rounded cursor-pointer py-1 "
                            onClick={() => setAddCategory(false)}
                          >
                            Cancel{" "}
                          </p>
                          <p
                            className=" bg-green-600 px-3 rounded cursor-pointer py-1"
                            onClick={addNewCategory}
                          >
                            Add category
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <div className="h-full w-full bg-white memberright">
                  <Memberright data={mainData[0]} updateall={UpdateAll} />
                </div>
              )}
            </div>
          </div>
          {/* right  */}
          <div className="right flex-grow h-full bg-white mr-2 overflow-hidden">
            <div className=" h-[70%] bg-white overflow-auto addressbook">
              <div className="  min-h-full  bg-white min-w-[1000px] border-2">
                <Addressbook data={mainData[0]} contactpop={setContact} />
              </div>
            </div>
            <div className="h-[30%] bg-white">
              <Composedmessage data={mainData[0]} composepop={setCompose} />
            </div>
          </div>
        </div>
        {/* bottom border  */}
        <div className="h-8 bg-[#f45363f9] w-full">
          <div className="h-full w-full overflow-hidden">
            <Bottombar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
