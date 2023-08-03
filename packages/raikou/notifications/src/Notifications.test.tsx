import { tests } from "@raikou/tests";
import {
  Notifications,
  NotificationsProps,
  NotificationsStylesNames,
} from "./Notifications";

const defaultProps: NotificationsProps = {
  withinPortal: false,
};

describe("@raikou/core/Notifications", () => {
  tests.itSupportsSystemProps<NotificationsProps, NotificationsStylesNames>({
    component: Notifications,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: "@raikou/notifications/Notifications",
    stylesApiSelectors: ["root"],
  });
});
