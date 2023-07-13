import {DoorState} from "./containers/DoorLock/doorLockSlice";

export interface typeInitState extends DoorState {
    reducer: DoorState;
}