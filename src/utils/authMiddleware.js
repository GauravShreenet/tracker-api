
import { getUserByEmail } from "../router/modules/UserModule.js";
import { comparePass } from "./bcryptHelper.js";

const authenticateUser = async (req, res, next) => {
    try {
        const { password, email } = req.body

        // check if user exist for the given email
        const result = await getUserByEmail(email)
        console.log('email is ' + result)

        if (result?.password) {
            // check if the plain pass and the pass from db, the hashed one, is the same
            const isMatched = comparePass(password, result.password);

            if (isMatched) {
                result.password = undefined;
                return res.json({
                    status: "success",
                    message: "You have successfully logged in",
                    user: result
                })
            }
        }

        res.json({
            status: "error",
            message: "Invalid Login detail",
        });

    } catch (error) {

        if (error.message.includes("E11000 duplicate key error collection")) {
            error.message = "There is another user have this email already exist";
            error.errorCode = 200;
        }
        next(error);
    }
};

export default authenticateUser;