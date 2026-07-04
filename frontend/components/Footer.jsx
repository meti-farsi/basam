import { Search } from "lucide-react";

const browseLinks = ["Featured Courses", "Featured Categories", "Business", "IT", "Design"];
const devLinks = ["Development", "Marketing", "Photography", "Finance", "Sport"];
const platformLinks = ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"];

function LinkColumn({ title, links, showTitle = true }) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <p
        className={`font-['Satoshi:Medium'] text-[#242528] text-base ${
          showTitle ? "" : "opacity-0 select-none"
        }`}
      >
        {title || "\u00A0"}
      </p>
      <div className="flex flex-col gap-3 sm:gap-4 text-[#242528] text-sm font-['Satoshi:Regular']">
        {links.map((link) => (
          <a key={link} href="#" className="hover:opacity-70">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e5] px-4 sm:px-6 lg:px-[120px] py-12 lg:py-16">
      <div className="flex flex-col gap-16 lg:gap-[80px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[92px]">
          <div className="flex flex-col gap-8 lg:gap-[45px] lg:max-w-[528px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <svg width="24" height="27" viewBox="0 0 24 27" fill="none">
                  <path d="M12 0L24 6.75V20.25L12 27L0 20.25V6.75L12 0Z" fill="#D4FB20" />
                </svg>
                <p className="font-['Clash_Display:Bold'] text-[#242528] text-xl sm:text-2xl">
                  ByteSpace
                </p>
              </div>
              <p className="font-['Satoshi:Regular'] text-[#242528] text-sm">
                Stay Up to date with our latest features and releases by joining our
                newsletter.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="flex items-center h-[52px] px-6 border border-[#ced0d3] rounded-[100px] flex-1 min-w-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="font-['Satoshi:Regular'] text-[#242528] text-sm sm:text-base w-full outline-none bg-transparent"
                  />
                </div>
                <button className="flex items-center justify-center gap-2 bg-[#d4fb20] px-6 py-3 rounded-[24px] font-['Satoshi:Medium'] text-[#242528] text-base sm:text-lg shrink-0">
                  <Search className="h-5 w-5" strokeWidth={2} />
                  Search
                </button>
              </div>
              <p className="font-['Satoshi:Regular'] text-[#242528] text-xs">
                By subscribing, you agree to our Privacy Policy and consent to receive
                updates from our company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            <LinkColumn title="Browse" links={browseLinks} />
            <LinkColumn links={devLinks} showTitle={false} />
            <div className="col-span-2 sm:col-span-1">
              <LinkColumn title="Platform" links={platformLinks} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="h-px bg-[#e5e5e5]" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#242528] text-xs font-['Satoshi:Regular']">
            <p>@ 2023 ByteSpace. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="#" className="hover:opacity-70">Privacy Policy</a>
              <a href="#" className="hover:opacity-70">Terms of Service</a>
              <a href="#" className="hover:opacity-70">Cookies Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
