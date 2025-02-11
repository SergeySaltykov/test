import { FC } from 'react';
import Routes from './Routes';
import { Container, Layout, Tabs } from '../shared/ui';
import { tabsConfig } from '../shared/constants/tabs';

const App: FC = () => {
  return (
    <Layout>
      <Container right={<Tabs tabs={tabsConfig} />} left={<Routes />} />
    </Layout>
  );
};

export default App;
