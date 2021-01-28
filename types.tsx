// generic object type which maps route names to the params of route
// we pass this to the createStackNavigator function TODO: why???

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  AboutTab: undefined;
  RusbookTab: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
