import { Access } from './auth/access.model'

export const UserType = {
    ADMIN: 'admin'
}

export class User extends Access {

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
    }

    get created_at() {
        return this._created_at
    }

    set created_at(value) {
        this._created_at = value
    }

    get updated_at() {
        return this._updated_at
    }

    set updated_at(value) {
        this._updated_at = value
    }

    get last_login() {
        return this._last_login
    }

    set last_login(value) {
        this._last_login = value
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get type() {
        return this._type
    }

    set type(value) {
        this._type = value
    }

    fromJSON(json) {
        super.fromJSON(json)

        if (json.id !== undefined) this.id = json.id
        if (json.created_at !== undefined) this.created_at = json.created_at
        if (json.updated_at !== undefined) this.updated_at = json.updated_at
        if (json.last_login !== undefined) this.last_login = json.last_login
        if (json.name !== undefined) this.name = json.name
        if (json.type !== undefined) this.type = json.type
        return this
    }

    toJSON() {
        return {
            ...super.toJSON(),
            id: this.id || undefined,
            created_at: this.created_at || undefined,
            updated_at: this.updated_at || undefined,
            last_login: this.last_login || undefined,
            name: this.name || undefined,
            type: this.type || undefined
        }
    }

}