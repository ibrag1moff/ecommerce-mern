"use client";
// next
import { useEffect, useState } from "react";

// utils
import { changeUserRole, fetchUsers } from "@/utils/auth";

// components
import UsersTable from "@/components/UsersTable";

// context
import { usePopup } from "@/context/PopupContext";

export interface UsersProps {
    _id: string;
    username: string;
    isAdmin: boolean;
}

export default function AssignAdmin() {
    const [users, setUsers] = useState<UsersProps[]>([]);
    const { openModal, showError } = usePopup();

    const getUsers = async () => {
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    console.log("====================================");
    console.log(users);
    console.log("====================================");

    const handleChangeRole = async (adminId: string, currentRole: boolean) => {
        try {
            const newRole = await changeUserRole(adminId, currentRole);
            // Update the local state with the new role
            setUsers((prevAdmins) =>
                prevAdmins.map((admin) =>
                    admin._id === adminId
                        ? { ...admin, isAdmin: newRole }
                        : admin
                )
            );
            console.log("role changed");
        } catch (error) {
            console.error("Error updating role:", error);
        }
    };

    const handleDelete = async () => {
        try {
        } catch (e) {
            console.error(e);
            showError("Error! User wasn't banned");
        }
    };

    return (
        <div className="py-24 px-3 min-h-screen">
            <h1 className="text-center text-4xl font-semibold mb-12 md:text-5xl">
                Users Dashboard
            </h1>
            <UsersTable users={users} handleChangeRole={handleChangeRole} />
        </div>
    );
}
