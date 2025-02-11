import { FC } from 'react';
import { Link, matchPath, useLocation, Location } from 'react-router';
import classNames from 'classnames';

import { capitalizeLetterRegex } from '../../lib/utils';
import { ECocktailCode } from '../../types';
import './styled.scss';

export interface Tab {
  label: ECocktailCode;
  path: string;
}

export interface ITabsProps {
  tabs: Tab[];
}

const hasActive = (path: Tab['path'], location: Location): boolean => {
  return matchPath({ path, end: true }, location.pathname) !== null;
};

const Tabs: FC<ITabsProps> = ({ tabs }) => {
  const location = useLocation();
  return (
    <div className="tabs">
      <div className="tabs-list">
        {tabs.map(({ label, path }) => {
          return (
            <div key={label} className={classNames('tab', { active: hasActive(path, location) })}>
              <Link to={`${label}`} replace className="tab-link">
                {capitalizeLetterRegex(label)}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
