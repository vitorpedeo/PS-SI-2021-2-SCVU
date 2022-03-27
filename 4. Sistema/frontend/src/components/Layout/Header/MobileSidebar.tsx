import { useEffect, useState } from 'react';
import { IoReorderThree } from 'react-icons/io5';

import { DrawerContainer } from '@/features/header';
import { Button, Text } from '@/components/Base';

export function MobileSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSidebarOpen]);

  return (
    <>
      <Button
        aria-label="Abrir Menu Lateral"
        px="0.25rem"
        height="42px"
        bg="blue"
        color="white"
        display={['unset', 'unset', 'unset', 'none']}
        onClick={openSidebar}
      >
        <IoReorderThree size={32} />
      </Button>

      <DrawerContainer
        aria-hidden={isSidebarOpen ? 'false' : 'true'}
        isOpen={isSidebarOpen}
      >
        teste
      </DrawerContainer>
    </>
  );
}
