import React from "react";

export default function ComplexDashboardLayout({ children, users, revenue, notifications }:
    { children: React.ReactNode, users: React.ReactNode, revenue: React.ReactNode, notifications: React.ReactNode }) {
    return (
        <section className="">
            <main>{children}</main>
            <article className="flex">
                <div className="flex flex-col flex-1">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex">
                    {notifications}
                </div>
            </article>

        </section>
    )
}