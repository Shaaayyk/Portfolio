import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import ServiceCard from "./ServiceCard";

export default function ServiceCardWrapper() {
  return (
    <div className="lg:flex gap-10">
      <ServiceCard image={design} />
      <ServiceCard image={code} />
      <ServiceCard image={consulting} />
    </div>
  );
}
