function Profile(props) {
  const { name, lastName } = props
  console.log(props)
  return (
    <div>
      <h1>
        Name:{name} {lastName}
      </h1>
      <p>{props.children}</p>
    </div>
  )
}
export default Profile
