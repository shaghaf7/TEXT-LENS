import React from "react";

const Heading = ({ content }) => {
  return (
    <h1 className="text-3xl font-bold text-gray-800">
      {content}
    </h1>
  );
};

export default Heading;
