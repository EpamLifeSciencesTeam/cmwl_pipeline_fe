import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styled from "./utils/styled";

const HelloWorld = styled('h1')`
  color: royalblue;
`;

ReactDOM.render(<HelloWorld>Cromwell Pipeline</HelloWorld>, document.getElementById('root'));
