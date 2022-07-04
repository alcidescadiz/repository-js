import { Parser  } from 'json2csv';
import fs from 'fs'

const myCars = [
  {
    car: { make: "Audi", model: "A3" },
    price: 40000,
    color: "blue",
  },
  {
    car: { make: "BMW", model: "F20" },
    price: 35000,
    color: "black",
  },
  {
    car: { make: "Porsche", model: "9PA AF1" },
    price: 60000,
    color: "green",
  },
];

const fields = ["car.make", "car.model", "price", "color"];

const json2csvParser = new Parser({ fields });
const csv = json2csvParser.parse(myCars);
fs.writeFileSync('./src/jsontocsv/archivo.csv', csv, 'utf-8')

