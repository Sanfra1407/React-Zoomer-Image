import React from "react";
import { ZoomerImage } from "../../src/";

const ExampleComponent: React.FC = () => {
  return (
    <div className="awesome-component">
      <ZoomerImage
        zoomId="awesome-image"
        imgAlt="Awesome Image"
        imgTitle="This is a really awesome image!"
        imgSrc="../iron-man.jpg"
      />
    </div>
  );
};

export default ExampleComponent;
