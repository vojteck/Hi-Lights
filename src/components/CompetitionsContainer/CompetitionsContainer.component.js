import React from 'react';
import { useSelector } from 'react-redux';
import CompetitionSnippet from '../CompetitionSnippet/CompetitionSnippet.component';
import { getAllCompetitions } from '../../app/selectors/matchesSelector';
import { ListGroup } from 'react-bootstrap';
import SelectTop5 from './SelectTop5.component'
import ClearSelection from './ClearSelection.component';

export default function CompetitionsContainer() {
    const slice = useSelector(state => state);

    return (
        <>
            <p className="lead">Competitions</p>
            <hr class="my-3" />
            <ListGroup variant="flush">
                <SelectTop5></SelectTop5>
                <ClearSelection></ClearSelection>
                <hr class="my-2" />
                {slice && getAllCompetitions(slice).map(competition => (
                    <CompetitionSnippet key={competition.id} competition={competition}></CompetitionSnippet>
                ))}
            </ListGroup>
        </>
    );
}