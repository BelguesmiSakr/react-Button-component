import React, { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
const Accordion = ({ items }) => {
  const [isExpandedIndex, setisExpandedIndex] = useState(-1);
  const handelClick = (nextIndex) => {
    setisExpandedIndex((isExpandedIndex) => {
      if (isExpandedIndex === nextIndex) return -1;
      else return nextIndex;
    });
  };

  return (
    <div>
      {items.map((item, i) => {
        const isExpended = isExpandedIndex === i;
        const icon = isExpended ? <GoChevronDown /> : <GoChevronLeft />;
        return (
          <div key={item.id} className="w-2/12">
            <div
              className="flex items-center justify-between p-3 bg-gray-100 border-b"
              onClick={() => handelClick(i)}
            >
              {item.label}
              {icon}
            </div>
            {isExpended && <div className="p-5 border-b">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
