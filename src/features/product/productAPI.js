export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    resolve({ data });
  }
  );
}

export function fetchProductsByFIlters(filter, sort) {
  let queryStr = '';
  for (let key in filter) {
    const catagoriesValues = filter[key];
    if (catagoriesValues.length > 0) {
      const lastCatagoriesValues = catagoriesValues[catagoriesValues.length - 1];
      queryStr += `${key}=${lastCatagoriesValues}&`;
    }
  }

  for (let key in sort) {
    queryStr += `${key}=${sort[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/products?' + queryStr);
    const data = await response.json();
    resolve({ data });
  }
  );
}