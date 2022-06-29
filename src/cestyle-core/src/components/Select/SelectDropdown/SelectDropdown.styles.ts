import { createStyles } from '@cestyle/styles';

interface SelectDropdownProps {
  native: boolean;
}

export default createStyles((theme, { native }: SelectDropdownProps) => ({
  dropdown: {
    ...theme.fn.fontStyles(),
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.white,
    // border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    //   }`,
    paddingTop: 4,
    paddingBottom: 4,
    overflowY: native ? 'auto' : 'hidden',
    overscrollBehaviorY: 'contain',
    width: '100%',
    boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.06)',
  },
}));
