// console.log(process.env.VUE_APP_SECRET)

const serverPath = {
    //api server
    development: "https://api.spacexdata.com",
    staging: "https://api.spacexdata.com",
    production: "https://api.spacexdata.com",
  }
  const server = serverPath[process.env.VUE_APP_SECRET || "development"]
  console.log("server : ", server);
  let all = {
    routes: {
        alldata:"/launches"
    },
  };
  
  let env = {
    development: {
      api:server+"/v3",
      cookies: {
        name: '',
        expiry: 7,
        domain: "localhost"
      },
    },
    staging: {
      api:server+"/v3",
      cookies: {
        name: '',
        expiry: 7,
        domain: ""
      },
    },
    production: {
      api:server+"/v3",
      cookies: {
        name: '',
        expiry: 7,
        domain: ""
      },
    }
  };
  
  export default {
    ...all,
    ...env[process.env.VUE_APP_SECRET || "development"]
  };
  