import { createAuthProvider } from '@scherer.adi/react-keycloak-core'

import { reactKeycloakWebContext } from './context'

export const ReactKeycloakProvider = createAuthProvider(reactKeycloakWebContext)
