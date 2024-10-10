import Card from 'react-bootstrap/Card';

const Player = ({name="power puff girl", team, nationality,jerseyNumber, age, ImageURL}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ImageURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            Team: {team} <br/>
            Nationality: {nationality} <br/>
            Jersey Number: {jerseyNumber} <br/>
            Age: {age} <br/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player