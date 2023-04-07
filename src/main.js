function Cell() {
  let value = '_';
  const getValue = () => value;
  const setValue = (newValue) => {
    value = newValue;
  };

  return { getValue, setValue };
}
