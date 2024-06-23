import {
  alignHorizontalToFlexAlign,
  alignVerticalToFlexAlign,
} from '../design_system/layout/alignment';
import {SPACING} from '../design_system/layout/spacing';
import {Box} from './Box';
import {BoxProps} from './types';

export function Row({children, ...props}: BoxProps) {
  return (
    <Box
      flexDirection="row"
      flexWrap="wrap"
      rowGap={props.rowGap ?? SPACING.medium}
      columnGap={props.columnGap ?? SPACING.medium}
      alignItems={props.alignItems ?? alignHorizontalToFlexAlign.center}
      justifyContent={props.justifyContent ?? alignVerticalToFlexAlign.center}
      {...props}>
      {children}
    </Box>
  );
}
