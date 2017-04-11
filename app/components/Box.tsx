import * as React from 'react';
import Paper from 'material-ui/Paper';

declare function require(arg: string): any;

const styles: any = require('./box.css');

interface BoxProps extends React.Props<BoxProps> {
  title: String;
  value: string
}

const style = {
  height: 100,
  margin: 20,
  textAlign: 'center',
  backgroundColor: '#03A9F4'
};
const Box = (props: BoxProps) => (
  <Paper className={styles.container} style={style} zDepth={1}>
    <div className={styles.title}>{props.title}</div>
    <div className={styles.value}>{props.value}</div>
  </Paper>
);

export default Box;