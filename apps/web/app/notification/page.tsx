import { Notification } from "@raikou/server";

function UnoCSS() {
  return (
    <>
      <Notification
        loading
        withCloseButton={false}
        color="indigo"
        onClose={() => {}}
        title="You will not close this notification"
      >
        It is loading you have to wait
      </Notification>
    </>
  );
}

export default UnoCSS;
