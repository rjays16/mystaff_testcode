'use client'
import * as React from 'react';
import { ScheduleComponent, Inject, Agenda, Day, Month, Week, WorkWeek, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cXmZCekx3THxbf1x0ZFxMYVhbRXBPMyBoS35RckVgW39fcHVXR2RYUUN3');

export function Calendar(): React.JSX.Element {
  const remoteData = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor(),
    crossDomain: true
  });

  const eventSettings: EventSettingsModel = {
    dataSource: remoteData 
  };

  return (
    <ScheduleComponent >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

export default Calendar;
