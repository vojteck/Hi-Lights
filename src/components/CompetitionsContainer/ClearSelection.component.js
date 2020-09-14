import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { clearSelection } from '../../app/reducers/matchesSlice';

export default function ClearSelection() {
    const dispatch = useDispatch();
    return (
        <>
            <ListGroup.Item action variant="danger" onClick={() => dispatch(clearSelection())}>
                <div className="d-flex justify-content-center p-1">
                    Clear selection
                </div>
            </ListGroup.Item>
        </>
    );
}