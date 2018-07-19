console.log('keys are loaded');

exports.dotenv = ({
    
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  })