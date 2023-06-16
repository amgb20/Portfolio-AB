import React, { useRef, useEffect } from "react";
import gsap from "gsap";

function Work({ position, company, location, type, duration, grade }) {
  const elementsRef = useRef([]);
  const refsEduc = el => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    elementsRef.current.forEach((el, i) => {
      tl.from(
        el,
        {
          x: i % 2 === 0 ? "-100%" : "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
    });
    return () => tl.kill();
  }, []);
  
  return (
    <article ref={refsEduc} className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-content md:text-lg lg:text-xl">{position}</h1>
        <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <svg
              className="dark:fill-light-heading fill-dark-heading min-w-fit"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z" />
            </svg>
            <p className="text-content text-xs md:text-sm font-light pl-1">{company}</p>
          </div>
          <div className="flex items-center">
            <svg
              className="dark:fill-light-heading fill-dark-heading min-w-fit"
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 6.75C7.50555 6.75 7.0222 6.64003 6.61108 6.43401C6.19995 6.22798 5.87952 5.93514 5.6903 5.59253C5.50108 5.24992 5.45157 4.87292 5.54804 4.50921C5.6445 4.14549 5.8826 3.8114 6.23223 3.54918C6.58187 3.28695 7.02732 3.10838 7.51228 3.03603C7.99723 2.96368 8.4999 3.00081 8.95671 3.14273C9.41353 3.28464 9.80397 3.52496 10.0787 3.83331C10.3534 4.14165 10.5 4.50416 10.5 4.875C10.4992 5.3721 10.2356 5.84867 9.76689 6.20017C9.29822 6.55167 8.6628 6.74941 8 6.75ZM8 3.75C7.70333 3.75 7.41332 3.81598 7.16665 3.9396C6.91997 4.06321 6.72771 4.23892 6.61418 4.44448C6.50065 4.65005 6.47095 4.87625 6.52882 5.09448C6.5867 5.31271 6.72956 5.51316 6.93934 5.6705C7.14912 5.82783 7.41639 5.93498 7.70737 5.97838C7.99834 6.02179 8.29994 5.99951 8.57403 5.91437C8.84812 5.82922 9.08238 5.68502 9.24721 5.50002C9.41203 5.31501 9.5 5.09751 9.5 4.875C9.4996 4.57672 9.34144 4.29075 9.06022 4.07983C8.779 3.86892 8.3977 3.7503 8 3.75Z" />
              <path d="M8.00001 11.25L3.78201 7.51912C3.7234 7.4631 3.66539 7.40673 3.60801 7.35C2.8875 6.63817 2.49826 5.76871 2.50001 4.875C2.50001 3.78098 3.07947 2.73177 4.11092 1.95818C5.14237 1.1846 6.54132 0.75 8.00001 0.75C9.4587 0.75 10.8576 1.1846 11.8891 1.95818C12.9205 2.73177 13.5 3.78098 13.5 4.875C13.5018 5.7683 13.1127 6.63737 12.3925 7.34888L12.392 7.35C12.392 7.35 12.242 7.49775 12.2195 7.51763L8.00001 11.25ZM4.40601 6.89813C4.40701 6.89813 4.52301 7.01362 4.54951 7.03837L8.00001 10.0905L11.455 7.03425C11.477 7.01362 11.594 6.89738 11.5945 6.897C12.1831 6.31542 12.5012 5.60514 12.5 4.875C12.5 3.97989 12.0259 3.12145 11.182 2.48851C10.3381 1.85558 9.19348 1.5 8.00001 1.5C6.80653 1.5 5.66194 1.85558 4.81803 2.48851C3.97411 3.12145 3.50001 3.97989 3.50001 4.875C3.49896 5.60559 3.81739 6.31628 4.40651 6.89813H4.40601Z" />
            </svg>

            <p className="text-content text-xs md:text-sm font-light pl-1">{location}</p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">{duration}</p>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
            <svg width="16px" height="16px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#242424" stroke="#242424" stroke-width="0.984"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path fill="#ffffff" d="M19 5.85c0-.9-.44-1.71-1.16-2.22-.1-1.31-1.16-2.36-2.47-2.47C14.89.45 14.08.02 13.15 0c-.06 0-.21 0-.36.03-.28.04-.54.12-.79.23-.55-.26-1.11-.33-1.81-.18-.65.17-1.18.56-1.55 1.08-.63.05-1.21.32-1.69.77-.45.46-.72 1.08-.78 1.7-.53.37-.91.9-1.09 1.53-.148.61-.078 1.27.182 1.84-.26.56-.34 1.22-.18 1.83.18.63.56 1.17 1.08 1.54.06.62.33 1.23.78 1.69.32.3.67.52 1.06.65v9.91c0 .33.12.66.35.92.44.5 1.26.61 1.82.21l1.83-1.66 1.72 1.57c.26.22.57.34.9.34.4 0 .77-.17 1.04-.47.22-.25.34-.58.34-.91v-9.91c.38-.13.74-.35 1.05-.64.45-.46.73-1.08.79-1.7.51-.37.9-.91 1.07-1.53.148-.61.088-1.27-.172-1.84.17-.36.26-.75.26-1.15zm-5 15.36l-2-1.82-2 1.82v-7.36c.05.03.11.04.17.06.72.17 1.27.09 1.83-.17.35.17.75.26 1.15.26.22 0 .42-.03.66-.08.07-.02.13-.04.19-.07v7.36zm2.94-12.9c-.12.45-.4.83-.77 1.1-.04.44-.24.88-.56 1.21-.34.32-.76.52-1.2.55-.26.37-.66.64-1.12.77-.17.04-.31.06-.47.06-.28 0-.57-.06-.82-.19-.4.19-.79.25-1.31.13-.45-.13-.84-.4-1.1-.77-.44-.03-.86-.23-1.21-.56-.32-.33-.51-.76-.55-1.2-.37-.27-.65-.65-.77-1.1-.108-.44-.058-.91.122-1.31-.18-.41-.23-.88-.12-1.32.12-.44.4-.83.78-1.09.04-.44.23-.88.55-1.21.35-.33.76-.52 1.21-.55.26-.38.65-.65 1.11-.77.5-.11.9-.06 1.29.13.18-.08.36-.14.56-.17.11-.02.22-.02.26-.02.66.02 1.24.32 1.59.83.94.08 1.69.82 1.76 1.76.508.36.828.95.828 1.59 0 .28-.06.57-.18.82.18.41.23.88.12 1.31z"></path> 
                <circle fill="#ffffff" cx="12.001" cy="7" r="2"></circle> 
            </g>
            </svg>
            <p className="text-content text-xs md:text-sm font-light pl-1">{grade}</p>

        </div>
      </div>
    </article>
  );
}

export default Work;
