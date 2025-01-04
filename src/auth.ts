import NextAuth, { NextAuthConfig } from "next-auth";

export const config: NextAuthConfig = {
    providers:[],
    basePath: "/api/auth",
    callbacks:{
        authorized({ request, auth }) {
            try {
                const { pathname } = request.nextUrl;
                if(pathname === "/protected-page") return !!auth;
                return true;
            } catch (err) {
                console.log(err);
            }
        },
    },
};

export const { handlers, auth, signIn, signOut} = NextAuth(config);