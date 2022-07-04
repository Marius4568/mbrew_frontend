import PaymentsTable from './PaymentsTable/PaymentsTable';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export const dashboardSidebarLinks = [
  {
    componentToRender: 'PaymentsTable',
    title: 'Payment History',
  },
  {
    componentToRender: 'ProfileInfo',
    title: 'Profile info',
  },
];

export let renderLinkComponent = (prop) => {
  switch (prop) {
    case 'PaymentsTable':
      return <PaymentsTable />;

    case 'ProfileInfo':
      return <ProfileInfo />;

    default:
      return <PaymentsTable />;
  }
};
