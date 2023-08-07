import './index.css'

const EventItem = props => {
  const {eventDetails, onClickImage} = props
  const {registrationStatus, imageUrl, name, location} = eventDetails
  const isImageClicked = () => {
    onClickImage(registrationStatus)
  }
  return (
    <li className="list-item">
      <button className="img-btn" type="button" onClick={isImageClicked}>
        <img className="img-logo" src={imageUrl} alt="event" />
      </button>
      <p className="name">{name}</p>
      <p>{location}</p>
    </li>
  )
}
export default EventItem
