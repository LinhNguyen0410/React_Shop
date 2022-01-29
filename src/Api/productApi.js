import axiosClient from "./axiosClient";

const productApi = {
  // Gọi cả 2 APIs: /products và /products/count với parameters giống nhau để có thể handle việc xử lý pagination
  async getAll(params) {
    const newParams = { ...params };
    // newParams sẽ là 1 obj mình clone ra từ params bao gồm _page,_limit mà user truyền vào.
    // ==>>> console.log( newParams) :  newParams {_page: ..., _limit: ...}

    // Transform _page to _start
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 10);
    // Remove un-needed key, because we using _start
    delete newParams._page;
    // Fetch product list + count
    const productList = await axiosClient.get("/products", {
      params: newParams,
    });
    const count = await axiosClient.get("/products/count", {
      params: newParams,
    });
    // Build response and return
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/products`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};
export default productApi;
