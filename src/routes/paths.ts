
import Template from '../template/Template';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PasswordRecoveryPage from '../pages/PasswordRecoveryPage';
import PollListPage from '../pages/PollListPage';

declare global {
  interface IPath {
    name: string;
    component: React.ComponentType;
    template?: React.ComponentType;
    default?: boolean;
  }
}

export const privatePaths: IPath[] = [
  {
    name: '/',
    component: PollListPage,
    template: Template,
  },
];

export const notLoggedPaths: IPath[] = [
  {
    name: '/login',
    component: LoginPage,
    default: true,
  },
  {
    name: '/register',
    component: RegisterPage,
  },
  {
    name: '/password-recovery',
    component: PasswordRecoveryPage,
  },
];

export const publicPaths: IPath[] = [
];
