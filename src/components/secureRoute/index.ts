import SecureRoute, { SecureRouteOwnProps } from "./SecureRoute";
import { connects } from "utilities/commonHocs";

export default connects<SecureRouteOwnProps>(SecureRoute);
