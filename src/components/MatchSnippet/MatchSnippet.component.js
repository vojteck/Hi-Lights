import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import styles from './MatchSnippet.module.css'

export default function MatchSnippet(props) {
    const [open, setOpen] = useState(false);

    const getMediaElement = () => {
        return open ? <div dangerouslySetInnerHTML={{__html: props.match.videos[0].embed}}></div> : <Card.Img src={props.match.thumbnail} />
    }

    return (
        <>
            <Card className={styles.card} onClick={() => setOpen(!open)}>
                <Card.Body>
                    <div className="d-flex justify-content-between p-2">
                        <Card.Title>{props.match.title}</Card.Title>
                        <Card.Text>
                            {props.match.competition.name}
                        </Card.Text>
                    </div>
                    {getMediaElement()}
                    <hr className="my-3" />
                    <h4>Click to load video!</h4>
                </Card.Body>
            </Card>
        </>
    );
}