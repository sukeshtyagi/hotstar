import React, { useState, useEffect, useRef } from "react";
import Navbar from "../sharedComponents/Navbar";
import Footer from "../sharedComponents/Footer";
import PopularShows from "./PopularShows";
import NewReleases from "./NewReleases";
import TopRated from "./TopRated";

function Home() {
  const [showFooter, setShowFooter] = useState(true);
  const [components, setComponents] = useState([
    <PopularShows key="PopularShows" />,
    <NewReleases key="NewReleases" />,
    <TopRated key="TopRated" />,
  ]);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowFooter(true);
          } else {
            setShowFooter(false);
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const contentDiv = contentRef.current;
      if (
        contentDiv &&
        contentDiv.scrollHeight - contentDiv.scrollTop ===
          contentDiv.clientHeight
      ) {
        setComponents((prevComponents) => [
          ...prevComponents,
          <NewReleases key={`NewReleases${prevComponents.length}`} />,
        ]);
      } else if (contentDiv && contentDiv.scrollTop === 0) {
        setComponents((prevComponents) => prevComponents.slice(1));
      }
    };

    const contentDiv = contentRef.current;
    if (contentDiv) {
      contentDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      const contentDiv = contentRef.current;
      if (contentDiv) {
        contentDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="homeContainer flex h-screen w-screen justify-start gap-8 bg-red-200">
      <div className="leftDiv box-border fixed top-0 left-0">
        <Navbar />
      </div>

      <div
        className="rightDiv box-border ml-64 w-3/4 h-fit flex flex-col justify-start gap-28 bg-yellow-200"
        ref={contentRef}
      >
        <div className="contentDiv box-border w-full flex flex-col gap-2 mt-4 mb-2">
          {components.map((component, index) => (
            <React.Fragment key={index}>{component}</React.Fragment>
          ))}
        </div>
        {showFooter && (
          <div className="footerDiv box-border w-full h-fit">
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
