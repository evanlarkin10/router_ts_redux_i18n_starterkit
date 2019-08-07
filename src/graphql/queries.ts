// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser {
  getUser {
    id
    identity_id
    first_name
    last_name
    email
    email_verified
    org_id
    org_name
  }
}
`;
export const getPreferences = `query GetPreferences {
  getPreferences {
    user_id
    pos_preferences
  }
}
`;
export const getTask = `query GetTask($id: ID!) {
  getTask(id: $id) {
    id
    title
    description
    status
  }
}
`;
export const listTasks = `query ListTasks(
  $filter: ModelTaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
    }
    nextToken
  }
}
`;
export const getPrivateNote = `query GetPrivateNote($id: ID!) {
  getPrivateNote(id: $id) {
    id
    content
  }
}
`;
export const listPrivateNotes = `query ListPrivateNotes(
  $filter: ModelPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
    }
    nextToken
  }
}
`;
export const getTransaction = `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
    id
    org_id
    payment_method
    subtotal
    tax
    total
    createdAt
    receipt_items
  }
}
`;
export const listTransactions = `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      org_id
      payment_method
      subtotal
      tax
      total
      createdAt
      receipt_items
    }
    nextToken
  }
}
`;
