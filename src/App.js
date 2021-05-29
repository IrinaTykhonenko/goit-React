import React from "react";
import Logo from "./components/Logo";
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json";
import Panel from "./components/Panel";

const App = () => {
  return (
    <div>
      <Panel title="Latest News">
        <p>lorem lorem lorem</p>
        <p>lorem</p>
      </Panel>
      <Panel>
        <p>lorem</p>
      </Panel>
      <Logo text="Main component-container for application" />
      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
