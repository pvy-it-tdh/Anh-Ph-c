import Anh from "../message.jpg";
const Message = () => {
  return (
    <div className="mt-8 text-center">
      <p className="text-xl mb-4 text-white">
        Anh chúc Mai Phương của anh tuổi mới ngày càng xinh xắn, giỏi giang hơn
        nữa. Luôn luôn vui vẻ và hạnh phúc. Chúc em thành công hơn ở môi trường
        làm việc mới và đạt được những mục tiêu mà em đã đặt ra. Món quà này
        không to tát gì nhưng anh hy vọng là em sẽ thích nó! Anh yêu em nhiều
        lắm!
      </p>
      <img
        src={Anh}
        alt="Celebration"
        className="mx-auto w-1/3 rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Message;
