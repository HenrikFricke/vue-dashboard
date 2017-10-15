import Button from './atoms/Button/Button';
import IconButton from './atoms/IconButton/IconButton';
import List from './atoms/List/List';
import ListItem from './atoms/List/ListItem';
import Panel from './atoms/Panel/Panel';
import PanelMain from './atoms/Panel/PanelMain';
import PanelSub from './atoms/Panel/PanelSub';
import Popover from './utils/Popover/Popover';
import VerticalMoreMenu from './molecules/VerticalMoreMenu/VerticalMoreMenu';

const components = [
  Button,
  IconButton,
  List,
  ListItem,
  Panel,
  PanelMain,
  PanelSub,
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
