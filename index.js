const receivesAFunction = (spy) => {
  spy();
};
const returnsANamedFunction = () => function randomFxn() {};
const returnsAnAnonymousFunction = () => function () {};
