import * as React from 'react';
import  { default as styled } from 'react-emotion';
import { StockRecord } from './StockRecord';
import { Col, Row } from './stockStyled';

interface IStockViewProps {
  stock: StockRecord;
  style: React.CSSProperties;
}

interface ID1ChangeProps {
  value: number;
}

interface ILogoProps {
  src: string;
}

export class StockView extends React.PureComponent<IStockViewProps, undefined>{
  render() {
    const {
        logo,
        name,
        country,
        ticker,
        price,
        capitalization,
        industry,
        d1Return,
    } = this.props.stock;

    return <Row style={this.props.style}>
        <Col>
            <Logo src={logo}/>
            <span>{name}</span>
        </Col>
        <Col>
            {country}
        </Col>
        <Col>
            {ticker}
        </Col>
        <Col>
            {null === price ? '—' : `$${price}`}
        </Col>
        <Col>
            {`$${(capitalization / 1e9).toFixed(2)}B`}
        </Col>
        <Col>
            {industry}
        </Col>
        <D1Change value={d1Return}>
            {this.getD1Change()}
        </D1Change>
      </Row>;
  }

  private getD1Change() {
    const { d1Return } = this.props.stock;

    if (null === d1Return) {
      return '—';
    }

    const value = `${d1Return.toFixed(2)}%`;

    return d1Return > 0 ? `+${value}` : `${value}`;
  }
}

const Logo = styled<ILogoProps, any>('div')`
  background-image: ${({ src }) => `url(${src})`};
  background-color: #ececec;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  float:left;
`;

const D1Change = styled<ID1ChangeProps, any>(Col)`
  color: ${({ value }) => null === value ? 'inherit' : value > 0 ? 'green' : 'red'};
`;
