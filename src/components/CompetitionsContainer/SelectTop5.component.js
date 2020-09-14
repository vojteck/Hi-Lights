import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { selectTop5 } from '../../app/reducers/matchesSlice';

export default function SelectTop5() {
    const dispatch = useDispatch();
    return (
        <>
            <ListGroup.Item action variant="info" onClick={() => dispatch(selectTop5())}>
                <div className="d-flex justify-content-center p-1">
                    Select TOP 5
                </div>
            </ListGroup.Item>
        </>
    );
}