import { memo, useCallback, useRef, useState } from "react";
import Button from "./Button";

export default memo (function Form({addItem}){
    const
    [value, setValue] = useState('-');
    ref = useRef(''),
    onClick = useCallback(()=>{setValue(''); addItem(ref.current);}, [addItem, value]);
    ref.current = value;
    console.debug('render Form');
    return <fieldset ref={ref}>
        <legend>Form</legend>
        <input value={value} onInput={evt=>setValue(evt.target.value)}/>
        <Button onClick={()=>{setValue('');addItem(value);}}>➕</Button>
    </fieldset>
});