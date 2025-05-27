import React from "react";
import Card from "../components/card";

export default function ComplexDashboardLayout({ children, users, revenue, notifications, login }:
    { children: React.ReactNode, users: React.ReactNode, revenue: React.ReactNode, notifications: React.ReactNode, login: React.ReactNode }) {

    const isLoggedIn = false

    return (
        isLoggedIn ?
            <section className="">
                <Card>{children}</Card>
                <article className="flex">
                    <div className="flex flex-col flex-1">
                        <Card>{users}</Card>
                        <Card>{revenue}</Card>
                    </div>
                    <div className="flex flex-1">
                        <Card>{notifications}</Card>
                    </div>
                </article>

            </section>
            :
            <Card>{login}</Card>

    )
}