import React from 'react';
import {BUTTONS} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {backSpace, btnClick, enter, onValueChange} from "./doorLockSlice";
import {typeInitState} from "../../types";

const DoorLock = () => {

    const initState = useSelector((state: typeInitState) => state.reducer);
    const dispatch = useDispatch();

    return (
        <form className="mt-5 ms-5 form shadow-lg mb-5 bg-body-tertiary rounded" onSubmit={(event) => {
            event.preventDefault();
            dispatch(enter());
        }}>
            <input type={initState.type}
                   style={{background: initState.className}}
                   maxLength={4}
                   className="form-control w-50 input"
                   onChange={(event) => dispatch(onValueChange(event.target.value))}
                   value={initState.value}
                   required
            />
            <div className="d-block btnes">
                {
                    BUTTONS.map((every, index) => (
                        <button key={index} className="btn btn-primary m-1" onClick={() => dispatch(btnClick(every))} type="button">{every}</button>
                    ))
                }
                <button className="btn btn-danger m-1" type="button" onClick={() => dispatch(backSpace())}> - </button>
                <button className="btn btn-primary m-1" type="button" onClick={() => dispatch(btnClick("0"))}>0</button>
                <button className="btn btn-success m-1" type="submit">E</button>
            </div>
        </form>
    );
};

export default DoorLock;