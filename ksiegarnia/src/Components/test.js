import React, { useState } from "react";

const TestComponent = () => {
  return <div> {process.env.React_App_APIKEY}</div>;
};

export default TestComponent;
