import React from "react";
import TabHead from "./TabHead";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-4/6">
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row justify-evenly"
            role="tablist"
          >
           <li>
              <a onClick={e => {
                e.preventDefault();
                setOpenTab(1)
              }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <TabHead title={"ChatBots"} isActive={openTab===1?true:false} />
              </a>
            </li>
            <li>
              <a onClick={e => {
                e.preventDefault();
                setOpenTab(2)
              }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <TabHead title={"Writing"} isActive={openTab===2?true:false} />
              </a>
            </li>
            <li>
              <a onClick={e => {
                e.preventDefault();
                setOpenTab(3)
              }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <TabHead title={"Coding"} isActive={openTab===3?true:false} />
              </a>
            </li>

            <li>
              <a onClick={e => {
                e.preventDefault();
                setOpenTab(4)
              }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <TabHead title={"Text To Speech"} isActive={openTab===4?true:false} />
              </a>
            </li>

            <li>
              <a onClick={e => {
                e.preventDefault();
                setOpenTab(5)
              }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              > 
                <TabHead title={"Presentation"} isActive={openTab===5?true:false} />
              </a>
            </li>

          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-slate-800 w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p>
                    {/* add tools */}
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    {/* add tools */}
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    {/* add tools */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      return <Tabs color="purple" />;
    </>
  );
}