module.exports = {
    HOST: "localhost",
<<<<<<< HEAD
    USER: "root",
    PASSWORD: "root",
    DB: "cet",
=======
    USER: "phpmyadmin",
    PASSWORD: "nsaproot",
    DB: "CET",
>>>>>>> 00be01c6446c471496856bc64150ff77deb0b8a4
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false
    }
  };