import { registerButtons } from "components/pos/types";
import { POSPreferences, UserPreferences } from "models/User";
export const DEFAULT_POS: POSPreferences = {
  layouts: { lg: registerButtons, md: registerButtons, sm: registerButtons }
};
export const DEFAULT_PREFERENCES: UserPreferences = {
  pos: DEFAULT_POS
};
