/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  status?: string | null,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  status?: string | null,
};

export type DeleteTaskInput = {
  id?: string | null,
};

export type CreatePrivateNoteInput = {
  id?: string | null,
  content: string,
};

export type UpdatePrivateNoteInput = {
  id: string,
  content?: string | null,
};

export type DeletePrivateNoteInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  identity_id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  email_verified?: boolean | null,
  org_id?: number | null,
  org_name?: string | null,
};

export type UpdateUserInput = {
  identity_id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  email_verified?: boolean | null,
  org_id?: number | null,
  org_name?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreatePreferencesInput = {
  user_id?: string | null,
  pos_preferences?: string | null,
};

export type UpdatePreferencesInput = {
  pos_preferences?: string | null,
};

export type DeletePreferencesInput = {
  id?: string | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  status?: ModelStringFilterInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelPrivateNoteFilterInput | null > | null,
  or?: Array< ModelPrivateNoteFilterInput | null > | null,
  not?: ModelPrivateNoteFilterInput | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
};

export type CreateTaskMutation = {
  createTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
};

export type UpdateTaskMutation = {
  updateTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
};

export type DeleteTaskMutation = {
  deleteTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type CreatePrivateNoteMutationVariables = {
  input: CreatePrivateNoteInput,
};

export type CreatePrivateNoteMutation = {
  createPrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type UpdatePrivateNoteMutationVariables = {
  input: UpdatePrivateNoteInput,
};

export type UpdatePrivateNoteMutation = {
  updatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type DeletePrivateNoteMutationVariables = {
  input: DeletePrivateNoteInput,
};

export type DeletePrivateNoteMutation = {
  deletePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string | null,
    identity_id: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    email_verified: boolean | null,
    org_id: number | null,
    org_name: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string | null,
    identity_id: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    email_verified: boolean | null,
    org_id: number | null,
    org_name: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string | null,
    identity_id: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    email_verified: boolean | null,
    org_id: number | null,
    org_name: string | null,
  } | null,
};

export type CreatePreferencesMutationVariables = {
  input: CreatePreferencesInput,
};

export type CreatePreferencesMutation = {
  createPreferences:  {
    __typename: "Preferences",
    user_id: string | null,
    pos_preferences: string | null,
  } | null,
};

export type UpdatePreferencesMutationVariables = {
  input: UpdatePreferencesInput,
};

export type UpdatePreferencesMutation = {
  updatePreferences:  {
    __typename: "Preferences",
    user_id: string | null,
    pos_preferences: string | null,
  } | null,
};

export type DeletePreferencesMutationVariables = {
  input: DeletePreferencesInput,
};

export type DeletePreferencesMutation = {
  deletePreferences:  {
    __typename: "Preferences",
    user_id: string | null,
    pos_preferences: string | null,
  } | null,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string | null,
    identity_id: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    email_verified: boolean | null,
    org_id: number | null,
    org_name: string | null,
  } | null,
};

export type GetPreferencesQuery = {
  getPreferences:  {
    __typename: "Preferences",
    user_id: string | null,
    pos_preferences: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      description: string | null,
      status: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPrivateNoteQueryVariables = {
  id: string,
};

export type GetPrivateNoteQuery = {
  getPrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type ListPrivateNotesQueryVariables = {
  filter?: ModelPrivateNoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrivateNotesQuery = {
  listPrivateNotes:  {
    __typename: "ModelPrivateNoteConnection",
    items:  Array< {
      __typename: "PrivateNote",
      id: string,
      content: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask:  {
    __typename: "Task",
    id: string,
    title: string,
    description: string | null,
    status: string | null,
  } | null,
};

export type OnCreatePrivateNoteSubscription = {
  onCreatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type OnUpdatePrivateNoteSubscription = {
  onUpdatePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type OnDeletePrivateNoteSubscription = {
  onDeletePrivateNote:  {
    __typename: "PrivateNote",
    id: string,
    content: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string | null,
    identity_id: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    email_verified: boolean | null,
    org_id: number | null,
    org_name: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string | null,
    identity_id: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    email_verified: boolean | null,
    org_id: number | null,
    org_name: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string | null,
    identity_id: string | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    email_verified: boolean | null,
    org_id: number | null,
    org_name: string | null,
  } | null,
};

export type OnCreatePreferencesSubscription = {
  onCreatePreferences:  {
    __typename: "Preferences",
    user_id: string | null,
    pos_preferences: string | null,
  } | null,
};

export type OnUpdatePreferencesSubscription = {
  onUpdatePreferences:  {
    __typename: "Preferences",
    user_id: string | null,
    pos_preferences: string | null,
  } | null,
};

export type OnDeletePreferencesSubscription = {
  onDeletePreferences:  {
    __typename: "Preferences",
    user_id: string | null,
    pos_preferences: string | null,
  } | null,
};
