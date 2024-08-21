function find(array, callback) {
  if (!(array instanceof Array)) return undefined;

  let foundIndex = -1;

  let i = 0;
  do {
    if (callback(array[i])) foundIndex = i;
    else i++;
  } while (foundIndex < 0 && i < array.length);

  return array[foundIndex];
}

{
  const noArray = "foo";
  const result1 = find(noArray, (item) => typeof item === "string");
  console.assert(result1 === undefined, {
    result: result1,
    message: "Test 1 No pasado",
  });

  const array2 = [1, 2, 3, 4, "a", 6, "b", 8];
  const result2 = find(array2, (item) => typeof item === "string");
  console.assert(result2 === array2.find((item) => typeof item === "string"), {
    result: result2,
    message: "Test 2 No pasado",
  });

  const array3 = [1, 2, 3, 4, 5, "a", 7, "b"];
  const result3 = find(array3, (item) => item === "c");
  console.assert(result3 === array3.find((item) => item === "c"), {
    result: result3,
    message: "Test 3 No pasado",
  });
}