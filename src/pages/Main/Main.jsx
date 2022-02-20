import React from "react";
import "./Main.css";
import PIXIContainer from "../../components/PIXIContainer/PIXIContainer";
import {useDispatch} from "react-redux";
import {setKeyDown, setKeyUp} from "../../state/actions/gamepadAction";

export const Main = () => {
    const dispatch = useDispatch();
    return <main>
        <PIXIContainer
            width={window.innerWidth}
            height={window.innerHeight}
            onLeftButtonDown={()=>dispatch(setKeyDown("A"))}
            onLeftButtonUp={()=>dispatch(setKeyUp("A"))}
            onRightButtonDown={()=>dispatch(setKeyDown("D"))}
            onRightButtonUp={()=>dispatch(setKeyUp("D"))}
        />
    </main>;
}
