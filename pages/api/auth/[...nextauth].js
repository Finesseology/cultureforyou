import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"; //Email Provider
import GoogleProvider from "next-auth/providers/google"; //Google Provider
export const authOptions = 
{
  // Configure one or more authentication providers
  providers: [
    //Email Provider
    EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
      }),
    //Google Provider
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }

}
export default NextAuth(authOptions)
