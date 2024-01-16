import React from "react";
import renderer from "react-test-renderer";
import { TCTBButton } from "../Components";

it("button render oldu", () => {
    renderer.create(<TCTBButton title="Başlık" onClicked={() => console.log("clicked")} />);
});