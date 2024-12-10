import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import { Outlet, ScrollRestoration } from '@tanstack/react-router'
import { Meta, Scripts } from '@tanstack/start'
import { DefaultCatchBoundary } from '../components/DefaultCatchBoundary'
import { NotFound } from '../components/NotFound'
import { RaikouProvider } from '@raikou/system';
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import '@raikou/system/styles.css';
import '@stylefusion/react/styles.css';

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'TanStack Form + Start',
    },
  ],
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <RaikouProvider>
        <Outlet />
      </RaikouProvider>
    </RootDocument>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  )
}
