import * as React from 'react'
import { connect } from "react-redux";
import Box from '../components/Box';

interface InfoDepthProps {
  title: string
  value: string
}

@connect()
export default class InfoDepth extends React.Component<InfoDepthProps, any> {

  constructor() {
    super();
  }

  render() {
    return (
      <Box title={this.props.title} value={this.props.value} />
    );
  }
}



