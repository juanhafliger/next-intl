import React from "react";
import Link from "next/link";

import useTranslation from "../../intl/useTranslation";

interface Props {
  className?: string;
}

const Navigation: React.FC<Props> = ({ className }) => {
  const { t, locale } = useTranslation();
  const navClass = className || "navigation";

  return (
    <nav className={navClass}>
      <ul>
        <li>
          <Link href={`/`} as={`/`}>
            <a>{t("home")}</a>
          </Link>
        </li>
        <li>
          <Link href={`/[lang]/articles`} as={`/${locale}/articles`}>
            <a>{t("articles")}</a>
          </Link>
        </li>
        <li>
          <Link href={`/about`} as={`/about`}>
            <a>{t("about")}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
