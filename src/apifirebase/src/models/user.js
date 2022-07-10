export function UserEsquema(  
  username,
  nombre,
  edad,
  email,
  password,
  linkImage = "") {
  return [
    {
      username :{
        value: username.trim(),
        type: "string",
        empty: false,
        min: 4
      },
      nombre: {
        value: nombre.trim().toUpperCase(),
        type: "string",
        empty: false
      },
      edad: {
        value: edad,
        type: "number",
        empty: false,
        max: 110,
        min: 16
      },
      email: {
        value: email.trim().toLowerCase(),
        type: "email",
        empty: false,
      },
      password: {
        value: password.trim(),
        type: "password"
      },
      linkImage: {
        value: linkImage,
        type: 'string'
      }
      
    }
  ];
}
