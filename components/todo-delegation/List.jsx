import Item from "./Item";

export default function List(list){
    console.debug('render List');
    return <fieldset>
        <legend>List</legend>
        <ol>
            {list.map(item=><Item key={Item.id} item={item} delItem={delItem} toggleCheckbox=
            {toggleCheckbox} />)}
        </ol>
    </fieldset>
}