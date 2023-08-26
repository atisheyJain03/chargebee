import { Grid } from "@material-ui/core";
import React from "react";
import "./FooterProducts.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

function FooterProducts() {
  return (
    <div className="footerProducts">
      <Grid
        container
        justify="space-between"
        className="footerProducts__container"
      >
        <Grid item xs={6} md={3}>
          <h2>
            Subscription Management <ArrowForwardIcon />{" "}
          </h2>
          <ul>
            <li>Overview</li>
            <li>Create & Manage Plans</li>
            <li>Pricing Management</li>
            <li>Handle Trial Subscriptions</li>
            <li>Handle Trial Subscriptions</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={3}>
          <h2>
            Subscription Management <ArrowForwardIcon />{" "}
          </h2>
          <ul>
            <li>Overview</li>
            <li>Create & Manage Plans</li>
            <li>Pricing Management</li>
            <li>Handle Trial Subscriptions</li>
            <li>Handle Trial Subscriptions</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={3}>
          <h2>
            Subscription Management <ArrowForwardIcon />{" "}
          </h2>
          <ul>
            <li>Overview</li>
            <li>Create & Manage Plans</li>
            <li>Pricing Management</li>
            <li>Handle Trial Subscriptions</li>
            <li>Handle Trial Subscriptions</li>
          </ul>
        </Grid>
        <Grid item xs={6} md={3}>
          <h2>
            Subscription Management <ArrowForwardIcon />{" "}
          </h2>
          <ul>
            <li>Overview</li>
            <li>Create & Manage Plans</li>
            <li>Pricing Management</li>
            <li>Handle Trial Subscriptions</li>
            <li>Handle Trial Subscriptions</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterProducts;
