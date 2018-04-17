import * as React from 'react';
import { connect } from 'react-redux';
import { StockRecord } from './domain/stock/StockRecord';
import { Dispatch } from 'redux';
import { requestMoreStocksAction } from './domain/stock/stockAction';
import { InfiniteList, LoadableDataRecord } from 'infinity-list/dist';
import  { default as styled } from 'react-emotion';
import { StockView } from './domain/stock/StockView';
import { EmptyStockView } from './domain/stock/EmptyStockView';

interface IAppProps {
  stocks: LoadableDataRecord<StockRecord>;
  dispatch: Dispatch<any>;
}

const mapStateToProps = ({ stocks }) => ({ stocks });

const titles = [
  'Name',
  'Country',
  'Ticker',
  'Price',
  'Capitalization',
  'Industry',
  '1D change',
];

@(connect as any)(mapStateToProps)
export class App extends React.PureComponent<IAppProps, undefined>{
  render() {
    return <Container>
        <Table>
            <Header>
                {titles.map((title, i) => <Title key={i}>{title}</Title>)}
            </Header>
            <Body>
            <InfiniteList
                loadableData={this.props.stocks}
                rowHeight={46}
                requestMore={this.requestMore}
                elementCreator={this.elementCreator}
                emptyElementCreator={this.emptyElementCreator}
            />
            </Body>
        </Table>
    </Container>;
  }


  private requestMore = (startIndex: number, stopIndex: number) => this.props.dispatch(
      requestMoreStocksAction(startIndex, stopIndex),
  )
    

  private elementCreator = (stock: StockRecord, style: React.CSSProperties = {}) =>
      <StockView
          key={stock.assetId + stock.name}
          stock={stock}
          style={style}
      />


  private emptyElementCreator = (index: number, style: React.CSSProperties = {}) =>
      <EmptyStockView
          key={`empty:${index}`}
          style={style}
      />
}


const Container = styled('div')`
  font-family: Helvetica, Arial;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled('div')`
  width: 1000px;
  height: 408px;
  border: 2px solid #f5f2f2;
  border-radius: 2px;
`;

const Header = styled('div')`
  height: 40px;
  line-height: 40px;
  text-transform: uppercase;
  display: table;
  table-layout: fixed;
  width: 100%;
  font-size: 10px;
  color: #717171;
  background: rgba(243, 243, 243, 0.4);
`;

const Body = styled('div')`
  height: 360px;
  
  .scrollbar--track-vertical{
    height: 100%;
    right: 2px;
  }
  
  .scrollbar--thumb-vertical{
    background: rgba(204, 204, 204, 0.2);
    cursor: pointer;
    
    &:hover{
      background: rgba(204, 204, 204, 0.4);
    }
  }
`;

const Title = styled('div')`
  padding: 0 10px;
  display: table-cell;
  vertical-align: middle;
  
  &:first-child{
    width: 200px;
  }
`;
