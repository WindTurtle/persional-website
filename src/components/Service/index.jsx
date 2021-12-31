import React from "react";

function index({ data }) {
  return (
    <div className="relative border-2 border-border pt-16 pb-8 px-7 rounded-tr-[40px]">
      <div
        className="absolute top-0 transfer -translate-y-1/2 rounded-xl"
        style={{ background: data.color }}
      >
        <img className="p-6" src={data.icon} alt={data.title} />
      </div>
      <h4 className="text-2xl font-semibold text-secondary my-2">
        {data.title}
      </h4>
      <p className="text-sub text-base">{data.description}</p>
    </div>
  );
}

export default index;
