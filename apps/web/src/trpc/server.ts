import { headers } from 'next/headers'
import { cache } from 'react'

import 'server-only'

import { createCaller } from './root'
import { createTRPCContext } from './trpc'

const createContext = cache(() => {
  const heads = new Headers(headers())
  heads.set('x-trpc-source', 'rsc')

  return createTRPCContext({
    headers: heads
  })
})

export const api = createCaller(createContext)
