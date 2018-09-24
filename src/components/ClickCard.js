import React from 'react'
import { Card, CardImg } from 'reactstrap'

const style = {
    card: {
        maxWidth: 320
    }
}

const ClickCard = (props) => {
    return (
        <Card style={style.card} onClick={() => props.handleClick()}>
            <CardImg top  src={props.src} />
        </Card>
    )
}

export default ClickCard;