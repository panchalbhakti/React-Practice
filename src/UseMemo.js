import React, {useMemo, useState} from "react";

const ItemList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const items = ["apple", "banana", "mango", "kiwi", "pineapple"];

    const filteredItems = useMemo(() => {
        console.log("filterizing Items...");
        return items.filter(item => 
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return(
        <div>
            <input
            type="text"
            placeholder="Search-Items"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            />
            <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
        </div>
    )
}

export default ItemList;