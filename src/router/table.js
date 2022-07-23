let useGenerateTableCRUD = function () {
  let templeteArray = ``;
  let getTempleteArray = () => templeteArray;
  let setTempleteArray = (array, tableClass = "table") => {
    if (array.length < 1) return (templeteArray = ``);
    let headers =
      `<table class="${tableClass}" ><thead><tr>` +
      Object.entries(array[0])
        .map((e) => `<th>${e[0].toUpperCase()}</th>`)
        .join("") +
      "<th>ACCIONS</th></tr></thead>";
    let accions =
      "<td> <button class='btn edit'>Edit</button> <button class='btn delete'>Delete</button></td>";
    let renderTable =
      `<tbody>` +
      array
        .map((e) => {
          return (
            "<tr>" +
            Object.entries(e)
              .map((e) => `<td id=${e[0]} >${e[1]}</td>`)
              .join(" ") +
            accions +
            "</tr>"
          );
        })
        .join("") +
      "</tbody>";
    return (templeteArray = headers + renderTable + "</table>");
  };
  return [getTempleteArray, setTempleteArray];
};

let useArrayObjects = function () {
  let save = [];
  let getArrayObjects = () => save.sort((e, p) => e.id - p.id);
  let setArrayObjects = ({ value, mode, id }) => {
    if (mode === "add") {
      if (!value?.id) {
        id =
          typeof save[save.length - 1]?.id === "number"
            ? save[save.length - 1]?.id + 1
            : getArrayObjects().length + 1;
        save.push({ id, ...value });
      } else {
        save.push(value);
      }
    }
    if (mode === "delete") save = save.filter((e) => e.id !== id);
    if (mode === "update")
      save = save.map((e) => {
        if (e.id === id) {
          e = value;
          e.id = id;
          return e;
        }
        return e;
      });
  };
  return [getArrayObjects, setArrayObjects];
};

/**
 * Captura los datos de un formulario en un evento submit
 */
let useForm = function () {
  let data = {};
  let getData = () => data;
  let eventForm = function (id) {
    let formData = document.getElementById(id).elements;
    for (let index = 0; index < formData.length; index++) {
      if (formData[index].name) {
        data[formData[index].name] = formData[index].value;
      }
    }
    document.getElementById(id).reset();
  };
  return [getData, eventForm];
};

let [getTempleteArray, setTempleteArray] = useGenerateTableCRUD();
let [getArrayObjects, setArrayObjects] = useArrayObjects();
let [getData, eventForm] = useForm();

function RenderTable() {
  setTempleteArray(getArrayObjects());
  setTimeout(()=>{
    try {
        document.getElementById("tabla").innerHTML = getTempleteArray();
    } catch (error) {
    }
  }, 10)
}

document.addEventListener("submit", (e) => {
  e.preventDefault();
  eventForm("formulario");
  setArrayObjects({ value: getData(), mode: "add" });
  setTimeout(()=>{
      RenderTable();
  },10)
});

document.addEventListener("click", (e) => {
  if (e.target.innerHTML === "Delete") {
    let id = Number(e.target.parentNode.parentNode.childNodes[0].innerHTML);
    setArrayObjects({ mode: "delete", id });
  }
  if (e.target.innerHTML === "Edit") {
    let id = Number(e.target.parentNode.parentNode.childNodes[0].innerHTML);
  }
  RenderTable();
});

function Table(){
    let formInpts= `
    <form id="formulario">
      <input type="text" name="name" id="name" />
      <input type="text" name="lastname" id="lastname" />
      <input type="submit" value="Save" />
    </form>
    <button onclick= "RenderTable()">Show Table</button>
    <div id="tabla"></div>
    `
    return formInpts
  }
