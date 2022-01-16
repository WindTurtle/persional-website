import React from "react";

function index() {
  const nav_items = [
    {
      title: "about",
      url: "#",
    },
    {
      title: "skills",
      url: "#",
    },
    {
      title: "porfolio",
      url: "#",
    },
    {
      title: "contact",
      url: "#",
    },
  ];

  const svn_items = [
    {
      title: "twitter",
      url: "#",
    },
    {
      title: "github",
      url: "#",
    },
  ];
  return (
    <div style={{ zIndex: 9999 }} className="absolute top-0 w-full">
      <div className="flex w-full justify-between items-center container mx-auto py-12">
        <div className="text-2xl">MY RESUME</div>
        <ul className="inline-flex space-x-16">
          {!!nav_items &&
            nav_items.map((items, index) => (
              <li
                className="relative transition-all hover:before:w-full before:w-0 hover:before:left-0 py-3 before:h-[4px] before:bg-white before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-500"
                key={index}
              >
                <a
                  href={items.url}
                  className="text-white capitalize text-2xl tracking-wider"
                >
                  {items.title}
                </a>
              </li>
            ))}
        </ul>
        <ul className="inline-flex space-x-16">
          {!!svn_items &&
            svn_items.map((items, index) => (
              <li
                className="relative transition-all hover:before:w-full before:w-0 hover:before:left-0 py-3 before:h-[4px] before:bg-white before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-500"
                key={index}
              >
                <a
                  href={items.url}
                  className="text-white capitalize text-2xl tracking-wider"
                >
                  {items.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default index;
