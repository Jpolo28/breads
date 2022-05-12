const React = require('react')
const Default = require('./layouts/Default')

function Show({ breads, index }) {
  //console.log(bread.name)
  return (
    <Default>
      <h3>{breads.name}</h3>
      <p>
        and it
        {
          breads.hasgluten
            ? <span>does</span>
            : <span>does NOT</span>
        }
        have gluten.
      </p>
      <img src={breads.image} alt={breads.name} />
      <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE" />
      </form>
      <li><a href="/breads">Go home</a></li>
      <a href={`/breads/${index}/edit`}><button>Edit</button></a>
    </Default>
  )
}



module.exports = Show
