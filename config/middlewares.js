module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
module.exports = {
  settings: {
    cors: {
      enabled: true,
      origin: [
        "https://portfolio-emcuxkdnj-noahs-projects-19610baa.vercel.app",
      ], // Remplace par ton domaine
    },
  },
};
