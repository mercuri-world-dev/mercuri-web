import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'
import type { LayoutLoad } from './$types'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const load: LayoutLoad = async ({ data, depends, fetch }) => {
  /**
   * Declare a dependency so the layout can be invalidated, for example, on
   * session refresh.
   */
  depends('supabase:auth')

  const supabase = isBrowser()
    ? createBrowserClient(SUPABASE_URL, SUPABASE_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(SUPABASE_URL, SUPABASE_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies
          },
        },
      })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return { session, supabase, user }
}