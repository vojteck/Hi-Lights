import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCompetitionsMatches } from '../../app/selectors/matchesSelector';
import MatchSnippet from '../MatchSnippet/MatchSnippet.component';

export default function MatchesContainer() {
    const slice = useSelector(state => state);

    return (
        <>
            <p className="lead">Matches</p>
            <hr className="my-3"/>
            {slice && getSelectedCompetitionsMatches(slice).map((match, idx) => (
                <MatchSnippet key={idx} match={match}></MatchSnippet>
            ))}
        </>
    );
}