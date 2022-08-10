import { Parser } from "json2csv";
import fs from "fs";

export function convert2CSV(objectData, dirname = "file") {
  try {
    if (!objectData || objectData.lenght === 0){
        return console.log("no data found");
    }
    const createAt = new Date().toLocaleDateString().replace(/\//g, "-");
    const fieldsHeader = [];
    for (const [key, values] of Object.entries(objectData[0])) {
      if (typeof values === "object") {
        for (const [llave, valor] of Object.entries(values)) {
          fieldsHeader.push({
            label: llave.toUpperCase(),
            value: `${key}.${llave}`,
          });
        }
      } else {
        fieldsHeader.push({ label: key.toUpperCase(), value: key });
      }
    }
    const json2csvParser = new Parser({
      fields: fieldsHeader,
      defaultValue: "no info",
    });
    const csv = json2csvParser.parse(objectData);
    fs.writeFileSync(`${dirname}-${createAt}.csv`, csv, "utf8");
  } catch (error) {
    return { msg: error.message };
  }
}
