import React from "react";
import Web from "../../asset/icons/web-development.png";
import UI from "../../asset/icons/user-interface.png";
import Optimization from "../../asset/icons/optimization.png";
import Service from "../Service";

function index() {
  const services = [
    {
      title: "Development",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      color: "linear-gradient(137.5deg, #61E1C2 -41.62%, #E5FF46 161.69%)",
      icon: Web,
    },
    {
      title: "UI Building",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      color: "linear-gradient(134.53deg, #FE8935 -19.7%, #FFC0D3 94.24%)",
      icon: UI,
    },
    {
      title: "Optimization",
      description:
        "mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac",
      color: "linear-gradient(134.53deg, #EF3EBD -39.71%, #FF9393 127.29%)",
      icon: Optimization,
    },
  ];
  return (
    <div>
      <div className="text-center mb-16">
        <h4 className="text-primary-main uppercase font-medium text-2xl mb-3">
          what i do
        </h4>
        <div className="text-4xl font-semibold text-secondary">
          Specializing In
        </div>
      </div>
      <div className="services">
        <div className="grid grid-cols-3 gap-6">
          {services &&
            services.map((service, index) => (
              <Service key={`item_${index}`} data={service} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default index;
