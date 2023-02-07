import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import Button from "../components/button";

const ButtonsPage = () => {
  return (
    <div>
      <Button onClick={() => console.log("aaaaaa")} className={"mb-5"}>
        Hi there!
      </Button>
      <Button onMouseOver={() => console.log("aaaaaa")} primary rounded outline>
        <WiDayCloudy />
        Hi there!
      </Button>
      <Button secondary>Click me!!</Button>
      <Button success rounded>
        Danger
      </Button>
      <Button warning outline>
        Danger
      </Button>
      <Button danger rounded>
        Danger
      </Button>
    </div>
  );
};

export default ButtonsPage;
