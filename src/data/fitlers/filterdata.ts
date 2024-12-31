import { v4 as uuidv4 } from 'uuid'

export const filters = [{
    id: "color",
    name: "Color",
    options: [
        { key: uuidv4(), value: "white", label: "White" },
        { key: uuidv4(), value: "beige", label: "Beige" },
        { key: uuidv4(), value: "blue", label: "Blue" },
        { key: uuidv4(), value: "brown", label: "Brown" },
        { key: uuidv4(), value: "green", label: "Green" },
        { key: uuidv4(), value: "yellow", label: "Yellow" }
    ]
},
{
    id: "size",
    name: "Size",
    options: [
        { key: uuidv4(), value: "S", label: "Small" },
        { key: uuidv4(), value: "M", label: "Medium" },
        { key: uuidv4(), value: "L", label: "Large" },
    ]
}]


export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { key: uuidv4(), value: "159-399", label: "₹159 То ₹399" },
            { key: uuidv4(), value: "399-999", label: "₹399 То ₹999" },
            { key: uuidv4(), value: "999-1999", label: "₹999 То ₹1999" },
            { key: uuidv4(), value: "1999-2999", label: "₹1999 To 2999" },
            { key: uuidv4(), value: "3999-4999", label: "₹3999 To ₹4999" },
        ]
    },
    {
        id: "disccout",
        name: "DISCOUNT RANGE",
        options: [
            { key: uuidv4(), value: "10", label: "10% And Above", },

            { key: uuidv4(), value: "20", label: "20% And Above" },

            { key: uuidv4(), value: "30", label: "30% And Above" },

            { key: uuidv4(), value: "40", label: "40% And Above" },

            { key: uuidv4(), value: "50", label: "50% And Above" },

            { key: uuidv4(), value: "60", label: "60% And Above" },

            { key: uuidv4(), value: "70", label: "70% And Above" },

            { key: uuidv4(), value: "80", label: "80% And Above" }]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { key: uuidv4(), value: "inStocks", label: "In Stock" },
            { key: uuidv4(), value: "outStocks", label: "Out OfStock" }
        ]
    }
]
