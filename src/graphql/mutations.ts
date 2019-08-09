// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTask = `mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const updateTask = `mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const deleteTask = `mutation DeleteTask($input: DeleteTaskInput!) {
  deleteTask(input: $input) {
    id
    title
    description
    status
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createPreferences = `mutation CreatePreferences($input: CreatePreferencesInput!) {
  createPreferences(input: $input) {
    user_id
    pos_preferences
  }
}
`;
export const updatePreferences = `mutation UpdatePreferences($input: UpdatePreferencesInput!) {
  updatePreferences(input: $input) {
    user_id
    pos_preferences
  }
}
`;
export const deletePreferences = `mutation DeletePreferences($input: DeletePreferencesInput!) {
  deletePreferences(input: $input) {
    user_id
    pos_preferences
  }
}
`;
export const createTransaction = `mutation CreateTransaction($input: CreateTransactionInput!) {
  createTransaction(input: $input) {
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
export const updateTransaction = `mutation UpdateTransaction($input: UpdateTransactionInput!) {
  updateTransaction(input: $input) {
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
export const deleteTransaction = `mutation DeleteTransaction($input: DeleteTransactionInput!) {
  deleteTransaction(input: $input) {
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
