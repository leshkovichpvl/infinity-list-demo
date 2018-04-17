import { default as styled } from 'react-emotion';

export const Row = styled('div')`
  display: table;
  table-layout: fixed;
  width: 100%;
  font-size: 11px;
  color: #6f6f6f;
  box-shadow: inset 0px -1px 0px rgba(51, 51, 51, 0.05);
`;

export const Col = styled('div')`
  display: table-cell;
  vertical-align: middle;
  padding: 0 10px;
  line-height: 1.4;
  
  &:first-child{
    width: 200px;
  }
  
  img{
    background: #ececec;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    float:left;
  }
  
  span{
    display:block;
    margin-top: 3px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
`;
