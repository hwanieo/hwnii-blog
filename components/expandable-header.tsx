'use client';

import Hamburger from './hamburger';
import NavLinks from './header-links';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Logo from './logo';

export default function ExpandableHeader() {
  const [isExpand, setIsExpand] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 767;
      setIsMobile(mobile);

      if (!mobile) {
        setIsExpand(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 컴포넌트가 리렌더링될 때마다 새로운 함수 인스턴스가 생성되는 것을 방지하기 위해 useCallback을 사용합니다.
  // 하위 컴포넌트에서 memo를 사용하여 불필요한 리렌더링을 방지하고 있으므로, props의 변경을 최소화해야 합니다.
  // handleToggleNav와 handleClose 함수는 상태를 변화시키는 역할만 하므로, useCallback을 사용하여 동일한 함수 인스턴스를 유지합니다.
  const handleToggleNav = useCallback(function handleToggleNav() {
    setIsExpand((prev) => !prev);
  }, []);

  const handleClose = useCallback(function handleClose() {
    setIsExpand(false);
  }, []);

  return (
    <>
      <div className='flex justify-between w-full'>
        <Logo onClick={handleClose} />

        {/* 햄버거 */}
        <Hamburger onClick={handleToggleNav} />
      </div>

      {isExpand && isMobile && (
        <ul className='flex flex-col w-full gap-1 mt-5'>
          <NavLinks onClick={isExpand ? handleClose : undefined} />
        </ul>
      )}

      {/* 네비게이션 */}
      <nav className='hidden md:block'>
        <ul className='flex gap-4 text-center items-center'>
          <NavLinks />
        </ul>
      </nav>
    </>
  );
}

/*
--- useCallback와 memo 사용시에 고려해야 할 유용한 내용등 ---

useCallback만 사용하고 memo를 사용하지 않는 경우:
함수의 안정성:
useCallback은 함수를 메모이제이션하여 동일한 함수 인스턴스를 유지합니다.
이는 함수 자체의 안정성을 보장합니다.
상위 컴포넌트의 리렌더링:
하지만 상위 컴포넌트가 리렌더링될 때, useCallback만으로는 하위 컴포넌트의 리렌더링을 방지할 수 없습니다.
React는 기본적으로 부모 컴포넌트가 리렌더링되면 모든 자식 컴포넌트도 리렌더링합니다.
불필요한 리렌더링:
useCallback으로 함수를 메모이제이션해도, 다른 props나 상위 컴포넌트의 상태가 변경되면 하위 컴포넌트는 여전히 리렌더링됩니다.
memo와 useCallback을 함께 사용하는 이유:
선택적 리렌더링:
memo는 컴포넌트의 props가 변경되지 않았을 때 리렌더링을 방지합니다.
useCallback과 함께 사용하면, 함수 props의 참조가 변경되지 않아 memo가 효과적으로 작동할 수 있습니다.
완전한 최적화:
useCallback은 함수의 안정성을 보장하고, memo는 그 안정된 props를 기반으로 컴포넌트의 리렌더링을 제어합니다.
이 조합으로 불필요한 리렌더링을 더욱 효과적으로 방지할 수 있습니다.
세밀한 제어:
memo를 사용함으로써 개발자가 컴포넌트의 리렌더링 조건을 명시적으로 제어할 수 있습니다.
결론:
useCallback만 사용하는 것은 함수의 안정성을 보장하지만, 하위 컴포넌트의 불필요한 리렌더링을 완전히 방지하지는 못합니다. memo와 useCallback을 함께 사용함으로써 더 완전한 최적화를 달성할 수 있습니다.
그러나 모든 상황에서 memo가 필요한 것은 아닙니다. 컴포넌트가 간단하고 리렌더링 비용이 낮다면 useCallback만으로도 충분할 수 있습니다. 최적화의 필요성은 항상 실제 성능 측정과 프로파일링을 통해 판단해야 합니다.
*/
