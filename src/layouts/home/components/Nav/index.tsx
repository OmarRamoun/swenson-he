import {useEffect, useState} from 'react';

import {logo} from '@assets/images';
import {Burger, Cross} from '@assets/svgs';
import {Button, Center, Flex, Image, Link} from '@components';
import {useMediaQuery} from '@hooks';
import {cn} from '@lib';

import styles from './nav.module.css';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {isLargeScreen} = useMediaQuery();

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    }

    if (!showMenu) {
      document.body.style.overflow = 'auto';
    }
  }, [showMenu]);

  return (
    <Flex className={styles.nav}>
      <Image src={logo} alt="logo" />

      <Flex className={cn(!showMenu && !isLargeScreen && styles.none, styles.nav_menu)}>
        <Center className={styles.nav_menu__wrapper}>
          <Link
            href="/"
            onClick={() => setShowMenu(false)}
            textStyle={styles.nav_menu__item}
            activeTextStyle={styles.active_link}
          >
            Event Builder
          </Link>

          <Link
            href="/saved"
            onClick={() => setShowMenu(false)}
            activeClassName={styles.active_link}
            textStyle={styles.nav_menu__item}
            activeTextStyle={styles.active_link}
          >
            Saved
          </Link>

          <Link
            href="/contact"
            onClick={() => setShowMenu(false)}
            activeClassName={styles.active_link}
            textStyle={styles.nav_menu__item}
            activeTextStyle={styles.active_link}
          >
            {showMenu ? 'Contact' : <Button size="lg">Contact Us</Button>}
          </Link>
        </Center>
      </Flex>

      {!isLargeScreen ? (
        <Button
          className={cn(showMenu && styles.nav_button__active, styles.nav_button)}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Center>
            <Burger className={cn(showMenu && styles.none, styles.nav_burger)} />
            <Cross className={cn(!showMenu && styles.none, styles.nav_cross)} />
          </Center>
        </Button>
      ) : null}
    </Flex>
  );
};

export {Nav};
