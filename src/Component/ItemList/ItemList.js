import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemList = ({data}) => {
    return (
        <div>
            {data.map((data) =>

            <div key={data.id}>
                <ItemDetail data={data} />

            </div>

            )}
        </div>
    )
};

export default ItemList;