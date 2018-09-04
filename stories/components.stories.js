import React from "react";

import { storiesOf } from "@storybook/react";
import SideBar from "../src/components/SideBar";

storiesOf('Components/SideBar', module)
  .add('On the side', () => <SideBar/>);
