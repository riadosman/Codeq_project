import Blog from "../Blog";
import img1 from "../../../public/images/blog.png";
export default function Blogs() {
  const blogsContent = [
    {
      date: "منذ 5 أشهر",
      views: "500 مشاهدة",
      title: "أهم عناصر HTML وكيفية استخدامها ",
      desc: " هناك العديد من العناصر الأساسية التي تُستخدم لإنشاء صفحات الويب وتنظيم محتواها.",
      image: img1,
    },
    {
      date: "منذ 5 أشهر",
      views: "500 مشاهدة",
      title: "أهم عناصر HTML وكيفية استخدامها ",
      desc: " هناك العديد من العناصر الأساسية التي تُستخدم لإنشاء صفحات الويب وتنظيم محتواها.",
      image: img1,
    },
    {
      date: "منذ 5 أشهر",
      views: "500 مشاهدة",
      title: "أهم عناصر HTML وكيفية استخدامها ",
      desc: " هناك العديد من العناصر الأساسية التي تُستخدم لإنشاء صفحات الويب وتنظيم محتواها.",
      image: img1,
    },
  ];
  return (
    <div className="container my-5">
      <h1 className="text-center">استكشف مقالاتنا وأحدث الأخبار</h1>

      <div className="row justify-content-center mt-5 g-4">
        {blogsContent.map((item, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
          >
            <Blog
              date={item.date}
              views={item.views}
              title={item.title}
              desc={item.desc}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
