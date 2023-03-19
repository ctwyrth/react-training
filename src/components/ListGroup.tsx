import React, { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  let [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No Items Found</p>
        : (
          <ul className="list-group mb-3">
            {items?.map((item, idx) => <li className={ selectedIdx === idx ? "list-group-item active" : "list-group-item" } onClick={() => {
              setSelectedIdx(idx);
              onSelectItem(item);
            }} key={idx}>{item}</li>)}
          </ul>
        )}
    </>
  );
}
