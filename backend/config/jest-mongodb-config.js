const MongoMemoryServer={
    mongodbMemoryServerOptions: {
      binary: {
        version: '4.0.3',
        skipMD5: true
      },
      autoStart: false,
      instance: {}
    }
  };

  export default MongoMemoryServer;