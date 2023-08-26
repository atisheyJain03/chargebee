import { Grid } from "@material-ui/core";
import React from "react";
import "./Products.css";

function Solution() {
  return (
    <div className="products">
      <Grid container>
        <Grid container justify="space-between">
          <Grid item xs={2}>
            <h2>By Role</h2>
            <ul>
              <li>Finance </li>
              <li>Sale</li>
              <li>RevOps</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <h2>By Role</h2>
            <ul>
              <li>Finance </li>
              <li>Sale</li>
              <li>RevOps</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <h2>By Role</h2>
            <ul>
              <li>Finance </li>
              <li>Sale</li>
              <li>RevOps</li>
              <li>RevOps</li>
            </ul>
          </Grid>
          <Grid item xs={2}>
            <h2>By Role</h2>
            <ul>
              <li>Finance </li>
              <li>Sale</li>
              <li>RevOps</li>
            </ul>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Solution;
