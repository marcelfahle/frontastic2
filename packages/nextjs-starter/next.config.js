const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  target: "serverless",
  images: {
    domains: ["res.cloudinary.com", "s3-eu-west-1.amazonaws.com"]
  }
};
