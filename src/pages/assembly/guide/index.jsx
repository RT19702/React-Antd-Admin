import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import steps from "./steps";

const Guide = () => {
  const driverObj = driver({
    // showProgress: true,
    opacity: 0.75, // 背景不透明度（0表示只有弹出窗口，没有覆盖）
    doneBtnText: "结束", // 最后一个按钮上的文本
    closeBtnText: "关闭", // 此步骤的“关闭”按钮上的文本
    nextBtnText: "下一步", // 此步骤的下一步按钮文本
    prevBtnText: "上一步", // 此步骤的上一个按钮文本
    steps
  })
  driverObj.drive();
  return (
    <div>
      <h1>Assembly Guide</h1>
    </div>
  );
}

export default Guide;