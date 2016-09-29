// TODO: add error handling
export const smartController = (generator) => {

  const it = generator();

  const advancer = ({value, done}) => {
    if (!done) {
      value.then((data) => {
        advancer(it.next(data));
      });
    }
  };

  advancer(it.next());

};

export const curry = (asyncFn, ...parameters) => {
  return (callback) => {
    parameters.push(callback);
    asyncFn.apply(null, parameters);
  };
};