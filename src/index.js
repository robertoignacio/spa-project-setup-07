
import { render } from "react-dom";

import "./styles/main.scss";

import cryLaugh from "./images/cryLaugh.png";
const laughImg = document.getElementById("laughImg");
laughImg.src = cryLaugh;

// testing if it works
render(<p>React is connected!</p>, document.getElementById("root"));