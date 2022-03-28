const testDeliveries = [
  {
    description: "Groceries",
    isDelivered: false,
    isReturned: true,
    driverId: "dr---1",
    deliveryId: "d----1",
  },
  {
    description: "Table",
    isDelivered: true,
    isReturned: true,
    driverId: "dr---2",
    deliveryId: "d----2",
  },
  {
    description: "Bed",
    isDelivered: true,
    isReturned: false,
    driverId: "dr---1",
    deliveryId: "d----3",
  },
  {
    description: "Cupboard",
    isDelivered: false,
    isReturned: true,
    driverId: "dr---3",
    deliveryId: "d----4",
  },
];

const arrItem = (item, idx) => {
  return item.reduce((acc, itd) => {
    const key = itd[idx];
    const value = acc[key] ? [...acc[key], itd] : [itd];
    acc[key] = value;
    return acc;
  }, {});
};

console.log(arrItem(testDeliveries, "description"));
