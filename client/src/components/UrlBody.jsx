import React, { useEffect, useRef } from "react";
import ParticlBg from "./ParticleBg.jsx";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import axios from "axios";
import HumanDate from "human-date";

const UrlBody = () => {
  const [urls, setUrls] = React.useState([]);
  const [error, setError] = React.useState(false);
  const url = useRef(null);

  const postUrl = async (url) => {
     await axios.post("https://localhost:5000/api/product/", {
      url: url,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postUrl(url.current.value);
    console.log(url.current.value);
  };
  useEffect((url) => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:5000/api/product/");
        setUrls(response.data);
        console.log(response.data);
        // const data=await response.json();
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="py-5" fluid style={{ height: "100vh" }}>
      <ParticlBg />
      {error && <div>Something went wrong ...</div>}
      <Row className="justify-content-md-center py-5">
        <Col lg="6">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Product Url"
              aria-label="Product Url"
              aria-describedby="basic-addon2"
              ref={url}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={handleSubmit}
            >
              Add
            </Button>
          </InputGroup>
        </Col>
      </Row>
      {urls.map((url) => {
        return (
          <div className="offset-1 col-10 urlBox">
            <div className="urlName">{url.name}</div>
            <div className="urlMinValue">
              Minimum Value: INR {url.minimum_value}, Last Observed At:{" "}
              {HumanDate.prettyPrint(new Date(url.date))}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default UrlBody;
