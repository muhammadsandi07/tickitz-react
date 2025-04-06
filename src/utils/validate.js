const validate = (fieldName, value, type, checked) => {
  let errorMsg = ""
  switch (fieldName) {
    case "email":
      if (!value) errorMsg = "Email harus diisi"
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMsg = "Email tidak valid"
      }
      break
    case "password":
      if (!value) errorMsg = "Password harus diisi"
      else if (value.length < 6) errorMsg = "Password minimal 6 karakter"
      break
    case "term":
      if (!checked) errorMsg = "silahkan setujui kebijakan"
      break
    default:
      break
  }
  return {
    [fieldName]: errorMsg,
  }
}

export default validate
