"use client";
import { Box, Badge, Grid } from "@raikou/server";
import { Avatar } from "@raikou/client";

function Testing2() {
  return (
    <Box className="w-[400px]">
      <Grid>
        <Grid.Col span={3} className="bg-slate-500">
          <Box className="text-red-400">1</Box>
          <Badge color="red">B1</Badge>
        </Grid.Col>
        <Grid.Col span={4} className="bg-slate-500">
          <Box className="text-red-400">2</Box>
          <Badge>B2</Badge>
        </Grid.Col>
        <Grid.Col span={5} className="bg-slate-500">
          <Avatar.Group>
            <Avatar variant="filled">HK</Avatar>
            <Avatar src="https://img.freepik.com/premium-vector/little-kid-avatar-profile_18591-50926.jpg"></Avatar>
            <Avatar src="https://image.winudf.com/v2/im1age1/bmV0LndsbHBwci5naXJsc19wcm9maWxlX3BpY3R1cmVzX3NjcmVlbl8wXzE2NjgxMzc2MTRfMDg0/screen-0.webp?fakeurl=1&type=.webp" />
            <Avatar radius="xl">+5</Avatar>
          </Avatar.Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
}

export default Testing2;
