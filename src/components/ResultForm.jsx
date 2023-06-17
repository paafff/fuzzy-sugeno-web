import React, { useState } from "react";

const ResultForm = () => {
  const [varPerm1, setVarPerm1] = useState(0);
  return (
    <>
      <div className="mx-auto w-2/3">
        {/* <!--Title--> */}
        <h2 className="font-sans font-bold break-normal text-gray-700  py-4 text-2xl">
          Input Nilai Semesta Perhitungan
        </h2>
        {/* <!--Card--> */}
        <div
          id="section2"
          className="p-8 mt-6 lg:mt-0 rounded shadow bg-slate-200"
        >
          <form onSubmit="{addProduct}">
            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Nama Produk
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="text"
                  //   value={name}
                  //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Product Name"
                  required
                />
                <p className="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div className="md:flex mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                  htmlFor="my-textfield"
                >
                  Harga Produk
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  type="number"
                  //   value={price}
                  //   onChange={(e) => setPrice(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Product Price"
                  required
                />
                <p className="py-2 text-sm text-gray-600">
                  add notes about populating the field
                </p>
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <!--/Card--> */}
      </div>
    </>
  );
};

export default ResultForm;
