import React, { FC, useRef } from 'react';
import classNames from 'classnames';

import { useIntersectionObserver } from '../../../../../shared/lib/hooks';
import '../../styled.scss';

interface ILazyImgProps {
  src: string;
  placeholder: string;
}

const LazyImg: FC<ILazyImgProps> = ({ src, placeholder }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };
  useIntersectionObserver(divRef, () => setIsLoading(false), options);

  return (
    <div
      ref={divRef}
      className={classNames('card-img', {
        lazy: isLoading,
      })}
    >
      {!isLoading ? <img src={src} alt={placeholder} /> : <div className={'card-loading'}>Loading...</div>}
    </div>
  );
};

export default LazyImg;
