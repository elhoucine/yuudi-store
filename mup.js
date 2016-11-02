module.exports = {
  servers: {
    one: {
      host: '164.132.54.107',
      username: 'root',
      password: "",
      // per: "",
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'yuudi',
    path: '/Users/vpro/projects/yuudi/',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://yuudi.com',
      MONGO_URL: 'mongodb://localhost/meteor',
    },

    // dockerImage: 'kadirahq/meteord',
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60,
    enableUploadProgressBar: true,
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
