export default{
    jwt: {
        secret: process.env.APP_SCRECT || 'default',
        expiresIn: '1d',

    }
}