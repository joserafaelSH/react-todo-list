import { useContext, useState } from "react";
import { ItemContextType, ItemCtx } from "../../Contexts/ItemContext";
import { Item } from "../../Types/Item";
import { ItemBoxStyles } from "./ItemBoxStyles";

type ItemBoxProps ={
    item:Item;
}

export const ItemBox = ({item}:ItemBoxProps)=>{
    const {id, name, done} = item;

    const [isChecked, setIsChecked] = useState<boolean>(done);

    const {removeItem, updateStatus} = useContext(ItemCtx) as ItemContextType  ;

    const handleRemoveItem = () => {
        window.alert("Removendo item");
        removeItem(item);
    }

    const handleCheck = () => {
        setIsChecked(!isChecked);
        updateStatus(item);
    }

    return(
        <ItemBoxStyles check= {isChecked}>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
            <label>{name}</label>
            <h4 onClick={handleRemoveItem} >RemoverTask</h4>
        </ItemBoxStyles>
    );
}