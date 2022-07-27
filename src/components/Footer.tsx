export default function Footer() {
  return (
    <div className="bg-[#3E3E3C] flex justify-center py-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 w-full max-w-[1200px] text-white justify-between px-5">
        <div>
          <img className="h-20" src="/logo_white.png" alt="" />

          <div className="flex gap-4 mt-5 ml-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 16C32 7.1625 24.8375 0 16 0C7.1625 0 0 7.1625 0 16C0 23.9875 5.85 30.6062 13.5 31.8062V20.625H9.4375V16H13.5V12.475C13.5 8.46562 15.8875 6.25 19.5438 6.25C21.2938 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1063C19.1188 10.5 18.5 11.7344 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8062C26.15 30.6062 32 23.9875 32 16Z"
                  fill="#FAFBFC"
                ></path>
              </svg>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0ZM22.6677 10.4995C23.402 10.701 23.9803 11.2947 24.1766 12.0488C24.5333 13.4153 24.5333 16.2666 24.5333 16.2666C24.5333 16.2666 24.5333 19.1178 24.1766 20.4845C23.9803 21.2385 23.402 21.8322 22.6677 22.0338C21.3369 22.3999 15.9999 22.3999 15.9999 22.3999C15.9999 22.3999 10.663 22.3999 9.3321 22.0338C8.59775 21.8322 8.01943 21.2385 7.82316 20.4845C7.4666 19.1178 7.4666 16.2666 7.4666 16.2666C7.4666 16.2666 7.4666 13.4153 7.82316 12.0488C8.01943 11.2947 8.59775 10.701 9.3321 10.4995C10.663 10.1333 15.9999 10.1333 15.9999 10.1333C15.9999 10.1333 21.3369 10.1333 22.6677 10.4995Z"
                  fill="#FAFBFC"
                ></path>
                <path
                  d="M14.4 19.2V13.8667L18.6666 16.5335L14.4 19.2Z"
                  fill="#FAFBFC"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 ml-2 md:ml-0">
          <h1 className="font-semibold">Về mindX</h1>
          <a
            href="https://mindx.vn/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog công nghệ
          </a>
          <a
            href="https://mindx.vn/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Về chúng tôi
          </a>
          <a
            href="https://www.topcv.vn/cong-ty/mindx-technology-school/31103.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tuyển dụng
          </a>
        </div>
        <div className="flex flex-col items-start gap-2 ml-2 md:ml-0">
          <h1 className="font-semibold">Chương trình học</h1>
          <a
            href="https://mindx.vn/study-program/tong-hoc-khoa-hoc-lap-trinh-cho-tre-em"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code for kids
          </a>
          <a
            href="https://mindx.vn/study-program/khoa-hoc-lap-trinh-code-for-teen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code for teen
          </a>
          <a
            href="https://mindx.vn/study-program/khoa-hoc-lap-trinh-tu-co-ban-toi-nang-cao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code for 18+
          </a>
        </div>
        <div className="flex flex-col items-start gap-2 ml-2 md:ml-0">
          <div className="font-semibold">Hotline</div>
          <a href="tel:02477705666">Khóa học khối 18+: 02477705666</a>
          <a href="tel:02477717888">Khóa học KidTeen Hà Nội: 02477717888</a>
          <a href="tel:02877717789">Khóa học KidTeen HCM: 02877717789</a>
          <a href="tel:02477708666">Khóa học khối Online: 02477708666</a>
          <a href="tel:02477731666">Khóa học khối MultiMedia: 02477731666</a>
          <a href="tel:02477703666">Hợp tác truyền thông: 02477703666</a>
          <a href="tel:02477710666">Khiếu nại dịch vụ CSKH: 02477710666</a>
        </div>
      </div>
    </div>
  );
}
