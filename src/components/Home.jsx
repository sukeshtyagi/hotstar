import React, { useState, useEffect, useRef } from "react";
import Navbar from "./sharedComponents/Navbar";
import Footer from "./sharedComponents/Footer";
import Cards from "./sharedComponents/Cards";

function Home() {
  const [showFooter, setShowFooter] = useState(true);
  const [items, setItems] = useState([
    "Popular Shows1",
    "Popular Shows2",
    "Popular Shows3",
    "Popular Shows4",
    "Popular Shows5",
    "Popular Shows6",
    "Popular Shows7",
    "Popular Shows8",
    "Popular Shows9",
    "Popular Shows10",
    "Popular Shows11",
    "Popular Shows12",
    "Popular Shows13",
    "Popular Shows14",
    "Popular Shows15",
    "Popular Shows16",
    "Popular Shows17",
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
        contentDiv.scrollHeight - contentDiv.scrollTop ===
        contentDiv.clientHeight
      ) {
        // User has reached the bottom of the content div
        setItems((prevItems) => [...prevItems, "New Item"]);
      } else if (contentDiv.scrollTop === 0) {
        // User has scrolled to the top of the content div
        setItems((prevItems) => prevItems.slice(1));
      }
    };

    contentRef.current.addEventListener("scroll", handleScroll);

    return () => contentRef.current.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="homeContainer flex justify-start bg-black">
      <div className="leftDiv box-border fixed top-0 left-0">
        <Navbar />
      </div>

      <div
        className="rightDiv box-border ml-64 w-3/4 h-fit overflow-y-auto"
        ref={contentRef}
      >
        <div className="contentDiv box-border w-full flex flex-col gap-2 mt-4 mb-2">
          {items.map((category, index) => (
            <Cards key={index} category={category} />
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
