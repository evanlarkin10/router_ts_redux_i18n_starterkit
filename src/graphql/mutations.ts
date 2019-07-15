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
export const createPrivateNote = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!) {
  createPrivateNote(input: $input) {
    id
    content
  }
}
`;
export const updatePrivateNote = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!) {
  updatePrivateNote(input: $input) {
    id
    content
  }
}
`;
export const deletePrivateNote = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!) {
  deletePrivateNote(input: $input) {
    id
    content
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
