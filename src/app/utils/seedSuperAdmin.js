import config from "../config/index.js";
import { USER_ROLE } from "../modules/User/user.constant.js";
import { User } from "../modules/User/user.model.js";

const superAdmin = {
    firstName: "Sajib",
    lastName: "Hasan",
    email: config.super_admin_email,
    password: config.super_admin_password,
    role: USER_ROLE.superAdmin
}

const seedSuperAdmin = async () => {    
    const isSuperAdminExist = await User.findOne({ role: USER_ROLE.superAdmin });
    if (!isSuperAdminExist && superAdmin.email && superAdmin.password) {
        await User.create(superAdmin)
    }
}

export default seedSuperAdmin