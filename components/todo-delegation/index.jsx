import { useCallback, useState } from "react";
import Form from "./Form";
import { createItem } from "./Item";
import List from "./List";

export default function ToDoAppDelegation(){
    const
    [list, setList] = useState([createItem('дело 1'), createItem('дело 2')]),
    delItem = useCallback(id=>setList(list.filter(item => id !== item.id)),[]),
    toggleCheckbox = id=> 
        setList(old=>{
            const
            index = old.findIndex(item=>id===item.id),
            {checked, ...rest} = old[index],
            elem = Object.assign({}, rest, {checked: !checked});
            return old.with(index, elem);
        }), 
    addItem = useCallback(text=> setList(old=>old.concat(createItem(text))),[]);

    function eventHandler(evt) {
        const
        element = evt.target.closest('[data-id][data-action]');
        if(!element) return;
        const
        {id, action} = element.dataset;
        switch (action) {
            case 'toggle':
                toggleCheckbox(+id);
                return;
            case 'delete':
                delItem(+id);
                return;                  
            
        }
    }  
    return <div onClick={eventHandler}>    
    <Form addItem={addItem}/>
    <List 
        list={list}
    />
    </div>;
}