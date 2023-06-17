import React, { useState, useEffect } from "react";

const InputForm = () => {
  const [varPermMin, setVarPermMin] = useState(null);
  const [varPermMax, setVarPermMax] = useState(null);
  const [varPersMin, setVarPersMin] = useState(null);
  const [varPersMax, setVarPersMax] = useState(null);
  const [varProdMin, setVarProdMin] = useState(null);
  const [varProdMax, setVarProdMax] = useState(null);

  //   input dari user
  const [permintaanX, setPermintaanX] = useState(null);
  const [persediaanX, setPersediaanX] = useState(null);

  //   mencari nilai permintaan turun&naik/persediaan turun&naik
  const [permTurun, setPermTurun] = useState(null);
  const [permNaik, setPermNaik] = useState(null);
  const [persSedikit, setPersSedikit] = useState(null);
  const [persBanyak, setPersBanyak] = useState(null);

  // nilai R1,R2,R3,R4
  //   const [nilaiR1, setNilaiR1] = useState(0);
  //   const [nilaiR2, setNilaiR2] = useState(0);
  //   const [nilaiR3, setNilaiR3] = useState(0);
  //   const [nilaiR4, setNilaiR4] = useState(0);
  const nilaiR1 = permTurun < persBanyak ? permTurun : persBanyak;
  const nilaiR2 = permTurun < persSedikit ? permTurun : persSedikit;
  const nilaiR3 = permNaik < persBanyak ? permNaik : persBanyak;
  const nilaiR4 = permNaik < persSedikit ? permNaik : persSedikit;

  //   hasil inferensi / rule fuzzyfikasi
  //   const [prodBerkurang, setProdBerkurang] = useState(0);
  //   const [prodBertambah, setProdBertambah] = useState(0);
  const prodBerkurang = nilaiR1 < nilaiR2 ? nilaiR1 : nilaiR2;
  const prodBertambah = nilaiR3 > nilaiR4 ? nilaiR3 : nilaiR4;

  //   deffuzyfikasi sugeno
  const nilaiSugeno =
    (prodBerkurang * varProdMin + prodBertambah * varProdMax) /
    (prodBerkurang + prodBertambah);

  //   hitung a pred
  const hitungNilaiAPred = () => {
    try {
      setPermTurun((varPermMax - permintaanX) / (varPermMax - varPermMin));
      setPermNaik((permintaanX - varPermMin) / (varPermMax - varPermMin));
      setPersSedikit((varPersMax - persediaanX) / (varPersMax - varPersMin));
      setPersBanyak((persediaanX - varPersMin) / (varPersMax - varPersMin));
    } catch (error) {
      console.log(error);
    }

    console.log("nilai", permTurun);
    console.log("nilai", permNaik);
    console.log("nilai", persSedikit);
    console.log("nilai", persBanyak);
  };

  //   perbandingan untuk nilai Rule
  const nilaiRule = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     hitungNilaiAPred();
  //   }, [permTurun, permNaik, persSedikit, persBanyak]);

  return (
    <>
      <div className="mx-auto w-2/3">
        {/* <!--Title--> */}
        <h1 className="font-sans font-bold break-normal text-gray-700  py-4 text-2xl">
          Input Nilai Semesta Perhitungan
        </h1>
        {/* <!--Card--> */}
        <>
          <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-slate-200">
            <form onSubmit={hitungNilaiAPred}>
              <>
                <div className="md:flex mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                      htmlFor="my-textfield"
                    >
                      Permintaan Min
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      //   value={varPermMin}
                      onChange={(e) => setVarPermMin(e.target.value)}
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
                      Permintaan Max
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      //   value={varPermMax}
                      onChange={(e) => setVarPermMax(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Product Name"
                      required
                    />
                    <p className="py-2 text-sm text-gray-600">
                      add notes about populating the field
                    </p>
                  </div>
                </div>
              </>

              <>
                <br />
                <br />
                <div className="md:flex mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                      htmlFor="my-textfield"
                    >
                      Persediaan Min
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      //   value={varPersMin}
                      onChange={(e) => setVarPersMin(e.target.value)}
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
                      Persediaan Max
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      //   value={varPersMax}
                      onChange={(e) => setVarPersMax(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Product Name"
                      required
                    />
                    <p className="py-2 text-sm text-gray-600">
                      add notes about populating the field
                    </p>
                  </div>
                </div>
              </>

              <>
                <br />
                <br />
                <div className="md:flex mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                      htmlFor="my-textfield"
                    >
                      Produksi Min
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      //   value={varProdMin}
                      onChange={(e) => setVarProdMin(e.target.value)}
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
                      Produksi Max
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      //   value={varProdMax}
                      onChange={(e) => setVarProdMax(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Product Name"
                      required
                    />
                    <p className="py-2 text-sm text-gray-600">
                      add notes about populating the field
                    </p>
                  </div>
                </div>
              </>

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
        </>
        {/* <!--/Card--> */}

        {/* <!--Card--> */}

        <>
          <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-slate-200">
            <div className="flex flex-row justify-evenly font-sans font-bold break-normal text-gray-700  py-4 ">
              <div>
                <p>
                  (R1) IF Permintaan Turun AND Persediaan Banyak THEN Produksi
                  Berkurang
                </p>
                <p>
                  (R2) IF Permintaan Turun AND Persediaan Sedikit THEN Produksi
                  Berkurang
                </p>
                <p>
                  (R3) IF Permintaan Naik AND Persediaan Banyak THEN Produksi
                  Bertambah
                </p>
                <p>
                  (R4) IF Permintaan Naik AND Persediaan Sedikit THEN Produksi
                  Bertambah
                </p>
              </div>
              <div className="">
                <p>{nilaiR1}</p>
                <p>{nilaiR2}</p>
                <p>{nilaiR3}</p>
                <p>{nilaiR4}</p>
                {/* nilai produksi */}
                {/* <p>{prodBerkurang}</p> */}
                {/* <p>{prodBertambah}</p> */}
                {/* nilai sugeno */}
                {/* <p>{nilaiSugeno}</p> */}
              </div>
            </div>

            <form onSubmit="{addProduct}">
              <>
                <div className="md:flex mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                      htmlFor="my-textfield"
                    >
                      Input Permintaan
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      //   value={permintaanX}
                      onChange={(e) => setPermintaanX(e.target.value)}
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
                      Input Persediaan
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      //   value={persediaanX}
                      onChange={(e) => setPersediaanX(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Product Name"
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
              </>
            </form>
          </div>
        </>
        {/* <!--/Card--> */}

        {/* <!--Card--> */}
        <>
          <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-slate-200">
            <form onSubmit="{addProduct}">
              <>
                <div className="md:flex mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4"
                      htmlFor="my-textfield"
                    >
                      Produksi Berkurang
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      value={prodBerkurang}
                      //   onChange={(e) => setPermintaanX(e.target.value)}
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
                      Produksi Bertambah
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      value={prodBertambah}
                      //   onChange={(e) => setPersediaanX(e.target.value)}
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
                      Hasil Sugeno
                    </label>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      type="number"
                      value={nilaiSugeno}
                      //   onChange={(e) => setPersediaanX(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Product Name"
                      required
                    />
                    <p className="py-2 text-sm text-gray-600">
                      add notes about populating the field
                    </p>
                  </div>
                </div>
              </>
            </form>
          </div>
        </>
        {/* <!--/Card--> */}
      </div>
    </>
  );
};

export default InputForm;
