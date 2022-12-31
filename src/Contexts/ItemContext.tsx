import { createContext, useState } from "react";
import { Item } from "../Types/Item";

export type ItemContextType = {
  list: Item[];
  saveList: (item: Item) => void;
  updateStatus: (item: Item) => void;
  removeItem: (item: Item) => void;
};

export const ItemCtx = createContext<ItemContextType | null>(null);

const ItemContext = ({ children }: any) => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Tarefa 1", done: false },
    { id: 2, name: "Tarefa 2", done: false },
  ]);

  const saveList = (item: Item) => {
    const newTask: Item = {
      id: list.length + 1,
      name: item.name,
      done: item.done,
    };
    setList([...list, newTask]);
  };

  const updateStatus = (item: Item) => {
    list.filter((task: Item) => {
      if (task.id === item.id) {
        task.done = !item.done;
      }
      setList([...list]);
    });
  };

  const removeItem = (item: Item) => {
    const filteredList = list.filter((task: Item) => {
      return task.id !== item.id;
    });
    setList(filteredList);
  };

  return (
    <ItemCtx.Provider value={{ list, saveList, updateStatus, removeItem }}>
      {children}
    </ItemCtx.Provider>
  );
};

export default ItemContext;
