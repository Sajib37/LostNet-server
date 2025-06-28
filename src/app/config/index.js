import path from "path";
import dotenv from "dotenv";
dotenv.config();
dotenv.config({ path: path.join(process.cwd() , '.env') })
export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    super_admin_email: process.env.SUPER_ADMIN_EMAIL,
    super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
    jwt_secret_key: process.env.ACCESS_TOKEN_SECRET,
    jwt_secret_expires_in: process.env.ACCESS_TOKEN_EXPIRES,
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_api_key:process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret:process.env.CLOUDINARY_API_SECRET,
};