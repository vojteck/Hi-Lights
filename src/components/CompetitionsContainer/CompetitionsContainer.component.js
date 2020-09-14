import React from 'react';
import { useSelector } from 'react-redux';
import CompetitionSnippet from '../CompetitionSnippet/CompetitionSnippet.component';
import { getAllCompetitions } from '../../app/selectors/matchesSelector';
import { ListGroup } from 'react-bootstrap';

export default function CompetitionsContainer() {
    const slice = useSelector(state => state);
    return (
        <>
            <p className="lead">Competitions</p>
            <hr class="my-3"/>
            <ListGroup variant="flush">
                {slice && getAllCompetitions(slice).map(competition => (
                    <CompetitionSnippet key={competition.id} competition={competition}></CompetitionSnippet>
                ))}
            </ListGroup>
        </>
    );
}