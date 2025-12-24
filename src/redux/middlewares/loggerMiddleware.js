// it takes 3 things, stote, next, action

export function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      //Log action
      console.log("[log]: " + action.type + " " + new Date().toString());
      // call next middleware in pipeline
      next(action);
      // log the modified state of app
      console.log(store.getState());
    };
  };
}
