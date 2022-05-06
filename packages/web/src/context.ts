import { createAuthContext } from '@scherer.adi/react-keycloak-core'
import type { KeycloakInstance } from 'keycloak-js'

export const reactKeycloakWebContext = createAuthContext<KeycloakInstance>()

export const ReactKeycloakWebContextConsumer = reactKeycloakWebContext.Consumer
