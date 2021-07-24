import React,{Component} from 'react';

import axios from 'axios';

import {} from './Cart.css';

import Icon from '@material-ui/core/Icon';
import {createStyles, Theme } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {} from './Cart.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 800,
      paddingRight:50,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
);

const mystyle = {
    marginTop:'10px'
  };
export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <h4>Cart</h4>
        </Paper>
        <Paper className={classes.paper}>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="https://www.mytrendyphone.eu/images/Samsung-Galaxy-S20-FE-Duos-128GB-Cloud-Navy-8806090716935-02102020-01-p.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1">
                                Product Name
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                This is a description
                            </Typography>
                            <Typography variant="body2">Quantity: {1}</Typography>
                            <Icon color="primary">add_circle</Icon>
                            <Icon color="secondary">remove_circle</Icon>
                        </Grid>

                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">${1900.00}</Typography>
                    </Grid>
                </Grid>
            </Grid>

        <Grid container spacing={2}>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/SwappieXsGold-1-1-1-600x600.png" />
                </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            Product Name
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            This is a description
                        </Typography>
                        <Typography variant="body2">Quantity: {1}</Typography>
                        <Icon color="primary">add_circle</Icon>
                        <Icon color="secondary">remove_circle</Icon>
                    </Grid>

                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
        
        <Paper className={classes.paper} style={mystyle}>
            <Typography variant="subtitle1" >Items: $19.00</Typography>
            <Typography variant="subtitle1" >Standard Shipping: $19.00</Typography>
            <Typography variant="subtitle1" >Estimated Gst: $19.00</Typography>
            <Typography variant="subtitle1" >Estimated Pst: $19.00</Typography>
            <Typography variant="subtitle1" className="total">Order Total: $19.00</Typography>
        </Paper>
        <Paper className={classes.paper}     style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
            }}>

            <Button variant="contained" color="primary">
                <Icon>shopping-basket</Icon>Place your order
            </Button>
        </Paper>
    </div>
  );
}





export class Cart extends Component{
    
    state = {
        products: []
    }
    componentDidMount() {
    axios.get('https://localhost:5001/api/Product')
      .then(res => {
        const products = res.data;
        this.setState({products});
      });
    }

    render(){
        return(
            
            <div className="productList">
                <AutoGrid/>
            </div>
        );
    }
}

