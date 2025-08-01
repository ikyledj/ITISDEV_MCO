const environments = {
  email_host: process.env.EMAIL_HOST as string,
  email_port: process.env.EMAIL_PORT,
  email_user: process.env.EMAIL_USER as string,
  email_pass: process.env.EMAIL_PASS as string,
};

export default environments;
