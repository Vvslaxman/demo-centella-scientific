import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { perks } from "../constants";

const Perk = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {perks.map((perk) => (
        <div className='w-45 h-45' key={perk.name}>
          <BallCanvas icon={perk.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Perk, "perks");
