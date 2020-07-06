export const ROUTES = {
  UUID: 'uuid',
  UUIDdirect: 'uuid_direct',
  ReactUid: 'react_uid',
  ReactUidSeed: 'react_uid_seed',
  ReactUidHooks: 'use_uid',
  ReactUseExperimentalHooks: 'use_experimental_hooks',
  ReactUseExperimentalHooksWithCM: 'use_experimental_hooks_with_concurrent_mode',
} as const

export const FORM_DATA: {
  label: string
}[] = [
  {
    label: 'Foo',
  },
  {
    label: 'Bar',
  },
  {
    label: 'Baz',
  },
]
