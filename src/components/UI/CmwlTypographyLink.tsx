import React, { FC, forwardRef, useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

interface TypographyLinkProps {
  className?: string;
  variant?: Variant | 'inherit';
  text?: string;
  noWrap?: boolean;
  color?:
    | 'initial'
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error';
  to: string;
}

export const CmwlTypographyLink: FC<TypographyLinkProps> = props => {
  const memoLink = useMemo(
    () =>
      forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => (
        <Link to={props.to} ref={ref} {...itemProps} />
      )),
    [props.to]
  );

  return (
    <Typography component={memoLink}{...props} />
  );
};
