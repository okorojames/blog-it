import { Blogs } from "@/mock-data/blogs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[95%] mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-5">
          <Image
            src={Blogs[0].img}
            width={500}
            height={500}
            alt={Blogs[0].title}
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-bold">{Blogs[0].title}</h3>
            <p>{Blogs[0].content}</p>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-3">
          {Blogs.slice(1, 4).map((blog) => (
            <div
              key={blog.id}
              className="flex justify-between items-center gap-3"
            >
              <Image src={blog.img} width={180} height={50} alt={blog.title} />
              <div>
                <h3 className=" text-sm font-semibold">{blog.title}</h3>
                <p className="text-xs">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="border-t border-t-stone-400 mt-10 mb-8">
        <h3 className="text-2xl font-bold mb-6">Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 justify-items-center">
          {Blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col items-start gap-3">
              <Image src={blog.img} width={180} height={50} alt={blog.title} />
              <div>
                <h3 className=" text-sm font-semibold">{blog.title}</h3>
                <p className="text-xs">{blog.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
