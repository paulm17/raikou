import { Badge, Box, Group } from "@raikou/server";
import Selector from "./selector";

export default function Page() {
  return (
    <Box className="w-[400px]" ml="xl" mt="xl">
      <Group grow>
        <Badge>Unstyled badge 1</Badge>
        <Selector />
      </Group>
    </Box>
  );
}
