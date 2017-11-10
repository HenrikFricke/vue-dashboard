import Button from './atoms/Button/Button';
import ButtonWithPanel from './molecules/ButtonWithPanel/ButtonWithPanel';
import Icon from './atoms/Icon/Icon';
import IconButton from './atoms/IconButton/IconButton';
import List from './atoms/List/List';
import ListItem from './atoms/List/ListItem';
import Panel from './atoms/Panel/Panel';
import Popover from './utils/Popover/Popover';
import VerticalMoreMenu from './molecules/VerticalMoreMenu/VerticalMoreMenu';

const components = [
  Button,
  ButtonWithPanel,
  Icon,
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
