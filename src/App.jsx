import Header from "./components/Header";
import Message from "./components/Message";
import Card from "./components/Card";
import card3 from "./card3.jpg";
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";

import ImageGallery from "./components/ImageGalley";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900">
      <Header />
      <Message />
      <div className="flex flex-wrap justify-center">
        <Card
          title="Hôm đi thi Marketing"
          imageSrc={card1}
          description="Lần đầu a đi xem một cuộc thi mà còn run hơn cả thí sinh. Em đã làm rất tốt rồi! Những cuộc thi sắp tới anh ước là cuộc thi nào cũng được  cổ vũ cho em"
        />
        <Card
          title="Kỉ Niệm Cây Kẹp"
          imageSrc={card2}
          description="Nhìn cái kẹp nơ này a nhớ tới cái cây mà em kẹp lên xe a. Không biết thằng nào chôm mất tiêu của a rồi. À cái kẹp này hơn với em nè. Bữa em kẹp đầu anh mà a quên luôn ra đường người nhìn a cười ko biết vì sao"
        />
        <Card
          title="Kỉ Niệm sương sương"
          imageSrc={card3}
          description="Lúc này chuẩn bị thuyết trình rồi nhưng mà vẫn ra gặp anh. Thương lắm!! Em luôn dành thời gian cho anh, take care a mọi lúc và trông chừng tui coi sợ tui đi với cô nào. Khổ ghê tui có mình bạn thui đó"
        />
      </div>
      <ImageGallery />
    </div>
  );
};

export default App;
