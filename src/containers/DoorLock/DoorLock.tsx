import React from 'react';
import {BUTTONS} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {onValueChange} from "./doorLockSlice";
import {typeInitState} from "../../types";

const DoorLock = () => {

    const initState = useSelector((state: typeInitState) => state.reducer);
    const dispatch = useDispatch();

    return (
        <form>
            <input type="password"
                   maxLength={4}
                   onChange={(event) => dispatch(onValueChange(event.target.value))}
                   value={initState.value}
                   required
            />
            {
                BUTTONS.map((every, index) => (
                    <button key={index} className="button" type="button">{every}</button>
                ))
            }
            <button className="button" type="button">*</button>
            <button className="button" type="button">0</button>
            <button className="button" type="submit">E</button>
        </form>
    );
};

export default DoorLock;