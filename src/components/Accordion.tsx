import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";

interface AccordionProps {
  section: any;
}

const Accordion: FC<AccordionProps> = ({ section }) => {
  const [isOpened, setIsOpened] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (isOpened) {
      ref.current.style.maxHeight = `${ref.current.scrollHeight}px`;
    } else {
      ref.current.style.maxHeight = "0";
    }
  }, [isOpened]);

  return (
    <div>
      <div
        onClick={() => setIsOpened(!isOpened)}
        className="bg-[#F8F8F8] py-3 px-4 rounded text-xl flex justify-between items-center cursor-pointer"
      >
        <span>{section.title}</span>
        <svg
          className={`w-4 h-4 fill-red-600 transition ${
            isOpened ? "rotate-90" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
        </svg>
      </div>

      <div
        ref={ref}
        className="bg-white text-lg transition-all overflow-hidden"
      >
        <div className="p-4 flex flex-col">
          {section.posts.length === 0 && (
            <p className="text-gray-400">Chưa có bài giảng nào</p>
          )}
          {section.posts.map((item: any) => (
            <Link href={`/post/${item.slug}`} key={item.id}>
              <a className="text-red-600">{item.title}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
