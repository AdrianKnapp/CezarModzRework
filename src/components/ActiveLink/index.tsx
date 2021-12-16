import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
  href: string;
}

export default function ActiveLink({
  children,
  activeClassName,
  href,
  ...props
}: ActiveLinkProps) {
  const { pathname } = useRouter();
  const className = pathname === href ? activeClassName : '';

  return (
    <Link {...props} href={href}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
}
