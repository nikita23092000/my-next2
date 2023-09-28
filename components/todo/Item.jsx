import { memo } from "react";
export function createItem(name) {
    return {id: Math.random, name, checked: false};
}

export default memo(function Item({item, delItem, toggleCheckbox}){
    console.debug('render Item', item.id);
    return <li>
        <label data-id={item.id} data-action="toggle">
            <input type="checkbox" value={item.checked} onChange={()=>toggleCheckbox(item.id)}/>
            <span>{text}</span>            
        </label>
        <button data-id={item.id} data-action="delete">❌</button>
        {item.checked ? '❎' : '⬜'}
        
    </li>;
});