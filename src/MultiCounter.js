import React, { useState } from 'react';
import './MultiCounter.css'; // CSSファイルをインポート

const MultiCounter = () => {
  const [total, setTotal] = useState(0);
  const [buttonCounts, setButtonCounts] = useState({ 100: 0, 180: 0, 240: 0, 380: 0, 500: 0 });

  const addNumber = (number) => {
    setTotal(total + number);
    setButtonCounts((prevCounts) => ({
      ...prevCounts,
      [number]: prevCounts[number] + 1,
    }));
  };

  const subtractNumber = (number) => {
    if (buttonCounts[number] > 0) {
      setTotal(total - number);
      setButtonCounts((prevCounts) => ({
        ...prevCounts,
        [number]: prevCounts[number] - 1,
      }));
    }
  };

  return (
    <div className="multi-counter-container">
      {/* 左側の領域（合計、追加ボタン、取り消しボタン） */}
      <div className="left-panel">
        <h1 className="total">合計: {total}円</h1>
        <div className="button-group">
          {/* 各ボタンに異なる数字を設定 */}
          <button className="add-button" onClick={() => addNumber(100)}>+100</button>
          <button className="add-button" onClick={() => addNumber(180)}>+180</button>
          <button className="add-button" onClick={() => addNumber(240)}>+240</button>
          <button className="add-button" onClick={() => addNumber(380)}>+380</button>
          <button className="add-button" onClick={() => addNumber(500)}>+500</button>
        </div>
        <div className="button-group">
          {/* 各取り消しボタン */}
          <button className="subtract-button" onClick={() => subtractNumber(100)}>取 消</button>
          <button className="subtract-button" onClick={() => subtractNumber(180)}>取 消</button>
          <button className="subtract-button" onClick={() => subtractNumber(240)}>取 消</button>
          <button className="subtract-button" onClick={() => subtractNumber(380)}>取 消</button>
          <button className="subtract-button" onClick={() => subtractNumber(500)}>取 消</button>
        </div>
      </div>

      {/* 右側の領域（各ボタンの押下回数） */}
      <div className="right-panel">
        <h2>各ボタンの押下回数</h2>
        <ul>
          <li>100: {buttonCounts[100]} 枚</li>
          <li>180: {buttonCounts[180]} 枚</li>
          <li>240: {buttonCounts[240]} 枚</li>
          <li>380: {buttonCounts[380]} 枚</li>
          <li>500: {buttonCounts[500]} 枚</li>
        </ul>
      </div>
    </div>
  );
};

export default MultiCounter;
