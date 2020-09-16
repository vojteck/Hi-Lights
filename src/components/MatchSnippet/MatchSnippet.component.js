import React, { useState } from 'react';
import { Collapse, Card } from 'react-bootstrap';

export default function MatchSnippet(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card className="p-1 mb-4" onClick={() => setOpen(!open)}>
                <Card.Body>
                    <div className="d-flex justify-content-between p-2">
                        <Card.Title>{props.match.title}</Card.Title>
                        <Card.Text>
                            {props.match.competition.name}
                        </Card.Text>
                    </div>
                 <div
                    dangerouslySetInnerHTML={{
                        __html: props.match.videos[0]?.embed ?? props.match.embed
                    }}></div>
                    <Collapse in={open}>
                        <div>
                            {props.match.videos.map(video => (
                                <>
                                    <h3 className="p-3">{video.title}</h3>
                                    <div
                                    dangerouslySetInnerHTML={{
                                        __html: video.embed
                                    }}></div>
                                </>
                            ))}
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
        </>
    );
}