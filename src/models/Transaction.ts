export const PREFERENCES_KEY = "preferences";
import { ReceiptItem } from "components/pos/types";
/* import { setUserPreferences } from "redux/UserAPI/actions";
import { put } from "redux-saga/effects";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "graphql/queries";
import * as mutations from "graphql/mutations"; */
export interface TranscationDto {
  org_id: number;
  subtotal: number;
  tax: number;
  total: number;
  receipt_items: ReceiptItem;
  payment_method: string;
  createdAt: string;
}

export default class Transaction implements TranscationDto {
  public org_id: number;
  public subtotal: number;
  public tax: number;
  public total: number;
  public receipt_items: ReceiptItem;
  public payment_method: string;
  public createdAt: string;

  constructor(transaction?: TranscationDto) {
    if (transaction) {
      this.org_id = transaction.org_id;
      this.subtotal = transaction.subtotal;
      this.tax = transaction.tax;
      this.total = transaction.total;
      this.receipt_items = transaction.receipt_items;
      this.payment_method = transaction.payment_method;
      this.createdAt = transaction.createdAt;
    }
  }
  get dto(): TranscationDto {
    return Object.assign({}, this);
  }
}
