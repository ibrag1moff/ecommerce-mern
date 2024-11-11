import { UsersProps } from "@/app/assign-admin/page";

interface UsersTableProps {
    users: UsersProps[];
    handleChangeRole: (adminId: string, currentRole: boolean) => void;
}

export default function UsersTable({
    users,
    handleChangeRole,
}: UsersTableProps) {
    return (
        <table className="min-w-full border-separate  bg-[#e5e5e5]">
            <thead>
                <tr className="tracking-[1px] uppercase bg-slate-400">
                    <th className="py-2">№</th>
                    <th className="py-2">Assign</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Role</th>
                    <th className="py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((admin, i) => (
                    <tr
                        key={admin._id}
                        className={`${
                            i % 2 ? "bg-slate-400" : "bg-[#e5e5e5]"
                        } text-center tracking-[1px] font-medium`}
                    >
                        <td className="py-2">{i + 1}</td>
                        <td className="py-2">
                            <button
                                onClick={() =>
                                    handleChangeRole(admin._id, admin.isAdmin)
                                }
                            >
                                {admin.isAdmin ? "Demote" : "Promote"}
                            </button>
                        </td>
                        <td className="py-2">{admin.username}</td>
                        <td className="py-2">
                            {admin.isAdmin ? "Admin" : "User"}
                        </td>
                        <td className="py-2">
                            <button>Ban</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
