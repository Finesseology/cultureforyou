import NextAuth from "next-auth"
//import EmailProvider from "next-auth/providers/email"; //Email Provider
import GoogleProvider from "next-auth/providers/google"; //Google Provider
export const authOptions = 
{
  // Configure one or more authentication providers
  providers: [
    //Email Provider
    /*EmailProvider({
        server: process.env.EMAIL_SERVER,
        from: process.env.EMAIL_FROM
      }),*/
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
  }, 

  google: {
    reCaptcha: {
      siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY,
      secretKey: process.env.RECAPTCHA_SECRETKEY,
      version: "v3",
      threshold: 0.5,
      // Add reCaptchaResponse to the callbackUrl query parameters
      callback: (req, res, options) => {
        options.callbackUrl = `${options.callbackUrl}?reCaptchaResponse=${req.query.reCaptchaResponse}`;
      }
    }
  }
};

export default NextAuth(authOptions)
