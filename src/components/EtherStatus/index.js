import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Waypoint } from "react-waypoint";

const rpc = {
  eth: "https://rpc.flashbots.net",
  op: "https://optimism.llamarpc.com",
  arb: "https://arb1.arbitrum.io/rpc",
  linea: "https://rpc.linea.build",
  zksync: "https://mainnet.era.zksync.io",
};

const address = "0xda15a089ce396c50fdc1c01afdb97c90ca9b0e68";

function hexToEther(hex) {
  return (parseInt(hex, 16) / 1e18).toFixed(6);
}

const EtherStatus = () => {
  const [ethBalance, setEthBalance] = useState(0);
  const [opBalance, setOpBalance] = useState(0);
  const [arbBalance, setArbBalance] = useState(0);
  const [lineaBalance, setLineaBalance] = useState(0);
  const [zksyncBalance, setZksyncBalance] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [ETHUSD, setETHUSD] = useState(0);
  const [USDTWD, setUSDTWD] = useState(0);

  const [startCount, setStartCount] = useState(false);
  const onEnter = () => {
    setStartCount(true);
  };

  const query_raw = JSON.stringify({
    method: "eth_getBalance",
    params: [address, "latest"],
    id: 1,
    jsonrpc: "2.0",
  });

  const requestOptions = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: query_raw,
    redirect: "follow",
  };

  useEffect(() => {
    const fetchPrice = async () => {
      fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum"
      )
        .then((response) => response.json())
        .then((data) => {
          setETHUSD(data[0].current_price);
        })
        .catch((error) => console.log("error", error));

      fetch(" https://open.er-api.com/v6/latest/USD")
        .then((response) => response.json())
        .then((data) => {
          setUSDTWD(data.rates.TWD);
        });
    };

    const fetchBalance = async () => {
      fetch(rpc.eth, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setEthBalance(hexToEther(data.result));
          setTotalBalance((prev) => prev + hexToEther(data.result));
        })
        .catch((error) => {
          console.log("error", error);
        });

      fetch(rpc.op, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setOpBalance(hexToEther(data.result));
          setTotalBalance((prev) => prev + hexToEther(data.result));
        })
        .catch((error) => {
          console.log("error", error);
        });

      fetch(rpc.arb, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setArbBalance(hexToEther(data.result));
          setTotalBalance((prev) => prev + hexToEther(data.result));
        })
        .catch((error) => {
          console.log("error", error);
        });

      fetch(rpc.linea, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setLineaBalance(hexToEther(data.result));
          setTotalBalance((prev) => prev + hexToEther(data.result));
        })
        .catch((error) => {
          console.log("error", error);
        });

      fetch(rpc.zksync, requestOptions)
        .then((response) => response.json())
        .then((data) => {
          setZksyncBalance(hexToEther(data.result));
          setTotalBalance((prev) => prev + hexToEther(data.result));
        })
        .catch((error) => {
          console.log("error", error);
        });
    };

    fetchPrice();
    fetchBalance();

  }, []);

  return (
      <div className="2xl:mx-72 rounded-xl py-6">
        <Waypoint onEnter={onEnter} />
        <div className="flex justify-between ">
          <div className="flex ">
            {/* <img
              src="/ethereum-logo.svg"
              alt="ethereum-logo"
              className="h-10 my-auto pl-2 "
            /> */}
            <div className="text-lg font-bold py-6 pr-8 pl lg:text-xl">
              Ethereum
            </div>
          </div>
          <div className="flex ">
            <div className="text-lg font-semibold py-6 pr-4 md:px-8">
              {startCount && (
                <CountUp
                  end={ethBalance}
                  decimals={ethBalance ? 6 : 0}
                  duration={1.5}
                  delay={0.5}
                />
              )}{" "}
              ETH{" "}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={ethBalance * ETHUSD}
                  decimals={ethBalance ? 2 : 0}
                  duration={1.5}
                  delay={0.5}
                />
              )}
              {" USD"}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={ethBalance * ETHUSD * USDTWD}
                  decimals={ethBalance ? 2 : 0}
                  duration={1.5}
                  delay={0.5}
                />
              )}
              {" TWD"}
            </div>
          </div>
        </div>
        <div className="rounded-full border w-100 border-gray-200  justify-center mx-auto mb-2"></div>

        <div className="flex justify-between ">
          <div className="flex ">
            {/* <img
              src="/op-logo-red.svg"
              alt="optimism-logo"
              className="h-8 my-auto pl-4 pr-2"
            /> */}
            <div className="text-lg font-bold py-6 pr-8 pl lg:text-xl">
              Optimism
            </div>
          </div>
          <div className="flex ">
            <div className="text-lg font-semibold py-6 pr-4 md:px-8">
              {startCount && (
                <CountUp
                  end={opBalance}
                  decimals={opBalance ? 6 : 0}
                  duration={1.5}
                  delay={0.5}
                />
              )}{" "}
              ETH{" "}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={opBalance * ETHUSD}
                  decimals={opBalance ? 2 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}
              {" USD"}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={opBalance * ETHUSD * USDTWD}
                  decimals={opBalance ? 2 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}
              {" TWD"}
            </div>
          </div>
        </div>
        <div className="rounded-full border w-100 border-gray-200  justify-center mx-auto mb-2"></div>

        <div className="flex justify-between ">
          <div className="flex ">
            {/* <img
              src="/arbitrum-logo.svg"
              alt="arbitrum-logo"
              className="h-10 my-auto pl-2 "
            /> */}
            <div className="text-lg font-bold py-6 pr-8 pl lg:text-xl">
              Arbitrum
            </div>
          </div>
          <div className="flex ">
            <div className="text-lg font-semibold py-6 pr-4 md:px-8">
              {startCount && (
                <CountUp
                  end={arbBalance}
                  decimals={arbBalance ? 6 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}{" "}
              ETH{" "}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={arbBalance * ETHUSD}
                  decimals={arbBalance ? 2 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}
              {" USD"}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={arbBalance * ETHUSD * USDTWD}
                  decimals={arbBalance ? 2 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}
              {" TWD"}
            </div>
          </div>
        </div>
        <div className="rounded-full border w-100 border-gray-200  justify-center mx-auto mb-2"></div>

        <div className="flex justify-between ">
          <div className="flex ">
            {/* <img
              src="/ethereum-logo.svg"
              alt="ethereum-logo"
              className="h-10 my-auto pl-2 "
            /> */}
            <div className="text-lg font-bold py-6 pr-8 pl lg:text-xl">
              Linea
            </div>
          </div>
          <div className="flex ">
            <div className="text-lg font-semibold py-6 pr-4 md:px-8">
              {startCount && (
                <CountUp
                  end={lineaBalance}
                  decimals={lineaBalance ? 6 : 0}
                  duration={1.5}
                  delay={0.5}
                />
              )}{" "}
              ETH{" "}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={lineaBalance * ETHUSD}
                  decimals={lineaBalance ? 2 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}
              {" USD"}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={lineaBalance * ETHUSD * USDTWD}
                  decimals={lineaBalance ? 2 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}
              {" TWD"}
            </div>
          </div>
        </div>
        <div className="rounded-full border w-100 border-gray-200  justify-center mx-auto mb-2"></div>

        <div className="flex justify-between ">
          <div className="flex ">
            {/* <img
              src="/ethereum-logo.svg"
              alt="ethereum-logo"
              className="h-10 my-auto pl-2 "
            /> */}
            <div className="text-lg font-bold py-6 pr-8 pl lg:text-xl">
              zkSync
            </div>
          </div>
          <div className="flex ">
            <div className="text-lg font-semibold py-6 pr-4 md:px-8">
              {startCount && (
                <CountUp
                  end={zksyncBalance}
                  decimals={zksyncBalance ? 6 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}{" "}
              ETH{" "}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={zksyncBalance * ETHUSD}
                  decimals={zksyncBalance ? 2 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}
              {" USD"}
            </div>
            <div className="hidden lg:block border-l border-gray-400 font-semibold h-2/3 my-auto rounded-full"></div>
            <div className="hidden lg:block text-lg font-semibold md:py-6 md:px-8">
              {startCount && (
                <CountUp
                  start={0}
                  end={zksyncBalance * ETHUSD * USDTWD}
                  decimals={zksyncBalance ? 2 : 0}
                  delay={0.5}
                  duration={1.5}
                />
              )}
              {" TWD"}
            </div>
          </div>
        </div>
        <div className="rounded-full border w-100 border-gray-200  justify-center mx-auto mb-2"></div>
      </div>
  );
};

export default EtherStatus;
