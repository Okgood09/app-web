import { User, UserType } from './user.model'

export class Admin extends User {

    constructor() {
        super()
        this.type = UserType.ADMIN
    }

    fromJSON(json) {
        super.fromJSON(json)

        return this
    }

    toJSON() {
        return {
            ...super.toJSON()
        }
    }

}