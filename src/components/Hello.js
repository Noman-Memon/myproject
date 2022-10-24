const name = 'Noman'

function total() {
  return 10 + 20
}
function Hello() {
  return (
    <div>
      <h1>'Hello World!'</h1>
      <h2>{name}</h2>
      <h3>{total()}</h3>
    </div>
  )
}
export default Hello
