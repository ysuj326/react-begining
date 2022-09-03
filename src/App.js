import Button from "./components/Button";
import "./App.css";
import { useEffect, useState } from "react";
// 기존 코드
// 버튼 클릭시 render 문구가 콘솔에 계속 찍힘
function App() {
  const [amount, setAmount] = useState(0);
  const [searchText, setSearchText] = useState("");

  const onButtonClickEvent = () => setAmount((cur) => cur + 1);
  console.log("i run all the time");

  const onChangeSearchText = ({ target }) => {
    setSearchText(target.value);
  };

  // 컴포넌트가 호출 됐을경우에만 실행 되고,
  // 그 이후에는 다른 state 값이 변경되도, 실행 되지 않음
  useEffect(
    // 실행할 함수
    () => {
      console.log("Call API once");

      // CleanUp
      return () => {
        // 컴포넌트가 destroy될 때, 실행하는 부분
        console.log("Destroy");
      };
    },
    // 지켜보려는것
    []
  );
  // searchText가 변경될때만 내용을 실행해라
  useEffect(() => {
    console.log("When SearchText is Change : ", searchText);
  }, [searchText]);
  // amount 변경될때만 내용을 실행해라
  useEffect(() => {
    console.log("When Amount is Change : ", amount);
  }, [amount]);
  // searchText가 || amount 변경될때 내용을 실행해라
  useEffect(() => {
    console.log("When Amount or SearchText is Change : ", amount);
  }, [searchText, amount]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Text here.."
        value={searchText}
        onChange={onChangeSearchText}
      />

      <h3>{amount}</h3>
      <Button text={"Save Button"} onClickEvent={onButtonClickEvent} />
    </div>
  );
}

export default App;
