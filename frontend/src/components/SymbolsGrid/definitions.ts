
import upIcon from '../../assets/up.png';
import downIcon from '../../assets/down.png';

export const ICON_STOCK: Record<string, string> = {
    UP:  'UP',
    DOWN: 'DOWN',
  };

export const STOCK_ICONS_MAP: Partial<Record<string, string>> = {
    [ICON_STOCK.UP]:  upIcon,
    [ICON_STOCK.DOWN]: downIcon,
  };
