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
  }
}
`;
export const onCreatePreferences = `subscription OnCreatePreferences {
  onCreatePreferences {
    user_id
    pos_preferences
  }
}
`;
export const onUpdatePreferences = `subscription OnUpdatePreferences {
  onUpdatePreferences {
    user_id
    pos_preferences
  }
}
`;
export const onDeletePreferences = `subscription OnDeletePreferences {
  onDeletePreferences {
    user_id
    pos_preferences
  }
}
`;
export const onCreateTransaction = `subscription OnCreateTransaction {
  onCreateTransaction {
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
export const onUpdateTransaction = `subscription OnUpdateTransaction {
  onUpdateTransaction {
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
export const onDeleteTransaction = `subscription OnDeleteTransaction {
  onDeleteTransaction {
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
