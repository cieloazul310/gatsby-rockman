import * as React from 'react';
import { useLocation, WindowLocation } from '@reach/router';

export function useParseHash<T = null>(titles: string[], stateFunction?: (state?: T | null) => string | undefined | null) {
  const { hash, state } = useLocation() as WindowLocation<T>;
  console.log(hash, state);
  return React.useMemo(() => {
    console.log(state);
    const stateTitle = typeof state === 'object' && typeof stateFunction === 'function' ? stateFunction(state) : null;
    const stateTitleIndex = stateTitle ? titles.indexOf(stateTitle) : -1;
    if (stateTitleIndex >= 0) return stateTitleIndex;
    const hashedTitle = parseHash(hash);
    const initialTabIndex = titles.indexOf(hashedTitle);
    return initialTabIndex >= 0 ? initialTabIndex : 0;
  }, []);
}

export function useHash(tab: number, titles: string[]) {
  const { pathname } = useLocation();
  React.useEffect(() => {
    if (window && typeof window === 'object') window.history.replaceState(tab, '', tab !== 0 ? withHash(titles[tab]) : pathname);
  }, [tab, titles, pathname]);
}

export function withHash(title: string) {
  return title !== '' ? `#${title}` : '';
}
export function parseHash(hash: string) {
  const title = hash !== '' && hash.slice(0, 1) === '#' ? decodeURI(hash.slice(1)) : '';
  return title;
}
