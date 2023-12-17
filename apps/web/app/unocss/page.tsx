import { Badge } from "@raikou/server";

export default function Page() {
  return (
    <>
      <Badge
        classNames={{
          root: {
            bg: "red-500",
          },
          label: {
            m: "[10px]",
          },
          section: {
            p: "[20px]",
          },
        }}
      >
        hello
      </Badge>
      <Badge
        classNames={{
          root: "bg-orange-500",
          label: {
            m: "[20px]",
            p: "[80px]",
            text: "purple-500",
          },
        }}
      >
        hello2
      </Badge>
    </>
  );
}
