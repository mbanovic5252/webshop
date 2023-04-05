module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  //
  // "https://webshop-one-umber.vercel.app/",
  // "https://webshop-production-4b16.up.railway.app",
  // "containers-us-west-139.railway.app",
  //methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  //headers: ["Content-Type", "Authorization", "Origin", "Accept"],
  //keepHeaderOnError: true,
  {
    name: "strapi::cors",
    config: {
      keepHeaderOnError: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
