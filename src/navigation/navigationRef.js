import {createNavigationContainerRef} from '@react-navigation/native';
import router from '@router';
export const navigationRef = createNavigationContainerRef();

const rootNavigation = (rootName, screeName, screenParams) => {
  navigationRef.navigate(rootName, {
    screen: screeName,
    params: screenParams,
  });
};
export const root = {
  goBack: () => navigationRef.goBack(),
  navigate: (screeName, screenParams) => {
    navigationRef.navigate(screeName, screenParams);
  },
};

export const bottomRoot = {
  navigate: (screeName, screenParams) => {
    rootNavigation(router.BOTTOM_CONTAINER, screeName, screenParams);
  },
};
export const commonRoot = {
  navigate: (screeName, screenParams) => {
    rootNavigation(router.COMMON_CONTAINER, screeName, screenParams);
  },
};
export const topRoot = {
  navigate: (screeName, screenParams) => {
    rootNavigation(router.TOP_CONTAINER, screeName, screenParams);
  },
};
