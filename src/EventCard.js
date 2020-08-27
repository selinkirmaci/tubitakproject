import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EventDetailModal from "./EventDetailModal";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/images/t-logo.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => setModalShow(true)}>
                    Learn More
                </Button>
                <EventDetailModal
                    title = {props.title}
                    start = {props.start}
                    end = {props.end}
                    location = {props.location}
                    leftcap ={props.leftcap}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </CardActions>
        </Card>
    );
}
