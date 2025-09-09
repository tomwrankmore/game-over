import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  ExternalLink,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Globe,
} from "lucide-react";
import Button from "@/components/Button";
import LinkTreeButton from "@/components/LinkTreeButton";
import Logo from "@/components/Logo";

interface LinkItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

const links: LinkItem[] = [
  {
    title: "My Website",
    url: "https://example.com",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/username",
    icon: <Instagram className="h-4 w-4" />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/username",
    icon: <Twitter className="h-4 w-4" />,
  },
  {
    title: "YouTube Channel",
    url: "https://youtube.com/@username",
    icon: <Youtube className="h-4 w-4" />,
  },
  {
    title: "Contact Me",
    url: "mailto:hello@example.com",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    title: "Latest Blog Post",
    url: "https://example.com/blog/latest",
    icon: <ExternalLink className="h-4 w-4" />,
  },
];

export function LinktreeProfile() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="mx-auto w-full max-w-md">
        {/* Profile Section */}
        <div className="mb-8 text-center">
          {/* <Avatar className="mx-auto mb-4 h-24 w-24 ring-4 ring-white/20">
            <AvatarImage src="/professional-headshot.png" alt="Profile" />
            <AvatarFallback className="bg-white text-2xl font-bold text-emerald-600">
              JD
            </AvatarFallback>
          </Avatar> */}
          <div className="mb-4 flex justify-center">
            <Logo isDark />
          </div>

          {/* <h1 className="mb-2 text-2xl font-bold text-white">@johndoe</h1> */}
          <p className="px-4 text-sm leading-relaxed">
            {
              "Welcome to my corner of the internet! Find all my links and latest content here."
            }
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-4">
          {links.map((link, index) => (
            <LinkTreeButton key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                {link.icon}
                <span>{link.title}</span>
              </a>
            </LinkTreeButton>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-boycott-black text-xs">{"Made with ❤️"}</p>
        </div>
      </div>
    </div>
  );
}
