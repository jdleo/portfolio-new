import React, { Component } from "react";
import {
  Box,
  Heading,
  Grommet,
  ResponsiveContext,
  Grid
} from "grommet";

import {
  Deploy,
  Cli,
  Ad
} from "grommet-icons";

const theme = {
  global: {
    font: {
      family: "Dosis",
      weight: 600,
      size: "20px",
      height: "20px"
    }
  }
};

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="ffffff"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

class App extends Component {
  state = {};

  onActive = index => this.setState({ index });

  render() {

    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level="3" margin="none">
                  John Leonardo
                </Heading>
              </AppBar>
              <Box direction="row" background="brand" flex overflow={{ horizontal: "hidden" }}>
                <Box flex align="center" justify="center">
                  <Grid
                    columns={{
                      count: 3,
                      size: "auto"
                    }}
                    gap="large"
                  >
                    <Ad size="xlarge"/>
                    <Cli size="xlarge"/>
                    <Deploy size="xlarge"/>
                  </Grid>
                  <br/><br/><br/>
                  <Heading level="1" margin="none" style={{"fontWeight": 800}}>
                    Website under construction.
                  </Heading>
                  <Heading level="3" margin="none" style={{"fontWeight": 800}}>
                    - John Leonardo
                  </Heading>
                </Box>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
