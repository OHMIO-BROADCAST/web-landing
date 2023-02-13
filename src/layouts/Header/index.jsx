import {useEffect} from 'react'

// import All Of Data
import Logo from '../../data/data-layout/Header/data-Logo.js';
import dropdownItem from '../../data/data-layout/Header/data-dropdownItem.json';


import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import SecHeader from './SecHeader'
import { I18nextProvider, useTranslation } from 'react-i18next';

import {i18n} from "../../i18n";

const Header = ({Title}) => {
  const { t, i18n } = useTranslation();

  const i18nfile = i18n

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  }, [])
  

  const MenuInfo=[
	{
		"path":"#home",
		"nameLink": (t('header-home'))
	},
	{
		"path":"#products",
		"nameLink":t('header-products')
	},
	{
		"path":"#wallet",
		"nameLink":t('header-wallet')
	},
	{
		"path":"#roadmap",
		"nameLink":t('header-roadmap')
	},
	{
		"path":"#support",
		"nameLink":t('header-support')
	}
]

  return (
    <>
          <I18nextProvider i18n={i18nfile}>
      <Preloader Title={Title} />
      <SecHeader Logo={Logo}  dropdownItem={dropdownItem} MenuInfo={MenuInfo} />
      </I18nextProvider>
    </>
  );
}

export default Header;