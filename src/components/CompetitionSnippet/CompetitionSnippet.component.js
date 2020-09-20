import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectCompetition, unselectCompetition } from '../../app/reducers/matchesSlice';

export default function CompetitionSnippet(props) {
    const dispatch = useDispatch();

    const isSelected = useSelector(state => state.matches.selectedCompetitions).includes(props.competition.id);
    const variant = isSelected ? 'primary' : 'light';
    const toggle = () => isSelected ? dispatch(unselectCompetition(props.competition.id)) : dispatch(selectCompetition(props.competition.id));
    return (
        <>
            <ListGroup.Item onClick={() => toggle()} action variant={variant}>
                <div className="d-flex flex-row justify-content-between align-items-center">
                    {props.competition.name}
                </div>
            </ListGroup.Item>
        </>
    );
}