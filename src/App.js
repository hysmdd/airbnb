import React, { memo } from "react";
import HelloWorld from "components/hello-world";

const App = memo(() => {
  return (
    <div>
      <h2>App</h2>
      <HelloWorld />
    </div>
  );
});

export default App;
