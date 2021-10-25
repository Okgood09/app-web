import { Account } from './account'

export class User extends Account {

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    fromJSON(json) {
        super.fromJSON(json)

        if (json.id !== undefined) this.id = json.id
        if (json.name !== undefined) this.name = json.name

        return this
    }

    toJSON() {
        return JSON.parse(JSON.stringify({
            ...super.toJSON(),
            id: this.id || undefined,
            name: this.name || undefined
        }))
    }

}