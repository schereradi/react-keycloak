import { createAuthProvider } from '@scherer.adi/react-keycloak-core'

import { reactKeycloakSsrContext } from './context'

export const KeycloakProvider = createAuthProvider(reactKeycloakSsrContext)
