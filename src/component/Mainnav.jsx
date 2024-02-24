import React from "react";
import { NavButtons } from "./Buttons";
import contactLogo from "../assets/contact.png";
import fileLogo from "../assets/files.png";
import emailLogo from "../assets/email.png";
import playLogo from "../assets/play.png";
import plusLogo from "../assets/plus.png";
import composeLogo from "../assets/compose.png";

const Mainnav = ({
  appsettingpop,
  contactpop,
  importdatapop,
  emailcollectpop,
  composedatapop,
}) => {
  return (
    <div>
      <div className="flex min-w-[1180px] bg-white pl-3 gap-8  p-3">
        <div className="mainnavbtn">
          <NavButtons
            data="New contact"
            logo={contactLogo}
            popup={contactpop}
          />
        </div>
        <div className="mainnavbtn">
          <NavButtons
            data="Import Data"
            logo={fileLogo}
            popup={importdatapop}
          />
        </div>
        <div className="mainnavbtn">
          <NavButtons
            data="Email collector"
            logo={emailLogo}
            popup={emailcollectpop}
          />
        </div>
        <div className="mainnavbtn">
          <NavButtons
            data="Compose new"
            logo={composeLogo}
            popup={composedatapop}
          />
        </div>
        <div className="mainnavbtn">
          <NavButtons data="Start now" logo={playLogo} />
        </div>
        <div className="mainnavbtn">
          <NavButtons data="Stop now" logo={playLogo} />
        </div>
        <div className="mainnavbtn">
          <NavButtons
            data="App setting"
            logo={composeLogo}
            popup={appsettingpop}
          />
        </div>
      </div>
    </div>
  );
};

export default Mainnav;
