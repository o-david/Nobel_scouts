import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
  let myName = "Bashir"
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card>

      <p>Hello {myName?myName:"there"} </p>
      {
        myName && <Image/>
      }
    </>
  );
}

export default App;
