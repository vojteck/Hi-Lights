import React from 'react';
import { useSelector } from 'react-redux';
import MatchSnippet from '../MatchSnippet/MatchSnippet.component';
import { getSelectedCompetitionsMatches } from '../../app/selectors/matchesSelector';
import { ListGroup } from 'react-bootstrap';

export default function MatchesContainer() {
    const slice = useSelector(state => state);
    return (
        <>
            <p className="lead">Matches</p>
            <hr class="my-3"/>
            <ListGroup>
                {slice && getSelectedCompetitionsMatches(slice).map(match => (
                    <MatchSnippet key={match.title} match={match}></MatchSnippet>
                ))}
            </ListGroup>
        </>
    );
}