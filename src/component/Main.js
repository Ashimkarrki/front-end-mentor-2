import React from "react";
import pc from "../images/image-computer.png";
import tab from "../images/image-devices.png";
import blacklist from "../images/icon-blacklist.svg";
import preview from "../images/icon-preview.svg";
import text from "../images/icon-text.svg";
import google from "../images/logo-google.png";
import hp from "../images/logo-hp.png";
import ibm from "../images/logo-ibm.png";
import microsoft from "../images/logo-microsoft.png";
import vector from "../images/logo-vector-graphics.png";
const Main = () => {
  return (
    <main className="main">
      <div className="primary">
        <div className="primary__desc">
          <h2 className="primary__desc__title">Keep track of your snippets</h2>
          <p className="primary__desc__para">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
        <div className="primary__features">
          <img className="primary__features__image" src={pc} alt="pc" />
          <div className="primary__features__lists">
            <div className="lists__items">
              <h3 className="lists__title">Quick Search</h3>
              <p className="lists__desc">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="lists__items">
              <h3 className="lists__title">iCloud Sync</h3>
              <p className="lists__desc">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div className="lists__items lists__items--no--margin">
              <h3 className="lists__title">Complete History</h3>
              <p className="lists__desc ">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
        <div className="secondary">
          <div className="secondary__desc">
            <h2 className="secondary__desc__tittle">
              Access Clipboard anywhere
            </h2>
            <p className="secondary__desc__para">
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </div>
          <img src={tab} alt="tab" className="secondary__img" />
          <div className="secondary__subtitle">
            <h2 className="secondary__subtitle__title">
              Supercharge your workflow
            </h2>
            <p className="secondary__subtitle__para">
              We’ve got the tools to boost your productivity.
            </p>
          </div>
          <div className="secondary__features">
            <div className="secondary__features__items">
              <img
                src={blacklist}
                alt=""
                className="secondary__features__items__icons"
              />
              <h3 className="secondary__features__items__header">
                Create blacklists
              </h3>
              <p className="secondary__features__items__desc">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div className="secondary__features__items">
              <img
                src={text}
                alt=""
                className="secondary__features__items__icons"
              />

              <h3 className="secondary__features__items__header">
                Plain text snippets
              </h3>
              <p className="secondary__features__items__desc">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="secondary__features__items">
              <img
                src={preview}
                alt=""
                className="secondary__features__items__icons"
              />

              <h3 className="secondary__features__items__header">
                Sneak preview
              </h3>
              <p className="secondary__features__items__desc">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="brands">
        <img src={google} alt="google" className="google" />
        <img src={ibm} alt="ibm" className="ibm" />
        <img src={microsoft} alt="microsoft" className="microsoft" />
        <img src={hp} alt="hp" className="hp" />
        <img src={vector} alt="vector" className="vector" />
      </div>
      <div className="downloads">
        <h2 className="downloads__title">Clipboard for iOS and Mac OS</h2>
        <p className="downloads__desc">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <div className="header__button">
          <button className="header__button__download header__button__download__ios ">
            <h2>Download for iOS</h2>
          </button>
          <button className="header__button__download header__button__download__mac ">
            <h2>Download for Mac</h2>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
