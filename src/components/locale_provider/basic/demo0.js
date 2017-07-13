import React from 'react';
import { Pagination, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const App = () => (
  <div>
    <Pagination defaultCurrent={1} total={50} showSizeChanger />
  </div>
);

export default function DemoComponent_locale_provider_basic() {
return(
  <LocaleProvider locale={enUS}>
    <App />
  </LocaleProvider>
);
};

export const demo = <DemoComponent_locale_provider_basic key="DemoComponent_locale_provider_basic" />;
