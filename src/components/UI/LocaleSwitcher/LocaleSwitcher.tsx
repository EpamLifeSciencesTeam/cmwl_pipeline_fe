import React, { ChangeEvent, FC, useContext } from 'react';
import { LocaleContext, LocaleLanguage } from '../../../context/LocaleContext';
import { Avatar, MenuItem, Select } from '@material-ui/core';
import { ReactComponent as USAIcon } from '../../../assets/flags/UnitedStates.svg';
import { ReactComponent as RussiaIcon } from '../../../assets/flags/Russia.svg';
import { useLocaleSwitcherStyles } from './LocaleSwitcherStyles';

export const LocaleSwitcher: FC = () => {
  const classes = useLocaleSwitcherStyles();
  const { locale, setLocale } = useContext(LocaleContext);

  const localeItems = [
    {
      locale: LocaleLanguage.en,
      icon: <USAIcon />
    },
    {
      locale: LocaleLanguage.ru,
      icon: <RussiaIcon />
    }
  ];

  const menuItems = () => {
    return localeItems.map(item => (
      <MenuItem key={item.locale} value={item.locale} className={classes.menuItem}>
        <Avatar className={classes.avatar}>
          {item.icon}
        </Avatar>
      </MenuItem>
    ));
  };

  const onChangeSelectHandler = (event: ChangeEvent<{ value: unknown }>) => {
    setLocale(event.target.value as LocaleLanguage);
  };

  return (
    <Select value={locale}
            onChange={onChangeSelectHandler}
            disableUnderline={true}
            classes={{
              icon: classes.hideIcon,
              select: classes.select
            }}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left'
              }
            }}>
      {menuItems()}
    </Select>
  );
};
