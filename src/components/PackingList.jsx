import { useState } from "react";
import Item from "./Item";

function PackingList({ items, setItems }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description")
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
        sortedItems = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    function handleClearList() {
        const confirm = window.confirm(
            "Are you sure you want to delete all items?"
        );

        if (confirm) setItems([]);
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item item={item} setItems={setItems} key={item.id} />
                ))}
            </ul>

            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={handleClearList}>Clear List</button>
            </div>
        </div>
    );
}

export default PackingList;
