export function User({username,nombre, email, edad, password, linkImage = ''}) {
    return {
        username: username.trim(),
        nombre: nombre.trim().toUpperCase(),
        email: email.trim().toLowerCase(),
        edad: edad,
        password: password.trim(),
        activo: true,
        linkImage: linkImage
      }
}