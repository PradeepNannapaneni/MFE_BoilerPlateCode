export class AuthService {
    private static getCookieValue(cookieName: string) {
        return document.cookie
            .split(';')
            .find((row) => row.includes(`${cookieName}=`))
            ?.split('=')[1];
    }

    static getUserGAID() {
        let userGAID = this.getCookieValue('userGAID');
        return userGAID ?? '';
    }

    static getUserType() {
        let userType = this.getCookieValue('userGAID');
        return userType ?? '';
    }

    static getAccessToken() {
        let accessToken = this.getCookieValue('accessToken');
        return accessToken ?? '';
    }

    static getSessionId() {
        let sessionId = this.getCookieValue('sessionId');
        return sessionId ?? '';
    }

    static getHeaders(post: boolean, addAccessToken: boolean) {
        return {
            headers: {
                'sessionId': AuthService.getSessionId(),
                'Authorization': addAccessToken ? `Bearer ${AuthService.getAccessToken()}` : '',
                'content-type': post ? `application/json` : `text/html`,
            }
        };
    }

    static getFileHeaders(post: boolean, addAccessToken: boolean) {
        return {
            headers: {
                'sessionId': AuthService.getSessionId(),
                'Authorization': addAccessToken ? `Bearer ${AuthService.getAccessToken()}` : '',
                'content-type': post ? `application/json` : `text/html`,
                'accept': 'application/json, text/plain, */*'
            },
            repsonseType: 'arraybuffer' as any
        };
    }
}