import { useIsomorphicEffect } from '../../../../../hooks/src';

interface UseRespectReduceMotionOptions {
  respectReducedMotion: boolean;
  getRootElement: () => HTMLElement | undefined;
}

export function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement,
}: UseRespectReduceMotionOptions) {
  useIsomorphicEffect(() => {
    if (respectReducedMotion) {
      getRootElement()?.setAttribute('data-respect-reduced-motion', 'true');
    }
  }, [respectReducedMotion]);
}
