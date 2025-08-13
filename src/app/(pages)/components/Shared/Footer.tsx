import Image from "next/image";
import Link from "next/link";
import logo from "../../../../assets/logo.png";

export default function Footer() {
  const footerLinks = [
    {
      category: "Legal",
      links: [
        { title: "Privacy Policy", href: "#" },
        { title: "Terms of Service", href: "#" },
        { title: "Cookie Policy", href: "#" },
      ],
    },
    {
      category: "Company",
      links: [
        { title: "About Us", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Contact", href: "#" },
      ],
    },
    {
      category: "Resources",
      links: [
        { title: "Blog", href: "#" },
        { title: "Help Center", href: "#" },
        { title: "Tutorials", href: "#" },
      ],
    },
    // {
    //   category: "Social",
    //   links: [
    //     { title: "Twitter", href: "#" },
    //     { title: "Facebook", href: "#" },
    //     { title: "Instagram", href: "#" },
    //   ],
    // },
  ];

  return (
    <footer className="pt-12">
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="col-span-3 space-y-4">
            <Link href="/" className="flex items-center">
              <Image className="h-10 w-10" src={logo} alt="logo" />
              <span className="ml-2 text-3xl font-bold">
                <span className="text-purple-700">Snap</span>
                <span>Mind</span>
              </span>
            </Link>
            <p className="max-w-sm">
              SnapMind tailors every learning path to you, uses AI to fetch
              fresh, up-to-date materials, and gamifies your progress so you
              stay engaged.
            </p>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.category}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm text-center pt-10 pb-3">
        © {new Date().getFullYear()} CompanyName. All rights reserved.
      </p>
    </footer>
  );
}
