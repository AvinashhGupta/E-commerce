import styled from "styled-components";

import { ReactComponent as Shoppingsvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(Shoppingsvg)`
  width: 24px;
  height: 24px;
  margin-top: 20px;
  margin-right: 12px;
`;
export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  float: right;
  padding-bottom: 20px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  padding-right: 12px;
`;
