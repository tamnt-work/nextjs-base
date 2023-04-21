export const ironOptions = {
  password: process.env.IRON_SECRET_COOKIE_PASSWORD!,
  cookieName: process.env.IRON_COOKIE_NAME!,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};
