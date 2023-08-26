import { Grid } from "@material-ui/core";
import React from "react";
import "./Products.css";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";

function Products() {
  return (
    <div className="products">
      <Grid container>
        <Grid container justify="space-between">
          <Grid item xs={2}>
            <h2>Subscription Management</h2>
            <ul>
              <li>Overview</li>
              <li>Create & Manage Plans</li>
              <li>Pricing Management</li>
              <li>Handle Trial Subscriptions</li>
              <li>Handle Trial Subscriptions</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <ul>
              <h2>Subscription Management</h2>
              <li>Overview</li>
              <li>Create & Manage Plans</li>
              <li>Pricing Management</li>
              <li>Handle Trial Subscriptions</li>
              <li>Handle Trial Subscriptions</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <ul>
              <h2>Subscription Management</h2>
              <li>Overview</li>
              <li>Create & Manage Plans</li>
              <li>Pricing Management</li>
              <li>Handle Trial Subscriptions</li>
              <li>Handle Trial Subscriptions</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <ul>
              <h2>Subscription Management</h2>
              <li>Overview</li>
              <li>Create & Manage Plans</li>
              <li>Pricing Management</li>
              <li>Handle Trial Subscriptions</li>
              <li>Handle Trial Subscriptions</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <ul>
              <h2>Subscription Management</h2>
              <li>Overview</li>
              <li>Create & Manage Plans</li>
              <li>Pricing Management</li>
              <li>Handle Trial Subscriptions</li>
              <li>Handle Trial Subscriptions</li>
            </ul>
          </Grid>
        </Grid>
        <Grid container className="products__items">
          <Grid item xs={12}>
            <p>
              {" "}
              Supports: <span>Stripe</span> , <span>Paypal</span> ,{" "}
              <span>Braintree</span> ,<span>Checkout.com</span> ,{" "}
              <span>GoCardless</span> , and{" "}
              <span>27 other payment gateways</span>
            </p>
          </Grid>
          <Grid item xs={12} alignItems="start">
            <p>
              {" "}
              Seamless integration with <span>Xero</span> ,{" "}
              <span>Quickbooks</span> , <span>Zendesk</span> ,{" "}
              <span>Salesforce</span> , and <span>18 others</span>
            </p>
          </Grid>
          <Grid item xs={12} alignItems="start">
            <h4>
              Explore all features <ArrowForwardOutlinedIcon />{" "}
            </h4>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Products;
