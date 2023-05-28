import React, { useState } from 'react';
import {
  Menu,
  MenuItem,
  IndexPath,
  IconElement,
  Icon,
} from '@ui-kitten/components';

export const MenuGroupsShowcase = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | null>(null);

  const StarIcon = (props: any): IconElement => <Icon {...props} name="star" />;

  return (
    <Menu
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <MenuItem title="Eva Design System" accessoryLeft={StarIcon} />
      <MenuItem title="Eva Icons" />
    </Menu>
  );
};

export default MenuGroupsShowcase;
