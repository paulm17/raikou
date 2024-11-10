import { css } from '@stylefusion/react';

export const NOWRAP = css({
  whiteSpace: 'nowrap',
});

export const ELLIPSIS = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const POINTER_CURSOR = css({
  cursor: 'pointer',
});

export const CONTEXT_MENU_CURSOR = css({
  cursor: 'context-menu',
});

export const TEXT_SELECTION_DISABLED = css({
  userSelect: 'none',
});

export const TEXT_ALIGN_LEFT = css({
  textAlign: 'left',
});

export const TEXT_ALIGN_CENTER = css({
  textAlign: 'center',
});

export const TEXT_ALIGN_RIGHT = css({
  textAlign: 'right',
});
