// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
    id
    title
    description
    status
  }
}
`;
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
    id
    title
    description
    status
  }
}
`;
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
    id
    title
    description
    status
  }
}
`;
export const onCreatePrivateNote = `subscription OnCreatePrivateNote {
  onCreatePrivateNote {
    id
    content
  }
}
`;
export const onUpdatePrivateNote = `subscription OnUpdatePrivateNote {
  onUpdatePrivateNote {
    id
    content
  }
}
`;
export const onDeletePrivateNote = `subscription OnDeletePrivateNote {
  onDeletePrivateNote {
    id
    content
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    identity_id
    first_name
    last_name
    email
    email_verified
    org_id
    org_name
    preferences
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    identity_id
    first_name
    last_name
    email
    email_verified
    org_id
    org_name
    preferences
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    identity_id
    first_name
    last_name
    email
    email_verified
    org_id
    org_name
    preferences
  }
}
`;
export const onCreatePreferences = `subscription OnCreatePreferences {
  onCreatePreferences {
    user_id
    preferences
  }
}
`;
export const onUpdatePreferences = `subscription OnUpdatePreferences {
  onUpdatePreferences {
    user_id
    preferences
  }
}
`;
export const onDeletePreferences = `subscription OnDeletePreferences {
  onDeletePreferences {
    user_id
    preferences
  }
}
`;
