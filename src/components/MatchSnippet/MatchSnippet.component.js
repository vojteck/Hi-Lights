import React, { useState } from 'react';
import { ListGroup, Collapse } from 'react-bootstrap';

export default function MatchSnippet(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <ListGroup.Item action onClick={() => setOpen(!open)}>
                <div className="d-flex justify-content-center p-1">
                    {props.match.title}
                </div>
                <Collapse in={open}>
                    <div
                    dangerouslySetInnerHTML={{
                        __html: props.match.embed
                    }}></div>
                </Collapse>
            </ListGroup.Item>
        </>
    );
}