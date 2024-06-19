import A from "../image/a.jpg";
import B from "../image/b.jpg";
import C from "../image/c.jpg";
import D from "../image/d.jpg";
import F from "../image/f.jpg";
import g from "../image/g.jpg";
import h from "../image/h.jpg";
import j from "../image/j.jpg";
import k from "../image/k.jpg";
import l from "../image/l.jpg";
import o from "../image/o.jpg";
import p from "../image/p.jpg";
import r from "../image/r.jpg";
import t from "../image/t.jpg";
import u from "../image/u.jpg";
import y from "../image/y.jpg";

const images = [A, B, C, D, F, g, h, j, k, l, o, p, r, t, u, y];

const ImageGallery = () => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {images.map((image, index) => (
        <div key={index} className="m-2">
          <img
            src={image}
            alt={`Image ${index}`}
            className="w-48 h-48 object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
