import { JwtModuleOptions } from "@auth0/angular-jwt";
import { TokenStorageService } from "./token-storage.service";
import { environment } from "src/environments/environment";

let tokenStorage: TokenStorageService;

function tokenGetter() {
    return tokenStorage.getToken();
}


export const jwtConfig: JwtModuleOptions = {
    config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl],
        disallowedRoutes: [
            `${environment.apiUrl}/autenticar/login`,
            `${environment.apiUrl}/autenticar/cadastrar`,
            `${environment.apiUrl}/album/todos`,
        ],
    },
};