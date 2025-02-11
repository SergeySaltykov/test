import React, { FC, Suspense } from 'react';
import { Navigate, Route, Routes as Switch } from 'react-router';

import { tabsConfig } from '../shared/constants/tabs';
import { NotFound } from '../shared/ui';
import ErrorBoundary from '../shared/ui/ErrorBoundary/ErrorBoundary';

const Content = React.lazy(() => import('../widgets/add-drinks/Content/Content'));

const Routes: FC = () => {
  const defaultTab = tabsConfig[0]?.path || '/';

  return (
    <Switch>
      <Route path="/" element={<Navigate to={defaultTab} replace />} />
      <Route
        path={'/:cocktailCode'}
        element={
          <ErrorBoundary>
            <Suspense fallback="Loading...">
              <Content tabs={tabsConfig} />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
};

export default Routes;
