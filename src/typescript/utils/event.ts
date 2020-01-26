import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export function inputEventHandler(dispatch: Dispatch<SetStateAction<string>>) {
    return (event: ChangeEvent<HTMLInputElement>) => dispatch(event.target.value)
}
