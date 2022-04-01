const goods = [
  {
    id: "p___1",
    items: "Electronic",
    city: "Amsterdam",
  },
  {
    id: "p___2",
    items: "Home furniture",
    city: "Eindhoven",
  },
  {
    id: "p___3",
    items: "Music Instrument",
    city: "Amsterdam",
  },
  {
    id: "p___4",
    items: "Books",
    city: "Roermond",
  },
];
const fieldByIndex = (products, field) => {
  return products.reduce((acc, curr) => {
    const key = curr[field];
    const value = acc[key] ? [...acc[key], curr] : [curr];
    acc[key] = value;
    return acc;
  }, {});
};

console.log(fieldByIndex(goods, "city"));
