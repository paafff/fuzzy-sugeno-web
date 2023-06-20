import React, { useState, useEffect } from "react";

const InputForm = () => {
  const [varPermMin, setVarPermMin] = useState(0);
  const [varPermMax, setVarPermMax] = useState(0);
  const [varPersMin, setVarPersMin] = useState(0);
  const [varPersMax, setVarPersMax] = useState(0);
  const [varProdMin, setVarProdMin] = useState(0);
  const [varProdMax, setVarProdMax] = useState(0);

  //   input dari user
  const [permintaanX, setPermintaanX] = useState(0);
  const [persediaanX, setPersediaanX] = useState(0);

  //   mencari nilai permintaan turun&naik/persediaan turun&naik
  const [permTurun, setPermTurun] = useState(0);
  const [permNaik, setPermNaik] = useState(0);
  const [persSedikit, setPersSedikit] = useState(0);
  const [persBanyak, setPersBanyak] = useState(0);

  // nilai R1,R2,R3,R4

  const nilaiR1 = permTurun < persBanyak ? permTurun : persBanyak;
  const nilaiR2 = permTurun < persSedikit ? permTurun : persSedikit;
  const nilaiR3 = permNaik < persBanyak ? permNaik : persBanyak;
  const nilaiR4 = permNaik < persSedikit ? permNaik : persSedikit;

  //   hasil inferensi / rule fuzzyfikasi
  const prodBerkurang = nilaiR1 < nilaiR2 ? nilaiR1 : nilaiR2;
  const prodBertambah = nilaiR3 > nilaiR4 ? nilaiR3 : nilaiR4;

  //   deffuzyfikasi sugeno
  const nilaiSugeno =
    (prodBerkurang * varProdMin + prodBertambah * varProdMax) /
    (prodBerkurang + prodBertambah);

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (isButtonClicked) {
      setPermTurun((varPermMax - permintaanX) / (varPermMax - varPermMin));
      setPermNaik((permintaanX - varPermMin) / (varPermMax - varPermMin));
      setPersSedikit((varPersMax - persediaanX) / (varPersMax - varPersMin));
      setPersBanyak((persediaanX - varPersMin) / (varPersMax - varPersMin));

      // Reset state isButtonClicked setelah useEffect dijalankan
      setIsButtonClicked(false);
    }
  }, [
    isButtonClicked,
    varPermMax,
    varPermMin,
    varPersMax,
    varPersMin,
    permintaanX,
    persediaanX,
  ]);

  const hitungNilaiAPred = (e) => {
    e.preventDefault();
    setIsButtonClicked(true); // Mengubah state isButtonClicked menjadi true ketika tombol diklik
  };

  return (
    <div className=" mx-auto w-4/5 flex flex-col lg:flex-row justify-evenly">
      <div className="mx-auto max-w-xl w-full">
        {/* <!--Title--> */}
        <h1 className="font-sans font-bold break-normal text-gray-300  py-4 text-2xl">
          Input Nilai Semesta Perhitungan
        </h1>
        {/* <!--Card--> */}

        <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-slate-200">
          <form onSubmit={hitungNilaiAPred}>
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
                  onChange={(e) => setVarPermMin(parseInt(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Input Nilai"
                  required
                />
                <p className="py-2 text-sm text-gray-600">
                  *Nilai permintaan terendah selama periode tertentu.
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
                  onChange={(e) => setVarPermMax(parseInt(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Input Nilai"
                  required
                />
                <p className="py-2 text-sm text-gray-600">
                  *Nilai permintaan tertinggi selama periode tertentu.
                </p>
              </div>
            </div>

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
                  onChange={(e) => setVarPersMin(parseInt(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Input Nilai"
                  required
                />
                <p className="py-2 text-sm text-gray-600">
                  *Nilai persediaan terendah selama periode tertentu.
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
                  onChange={(e) => setVarPersMax(parseInt(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Input Nilai"
                  required
                />
                <p className="py-2 text-sm text-gray-600">
                  *Nilai persediaan tertinggi selama periode tertentu.
                </p>
              </div>
            </div>

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
                  onChange={(e) => setVarProdMin(parseInt(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Input Nilai"
                  required
                />
                <p className="py-2 text-sm text-gray-600">
                  *Nilai produksi terendah selama periode tertentu.
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
                  onChange={(e) => setVarProdMax(parseInt(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Input Nilai"
                  required
                />
                <p className="py-2 text-sm text-gray-600">
                  *Nilai produksi tertinggi selama periode tertentu.
                </p>
              </div>
            </div>

            <div className="flex justify-end w-full">
              {/* button */}
              <button className="" type="submit">
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                >
                  <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-800 group-hover:h-full"></span>
                  <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      class="w-5 h-5 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      class="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    Fuzzyfikasi
                  </span>
                </a>
              </button>
              {/* button */}
            </div>
          </form>
        </div>
      </div>

      {/* <!--/Card--> */}

      {/* kanan */}
      <div className="mx-auto max-w-2xl w-full pt-20 lg:pt-0">
        <>
          <div>
            <h1 className="font-sans font-bold break-normal text-gray-300  py-4 text-2xl">
              Input Nilai Permintaan dan Persediaan
            </h1>
            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-slate-200">
              {/* nilai produksi */}
              {/* <p>{prodBerkurang}</p> */}
              {/* <p>{prodBertambah}</p> */}
              {/* nilai sugeno */}
              {/* <p>{nilaiSugeno}</p> */}

              <form onSubmit={hitungNilaiAPred}>
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
                      onChange={(e) => setPermintaanX(parseInt(e.target.value))}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Input Nilai"
                      required
                    />
                    <p className="py-2 text-sm text-gray-600">
                      *Input nilai permintaan untuk menghitung jumlah
                      produksinya.
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
                      onChange={(e) => setPersediaanX(parseInt(e.target.value))}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Input Nilai"
                      required
                    />
                    <p className="py-2 text-sm text-gray-600">
                      *Input nilai persediaan untuk menghitung jumlah
                      produksinya.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  {/* button */}
                  <button className="" type="submit">
                    <a
                      href="#_"
                      class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-800 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                      <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-gray-800 group-hover:h-full"></span>
                      <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          class="w-5 h-5 text-gray-800"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                          class="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        Defuzzyfikasi
                      </span>
                    </a>
                  </button>
                  {/* button */}
                </div>
              </form>
            </div>
          </div>
        </>
        {/* <!--/Card--> */}

        {/* <!--Card--> */}
        <>
          <br />
          <div className="">
            <h1 className="font-sans font-bold break-normal text-gray-300  py-4 text-2xl">
              Hasil Inference Dan Fuzzyfikasi
            </h1>
            <div className="mx-auto space-y-5 p-8 mt-6 lg:mt-0 rounded shadow bg-slate-200">
              <div className="">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-sans font-bold text-gray-600 py-2">
                        Rules Fuzzy
                      </th>
                      <th className="font-sans font-bold text-gray-600 py-2">
                        Nilai
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr className="text-center text-gray-600">
                      <td className="text-left">
                        (R1) IF Permintaan Turun AND Persediaan Banyak THEN
                        Produksi Berkurang
                      </td>
                      <td className="">{nilaiR1.toFixed(2)}</td>
                    </tr>
                    <tr className="text-center text-gray-600">
                      <td className="text-left">
                        (R2) IF Permintaan Turun AND Persediaan Sedikit THEN
                        Produksi Berkurang
                      </td>
                      <td>{nilaiR2.toFixed(2)}</td>
                    </tr>
                    <tr className="text-center text-gray-600">
                      <td className="text-left">
                        (R3) IF Permintaan Naik AND Persediaan Banyak THEN
                        Produksi Bertambah
                      </td>
                      <td>{nilaiR3.toFixed(2)}</td>
                    </tr>
                    <tr className="text-center text-gray-600">
                      <td className="text-left">
                        (R4) IF Permintaan Naik AND Persediaan Sedikit THEN
                        Produksi Bertambah
                      </td>
                      <td>{nilaiR4.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="py-4">
                <table className="w-full table-auto">
                  <tbody>
                    <tr>
                      <td className="">
                        <label
                          className="block text-gray-600 font-bold  text-md "
                          htmlFor="my-textfield"
                        >
                          Produksi Berkurang
                        </label>
                        <p className=" text-xs text-gray-600">
                          *nilai terendah antara R1 dan R2
                        </p>
                      </td>
                      <td className="text-gray-600 font-bold text-md">
                        <p>{prodBerkurang.toFixed(2)}</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="">
                        <label
                          className="block text-gray-600 font-bold  text-md "
                          htmlFor="my-textfield"
                        >
                          Produksi Bertambah
                        </label>
                        <p className=" text-xs text-gray-600">
                          *nilai tertinggi antara R3 dan R4
                        </p>
                      </td>
                      <td className="text-gray-600 font-bold text-md">
                        <p>{prodBertambah.toFixed(2)}</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-6">
                        <label
                          className="block text-gray-600 font-bold  text-2xl "
                          htmlFor="my-textfield"
                        >
                          Hasil Nilai Defuzzyfikasi Sugeno
                        </label>
                      </td>
                      <td className="text-gray-600 font-bold text-md pt-6">
                        <p>
                          {isNaN(nilaiSugeno) ? "0.00" : nilaiSugeno.toFixed(2)}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      </div>

      {/* <!--/Card--> */}
      <br />
    </div>
  );
};

export default InputForm;
