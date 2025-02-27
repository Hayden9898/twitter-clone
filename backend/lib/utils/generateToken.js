import jwt from 'jsonwebtoken';

//allows server to verify identity of user
export const generateTokenandSetCookie = (id, res) => {
    const token = jwt.sign({userId: id}, process.env.JWT_SECRET, {
        expiresIn: "15d"
    });

    //security options
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //In muiliseconds
        httpOnly: true, //prevents XSS attacks cros-site scripting attacks
        sameSite: "strict", //CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    });
}