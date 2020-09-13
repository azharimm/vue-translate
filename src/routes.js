import Home from "./pages/Home";
import Saved from "./pages/Saved";

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/saved",
		name: "saved",
		component: Saved,
	},
];

export default routes;
