import { useEffect } from "react";
import NavigationRoutes from "./routes/NavigationRoutes";
import "./App.css";
import NatureScroll from "./ui/NatureScroll";
import { useDispatch } from "react-redux";
import { mobileSliceActions } from "../store/mobile-slice";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleResize = () => {
            dispatch(mobileSliceActions.setisMobile(window.innerWidth < 900));
        };
        window.addEventListener("resize", handleResize);
        // Clean up
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <NatureScroll>
            <NavigationRoutes />
        </NatureScroll>
    );
}

export default App;
