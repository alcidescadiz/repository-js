export function User({
  username,
  nombre,
  email,
  edad,
  password,
  linkImage = ""
}, type) {
  if (type === 'create'){
    return {
      username: username.trim(),
      nombre: nombre.trim().toUpperCase(),
      email: email.trim().toLowerCase(),
      edad: edad,
      password: password.trim(),
      activo: true,
      linkImage: linkImage,
      create_at: new Intl.DateTimeFormat("es", {
        dateStyle: "full",
        timeStyle: "short",
      }).format(new Date()),
      updated_at: ''
    }
  }
  if (type === 'update'){
      return {
        username: username.trim(),
        nombre: nombre.trim().toUpperCase(),
        email: email.trim().toLowerCase(),
        edad: edad,
        password: password.trim(),
        activo: true,
        linkImage: linkImage,
        updated_at: new Intl.DateTimeFormat("es", {
          dateStyle: "full",
          timeStyle: "short",
        }).format(new Date())
      };
  }
}
