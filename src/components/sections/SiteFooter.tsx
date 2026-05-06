import { defaultProfile } from "@/lib/profile";

interface SiteFooterProps {
  name?: string;
  year?: number;
}

export function SiteFooter({
  name = defaultProfile.name,
  year = new Date().getFullYear(),
}: SiteFooterProps = {}) {
  return (
    <footer className="bg-footer px-4 py-8 text-center">
      <p className="text-base text-text-footer">
        © {year} {name}. All rights reserved.
      </p>
    </footer>
  );
}
