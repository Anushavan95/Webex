import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationBasic = (props) => {
  const [active, setActive] = useState(1);

  let count = props.count;
  let show = props.show;

  if (count === 0 || show === 0) {
    return;
  }

  let numberLen = Math.ceil(count / show);

  let items = [];

  for (let number = 1; number <= numberLen; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default PaginationBasic;
