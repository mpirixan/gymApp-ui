// eslint-disable-next-line no-unused-vars
function cadastro () {
  var xhr = new XMLHttpRequest()
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  var email = document.getElementById('email').value
  var phone = document.getElementById('phone').value

  const jsonObj =
{
  username: username,
  password: password,
  email: email,
  phone: phone
}
  var dataBase = JSON.stringify(jsonObj)
  const myURL = 'localhost:8080/v1/user'

  console.log(jsonObj)
  console.log(dataBase)
  xhr.open('POST', myURL, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(jsonObj))
}
