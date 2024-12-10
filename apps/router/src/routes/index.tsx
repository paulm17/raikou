import { createFileRoute } from '@tanstack/react-router';
import { Badge, Box, Modal, Stack } from '@raikou/core';
import { EmotionHelpers } from '@raikou/emotion';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <>
      {/* styles?: Partial<Record<BadgeStylesNames, CSSProperties>> */}
      {/* <Badge
        variant="filled"
        styles={(theme, __, ___) => ({
          root: {
            background: theme.colors.green[4],
          },
        })}
      >
        hello
      </Badge> */}

      {/* styles?: Partial<Record<ModalBaseStylesNames, CSSProperties>> */}
      {/* <Modal
        // opened={opened}
        withCloseButton={false}
        // closeOnEscape={false}
        closeOnClickOutside={false}
        // onClose={() => setOpened(false)}
        centered
        fullScreen
        padding={5}
        styles={() => ({
          root: {
            background: 'hello',
          },
        })}
      >
        ddd
      </Modal> */}
      <Stack>
        <Box
          stx={(theme, u) => ({
            padding: 10,

            [u.light]: {
              background: theme.black,
              color: 'red',
            },
            [u.dark]: {
              background: 'blue',
              color: theme.colors.lime[8],
            },
          })}
        >
          hello
        </Box>
        <Badge
          variant="filled"
          styles={(theme, { color }, u: EmotionHelpers) => ({
            root: {
              padding: 10,
              [u.light]: {
                backgroundColor: theme.colors[color || 'red'][2],
                color: theme.white,
                '&:hover': {
                  backgroundColor: theme.colors[color || 'red'][8],
                },
              },
              [u.dark]: {
                backgroundColor: theme.colors[color || 'blue'][4],
                color: theme.white,
                '&:hover': {
                  backgroundColor: theme.colors[color || 'blue'][9],
                },
              },
            },
          })}
        >
          hello
        </Badge>
      </Stack>
    </>
  );
}
