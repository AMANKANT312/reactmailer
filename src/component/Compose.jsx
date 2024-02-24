import { useState } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";
const Compose = ({ display, updateall }) => {
  const [editorvalue, setEditorValue] = useState("");
  const [subject, setSubject] = useState("");
  const [selectCategory, setSelectCategory] = useState(false);
  const [selected, setSelceted] = useState([]);
  const composeddata = { editorvalue, subject };
  // getting data from localstorage
  let getdata = JSON.parse(localStorage.getItem("data"));
  console.log("from compose");
  const selectCat = (e) => {
    // value=e.target.value
    console.log(`sleceted has ${selected}`);
    let items = selected.filter((item) => item === e.target.value);
    console.log("itemss filterd");
    console.log(items);
    if (items.length <= 0) {
      setSelceted((prevSelected) => [...prevSelected, e.target.value]);
      //   setSelceted(selected+=e.target.value);
      console.log("after adding to selected");
      console.log(selected);
    } else {
      setSelceted((prevSelected) =>
        prevSelected.filter((value) => value !== e.target.value)
      );
      console.log("after removing slected");
      console.log(selected);
    }
  };
  console.log("whtat in slected ");
  console.log(selected);
  const updatedata = JSON.parse(localStorage.getItem("data"));
  const addtoPending = () => {
    console.log("addtopending is running");
    for (let i = 0; i < selected.length; i++) {
      const update = updatedata.filter((item) => item.title === selected[i]);
      console.log("for loop is running");
      update[0].composedata.push(composeddata);
      localStorage.setItem("data", JSON.stringify(updatedata));
    }
    display();
    updateall();
  };

  //   console.log(getdata[0]);
  return (
    <>
      <div className="main w-screen h-screen flex justify-center items-center fixed bg-[#80808072] z-10  backdrop-blur-[1px] flex-col">
        <div className=" w-[800px] h-[75.8%] rounded bg-white overflow-hidden">
          <div className="topcontrol w-full ">
            <div className=" h-[35px] bg-[#be3745ed]  flex justify-between">
              <div className="flex gap-5  font-serif items-center h-full ml-5">
                <button className="text-sm border-b-2 border-neutral-900">
                  File
                </button>
                <button className="text-sm border-b-2 border-neutral-900">
                  Edit
                </button>
                <button className="text-sm border-b-2 border-neutral-900">
                  Tools
                </button>
                <button className="text-sm border-b-2 border-neutral-900">
                  Help
                </button>
                <button className="text-sm border-b-2 border-neutral-900">
                  Language
                </button>
              </div>
              <div
                className=" h-full flex items-center mr-4 cursor-pointer "
                onClick={display}
              >
                <div>X</div>
              </div>
            </div>
          </div>
          <div className="maineditor bg-white border-2 border-red-700 h-[550px]">
            <div>
              <div className="flex   gap-4 px-4 py-2 ">
                <p>Subject</p>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-[70%] border-2 border-gray-900 rounded px-2 "
                />
              </div>
              <div className="flex   gap-4 px-4 py-2 ">
                <p>Attach file</p>
                <input
                  type="file"
                  className="w-[70%] border-2 border-gray-900 rounded px-2 "
                />
              </div>
            </div>
            <QuillEditor
              className=" w-full h-[75%] "
              theme="snow"
              value={editorvalue}
              onChange={(value) => setEditorValue(value)}
            />
          </div>
          <div className="bottombar w-full bg-red-900 p-1 relative">
            <div className="bottomcontro flex justify-around">
              <button onClick={display} className="px-2 py-1 bg-white rounded">
                Cancel
              </button>
              <button
                className="px-2 py-1 rounded bg-white"
                onClick={() => setSelectCategory(true)}
              >
                select category
              </button>
              <button
                className="px-2 py-1 rounded bg-white"
                onClick={addtoPending}
              >
                Add to pending
              </button>
            </div>
            {selectCategory ? (
              <div className="selectcategory absolute bottom-[40px] right-[340px] bg-white border-2 border-black rounded-md p-3">
                {getdata.map((data) => (
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="w-4"
                      value={data.title}
                      onChange={selectCat}
                    />
                    <p>{data.title}</p>
                  </div>
                ))}

                <button
                  className="bg-green-500 px-4 rounded mt-2 ml-7"
                  onClick={() => setSelectCategory(false)}
                >
                  Ok
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Compose;
