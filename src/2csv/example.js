import {convert2CSV} from './index.js'

const myCars = [
    {
      "car": "Audi",
      "price": 40000,
      "color": "blue",
      "model": {
        year: 1996,
        model: 'f1'
      }
    }, {
      "car": "BMW",
      "price": 35000,
      "color": "black",
      "model": {
        year: 205,
        model: 'g4'
      }
    }, {
      "car": "Porsche",
      "price": 60000,
      "color": "green",
      "model": {
        year: 2017,
        model: 'k2'
      }
    }
  ];

  convert2CSV(myCars, 'cars')