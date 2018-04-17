import * as React from 'react';
import { Col, Row } from './stockStyled';
import  { default as styled } from 'react-emotion';

interface IEmptyStockViewProps {
  style: React.CSSProperties;
}

export class EmptyStockView extends React.PureComponent<IEmptyStockViewProps, undefined>{
  render() {

    return <Row style={this.props.style}>
        <Col>
            <Circle/>
            <InlinePlaceholder/>
        </Col>
        {Array.from({ length: 6 }, (_,n) => <Col key={n}><Placeholder/></Col>)}
      </Row>;
  }
}


const Circle = styled('div')`
  background: #ececec;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  float:left;
`;

const Placeholder = styled('div')`
  background: #ececec;
  height: 10px;
  max-width: 85px;
`;

const InlinePlaceholder = styled(Placeholder)`
  float:left;
  margin-top: 5px;
  max-width: 168px;
  width: 168px;
`;
