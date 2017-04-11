import * as React from 'react'
import { connect } from "react-redux";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue500 } from 'material-ui/styles/colors';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Canvas from './Canvas';
import { AppBar } from 'material-ui'
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import Info from './Info';

injectTapEventPlugin();

interface AppProps { }

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue500,
  }
});

@connect()
export default class App extends React.Component<AppProps, any> {

  constructor() {
    super();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="PixiJS and ReactJS" />
          <Grid fluid>
            <Row>
              <Col lg={2} md={12} sm={12} xs={12}>
                <Row>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Info title="Score" value="100" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Info title="Lives" value="10" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Info title="X" value="200" />
                  </Col>
                  <Col lg={12} md={12} sm={12} xs={12}>
                    <Info title="Y" value="200" />
                  </Col>
                </Row>
              </Col>
              <Col lg={8} md={12} sm={12} xs={12}>
                <Canvas />
              </Col>
              <Col lg={2} md={12} xs={12} />
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}



