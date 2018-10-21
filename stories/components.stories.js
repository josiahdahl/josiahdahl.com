import React from "react";

import { storiesOf } from "@storybook/react";
import NavBar from "../src/components/NavBar";

storiesOf('Components/NavBar', module)
  .add('On the side', () => <NavBar/>);
