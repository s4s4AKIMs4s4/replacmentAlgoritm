import React from "react"
const TestJSx = React.forwardRef<any, any>((props, ref) => {
    return <h1> Hello world</h1>
  });
  TestJSx.displayName = "TestJSx";
  export default TestJSx