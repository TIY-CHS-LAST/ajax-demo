// AJAX - Asynchronous Javascript and XML
// JSON

// GET -
// PUT
// PUT https://api.calweb.xyz/people/chris
const url = 'https://api.calweb.xyz/cats'

function getsAllCats () {
  return fetch(url)
    .then(function (response) {
      return response.json()
    })
    .catch(function (err) {
      console.log(err)
    })
}

function makeCatHTML (cat) {
  return `
    <li>${cat.name} - ${cat.title}
      <img src="${cat.pic}" />
    </li>
  `
}

function makeCatsHTML (cats) {
  let html = '<ul>'

  cats.forEach(function (cat, idx, arr) {
    html += makeCatHTML(cat)
  })

  html += '</ul>'
  return html
}

function addCatsToDom (catsData) {
  const target = document.querySelector('#cats')
  target.innerHTML = makeCatsHTML(catsData)
}

getsAllCats().then(function (data) {
  addCatsToDom(data)
})
// fetch(`${url}/chris`, {
//   method: 'DELETE',
//   headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
// })
//   .then(function (res) {
//     return res.json()
//   })
//   .then(function (data) {
//     console.log(data)
//   })
// POST -
// DELETE
// fetch(url)
//   .then(function (data) {
//     return data.json()
//   })
//   .then(function (people) {
//     console.log(people)
//   })
//
// fetch(`${url}/adc490cf-afa1-413d-9a0f-5006d1b06052`)
//   .then(function (data) {
//     return data.json()
//   })
//   .then(function (person) {
//     console.log(person)
//   })
//
// fetch(`${url}`, {
//   method: 'POST',
//   headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     id: 'chris',
//     name: 'Chris',
//     jobTitle: 'Awesome Guy',
//     email: 'chris@theironyard.com',
//     avatar: 'https://lh5.googleusercontent.com/-LTmGyFz3tE4/AAAAAAAAAAI/AAAAAAAAAEI/enMMsMlmHqs/photo.jpg'
//   })
// })
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (data) {
//     console.log('response from server', data)
//   })
