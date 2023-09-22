function Item({ item, setItems }) {
    function handleDeleteItems() {
        setItems((items) => items.filter((i) => i.id !== item.id));
    }

    function handleToggleItem() {
        setItems((items) =>
            items.map((i) =>
                i.id === item.id ? { ...i, packed: !i.packed } : i
            )
        );
    }

    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onChange={handleToggleItem}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={handleDeleteItems}>❌</button>
        </li>
    );
}

export default Item;
