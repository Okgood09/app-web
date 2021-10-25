export class Account {

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return this._password
    }

    set password(value) {
        this._password = value
    }

    fromJSON(json) {
        json = JSON.parse(JSON.stringify(json))

        if (json.email !== undefined) this.email = json.email
        if (json.password !== undefined) this.password = json.password

        return this
    }

    toJSON() {
        return JSON.parse(JSON.stringify({
            email: this.email || undefined,
            password: this.password || undefined
        }))
    }

}