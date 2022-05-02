const React = require('react')
const Default = require('./layouts/Default')

function Show ({breads}) {
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
        <img src={breads.image} alt={breads.name}/>
        <li><a href="/breads">Go home</a></li>
      </Default>
    )
}

module.exports = Show
