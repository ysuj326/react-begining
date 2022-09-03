import { useEffect, useState } from "react";
// 1. coin 목록 조회 및 select 박스에 적용
// 2. 입력받은 돈으로 얼마나 선택한 코인을 살수있는지 표시
function Coins() {
  // 페이지 로딩 여부
  const [loading, setLoading] = useState(false);
  // 코인 목록
  const [coins, setCoins] = useState([]);
  // 선택한 코인 가격
  const [selectCoinPrice, setSelectCoinPrice] = useState(0);
  // 입력한 금액
  const [amount, setAmount] = useState(0);
  // 변환한 금액
  const [convAmount, setConvAmount] = useState(0);

  // 최초 한번만 코인 목록 조회
  useEffect(() => {
    setLoading(true);
    // 코인 목록 가지고 오는 API
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    // 선택한 코인이 없거나, 입력받은 금액이 없을 경우 return
    if (!selectCoinPrice || !amount) {
      setConvAmount(0);
      return;
    }

    setConvAmount(parseFloat(amount / selectCoinPrice).toFixed(2));
    console.log("onSubmit");
  };

  // 코인 선택시
  const onSelectCoin = ({ target }) => setSelectCoinPrice(target.value);
  // 입력받은 금액 변경시
  const onChangeAmount = ({ target }) => setAmount(target.value);

  return (
    <form onSubmit={onSubmit}>
      <h1>Coins {loading ? "" : `(${coins.length})`}</h1>
      <div>
        {loading ? (
          "Lodings..."
        ) : (
          <select style={{ paddingInline: "10px" }} onChange={onSelectCoin}>
            <option key="all" value={0}>
              코인을 선택해 주세요.
            </option>
            {coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
              </option>
            ))}
          </select>
        )}
      </div>

      <div style={{ margin: "10px auto" }}>
        <input
          type="number"
          placeholder="금액을 입력하세용."
          value={amount}
          style={{
            marginRight: "10px",
            padding: "10px",
          }}
          onChange={onChangeAmount}
        />
        <button>Convert</button>
      </div>

      <hr />
      {convAmount ? <h1>You Can Have Take ({convAmount}) Coins.</h1> : ""}
    </form>
  );
}

export default Coins;
