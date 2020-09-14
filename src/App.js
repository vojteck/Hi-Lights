import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMatchesAsync } from './app/reducers/matchesSlice';
import { Container, Row, Col } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import MatchesContainer from './components/MatchesContainer/MatchesContainer.component';
import CompetitionsContainer from './components/CompetitionsContainer/CompetitionsContainer.component';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMatchesAsync());
  }, []);

  return (
    <Container fluid className="p-4">
    <Row className="justify-content-md-center">
      <Col xs="0" lg="2"/>
      <Col xs="6" lg="5">
        <Jumbotron>
          <MatchesContainer></MatchesContainer>
        </Jumbotron>
      </Col>
      <Col xs="6" lg="3">
        <Jumbotron>
          <CompetitionsContainer></CompetitionsContainer>
        </Jumbotron>
      </Col>
      <Col xs="0" lg="2"/>
    </Row>
  </Container>
  );
}