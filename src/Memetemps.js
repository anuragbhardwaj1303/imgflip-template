import React from "react";
import Template from "./Template";

const Memetemps = ({ temp }) => {
  return (
    <section>
      {temp.map((temps) => {
        return <Template key={temps.id} {...temps}></Template>;
      })}
    </section>
  );
};
export default Memetemps;
