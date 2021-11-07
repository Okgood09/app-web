export class AccessToken {

    get sub() {
        return this._sub
    }

    set sub(value) {
        this._sub = value
    }

    get sub_type() {
        return this._sub_type
    }

    set sub_type(value) {
        this._sub_type = value
    }

    get scopes() {
        return this._scopes
    }

    set scopes(value) {
        this._scopes = value
    }

    get iat() {
        return this._iat
    }

    set iat(value) {
        this._iat = value
    }

    get exp() {
        return this._exp
    }

    set exp(value) {
        this._exp = value
    }

    get iss() {
        return this._iss
    }

    set iss(value) {
        this._iss = value
    }

    fromJSON(json) {
        json = JSON.parse(JSON.stringify(json))

        if (json.sub !== undefined) this.sub = json.sub
        if (json.sub_type !== undefined) this.sub_type = json.sub_type
        if (json.scopes !== undefined) this.scopes = json.scopes
        if (json.iat !== undefined) this.iat = json.iat
        if (json.exp !== undefined) this.exp = json.exp
        if (json.iss !== undefined) this.iss

        return this
    }

    toJSON() {
        return {
            sub: this.sub || undefined,
            sub_type: this.sub_type || undefined,
            scopes: this.scopes || undefined,
            iat: this.iat || undefined,
            exp: this.exp || undefined,
            iss: this.iss || undefined
        }
    }
}