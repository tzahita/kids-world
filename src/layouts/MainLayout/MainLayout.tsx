import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  AppContainer,
  Header,
  HeaderContent,
  Logo,
  DesktopNav,
  StyledNavLink,
  ActiveBackground,
  MainContent,
  MobileNav,
  MobileNavItem,
  MobileActiveIndicator,
  LanguageButton,
} from './MainLayoutStyled';

export default function MainLayout() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { path: '/', label: t('nav.home'), icon: '🏠' },
    { path: '/math', label: t('nav.math'), icon: '🔢' },
    { path: '/hebrew', label: t('nav.hebrew'), icon: 'א' },
    { path: '/english', label: t('nav.english'), icon: 'A' },
    { path: '/memory', label: t('nav.memory'), icon: '🧠' },
  ];

  return (
    <AppContainer>
      <Header>
        <HeaderContent>
          <Link to="/">
            <Logo
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span style={{ fontSize: '2rem' }}>🦁</span>
              <span>{t('common.kidsLearn')}</span>
            </Logo>
          </Link>
          
          <LanguageButton
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{i18n.language === 'he' ? '🇺🇸 English' : '🇮🇱 עברית'}</span>
          </LanguageButton>

          <DesktopNav>
            {navItems.map((item) => (
              <StyledNavLink key={item.path} to={item.path}>
                {({ isActive }) => (
                  <>
                    <span style={{ zIndex: 1 }}>{item.icon} {item.label}</span>
                    {isActive && (
                      <ActiveBackground
                        layoutId="desktopNavHighlight"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </StyledNavLink>
            ))}
          </DesktopNav>
        </HeaderContent>
      </Header>

      <MainContent>
        <Outlet />
      </MainContent>

      <MobileNav>
        {navItems.map((item) => (
          <MobileNavItem key={item.path} to={item.path}>
            {({ isActive }) => (
              <>
                <motion.span 
                  style={{ fontSize: '1.5rem', zIndex: 1 }}
                  animate={{ scale: isActive ? 1.2 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.span>
                <span style={{ zIndex: 1 }}>{item.label}</span>
                {isActive && (
                  <MobileActiveIndicator
                    layoutId="mobileNavHighlight"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </>
            )}
          </MobileNavItem>
        ))}
      </MobileNav>
    </AppContainer>
  );
}
