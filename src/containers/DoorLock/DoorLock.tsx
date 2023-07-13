import React from 'react';
import {BUTTONS} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {backSpace, btnClick, enter, onValueChange} from "./doorLockSlice";
import {typeInitState} from "../../types";

const DoorLock = () => {

    const initState = useSelector((state: typeInitState) => state.reducer);
    const dispatch = useDispatch();

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            dispatch(enter());
        }}>
            <input type={initState.type}
                   style={{background: initState.className}}
                   maxLength={4}
                   onChange={(event) => dispatch(onValueChange(event.target.value))}
                   value={initState.value}
                   required
            />
            {
                BUTTONS.map((every, index) => (
                    <button key={index} className="button" onClick={() => dispatch(btnClick(every))} type="button">{every}</button>
                ))
            }
            <button className="button" type="button" onClick={() => dispatch(backSpace())}>*</button>
            <button className="button" type="button" onClick={() => dispatch(btnClick("0"))}>0</button>
            <button className="button" type="submit">E</button>
        </form>
    );
};

export default DoorLock;