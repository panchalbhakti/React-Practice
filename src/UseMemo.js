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
          <li key={item}>{items}</li>
        ))}
      </ul>
        </div>
    )
}

export default ItemList;

// code is filtering a list of items based on what the user types (searchTerm). It uses useMemo to remember the filtered list, so it doesn't need to filter again unless the searchTerm changes.

//useMemo hook: It only runs the filter when the user types something new, instead of running every time the page updates.