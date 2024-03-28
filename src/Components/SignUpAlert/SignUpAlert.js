import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./SignUpAlert.css";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function SignUpAlert() {
    return (
        <Grid container className="container">
            <Grid className="grid">
                <Typography className="text">
                    Sign up and get 20% off to your first order. <span>Sign Up Now</span>
                </Typography>

            </Grid>
            <Grid className="iconcon">
                <CloseIcon className="icon" />
            </Grid>
        </Grid>
    );
}
