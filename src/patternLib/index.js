import IconButton from './atoms/IconButton/IconButton';
import List from './atoms/List/List';
import ListItem from './atoms/List/ListItem';
import Panel from './atoms/Panel/Panel';
import Popover from './utils/Popover/Popover';
import VerticalMoreMenu from './molecules/VerticalMoreMenu/VerticalMoreMenu';

const components = [
  IconButton,
  List,
  ListItem,
  Panel,
  Popover,
  VerticalMoreMenu,
];

const patternLibrary = {};

patternLibrary.install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default patternLibrary;
