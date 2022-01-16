import React from "react";

function index() {
  return (
    <div>
      <div className="text-center my-24">
        <h4 className="text-primary-main uppercase font-medium text-2xl mb-3 tracking-wider">
          my portfolio
        </h4>
        <div className="text-4xl font-semibold text-secondary tracking-wider">
          Recent Works
        </div>
      </div>
      <div className="services">
        <div className="grid grid-cols-3 gap-6"></div>
      </div>
    </div>
  );
}

export default index;
