import type { AuthClient } from '@scherer.adi/react-keycloak-core'
import type { KeycloakInstance } from 'keycloak-js'

export interface SSRAuthClient
  extends Omit<KeycloakInstance, 'init' | 'updateToken'>,
    AuthClient {
  /** A boolean indicating if the user is authenticated or not. */
  authenticated?: boolean
}
