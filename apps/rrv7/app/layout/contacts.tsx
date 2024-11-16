import * as Route from "./+types.contacts";
import { Form, NavLink, Outlet, useNavigation, useSubmit } from "react-router";
import { useEffect } from "react";

import { getContacts } from "~/data";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
};

export default function App({ loaderData }: Route.ComponentProps) {
  const { contacts, q } = loaderData;
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    const searchField = document.getElementById("q");
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || "";
    }
  }, [q]);

  return (
    <>
      <Outlet />
    </>
  );
}
