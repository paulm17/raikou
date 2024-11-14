import React from 'react';
import type { Preview } from '@storybook/react';
import { emotionTransform, RaikouEmotionProvider } from '@raikou/emotion';
import { RaikouProvider, useDirection } from '@raikou/system';

import '@raikou/system/styles.css';
import '@stylefusion/react/styles.css';

import {
  IconMoonFilled,
  IconSunFilled,
  IconTextDirectionLtr,
  IconTextDirectionRtl,
} from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { ActionIcon } from '@raikou/core';

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <ActionIcon
        size="xl"
        radius="md"
        variant="default"
        pos="fixed"
        bottom={20}
        right={20}
        onClick={theme === 'light' ? () => setTheme('dark') : () => setTheme('light')}
        style={{ zIndex: 1000 }}
        aria-label="Toggle theme color direction"
      >
        {theme === 'light' ? <IconSunFilled /> : <IconMoonFilled />}
      </ActionIcon>
      {children}
    </>
  );
}

function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { dir, toggleDirection } = useDirection();
  return (
    <>
      <ActionIcon
        size="xl"
        radius="md"
        variant="default"
        pos="fixed"
        bottom={70}
        right={20}
        onClick={toggleDirection}
        style={{ zIndex: 1000 }}
        aria-label="Toggle text direction"
      >
        {dir === 'ltr' ? <IconTextDirectionLtr /> : <IconTextDirectionRtl />}
      </ActionIcon>
      {children}
    </>
  );
}

const preview: Preview = {
  decorators: [
    (renderStory) => <DirectionWrapper>{renderStory()}</DirectionWrapper>,
    (renderStory) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
    (renderStory) => (
      <RaikouProvider stylesTransform={emotionTransform}>
        <RaikouEmotionProvider>{renderStory()}</RaikouEmotionProvider>
      </RaikouProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
