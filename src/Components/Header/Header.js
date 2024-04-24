import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

export default function Header() {
    return (
        <Container sx={{ backgroundColor: "#F2F0F1" }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <Typography variant="h3" gutterBottom>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </Typography>
                    <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of
                        style.
                    </Typography>
                    <Button variant="contained" sx={{ borderRadius: '62px', backgroundColor: "black", color: "inhirit", paddingInline: " 54px" }}>Shop Now</Button>
                    <Grid> <Typography variant="h3" gutterBottom>
                        200+
                    </Typography>
                        <Typography variant="caption" gutterBottom>
                            International Brands
                        </Typography></Grid>
                </Grid>
                <Grid item xs={6} md={4}>
                    {/* <Item>xs=6 md=4</Item> */}
                </Grid>
            </Grid>
        </Container>
    );
}
