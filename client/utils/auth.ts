// axios
import axios from "axios";

const BASE_URL = `http://localhost:3001`;

// assign-admins (for admins only)
export const assignAdmin = async (username: string, isAdmin: boolean) => {
    try {
        const res = await axios.patch(`${BASE_URL}/auth/assign-admin`, {
            isAdmin,
        });
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

// fetch admins (for admins only)
export const fetchAdmins = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/auth/admins`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

// fetch users
export const fetchUsers = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/auth/users`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

// change user's role
export const changeUserRole = async (
    adminId: string,
    currentRole: boolean
): Promise<boolean> => {
    try {
        const updatedRole = !currentRole; // Toggle the role
        await axios.patch(`${BASE_URL}/auth/users/${adminId}`, {
            isAdmin: updatedRole,
        });
        return updatedRole; // Return the new role
    } catch (error) {
        console.error("Failed to change user role:", error);
        throw error; // Re-throw the error for further handling
    }
};
