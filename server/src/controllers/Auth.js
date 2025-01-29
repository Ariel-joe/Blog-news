import { hash } from "bcrypt"

export const createUser = async (req, res) => {
    const {name, phone, email, username, password} = req.body

    const hashedPassword = await hash(password, 10)

    const userData = {
        name, phone, email, username, hashedPassword
    }
}