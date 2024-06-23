import { useAppTheme } from '@root/src/design_system/theme/theme';
import { isSameMonth, isSameYear, isEqual } from 'date-fns';

export function getStatusColor(transactionStatus: string): string {
  const { status } = useAppTheme();
  switch (transactionStatus) {
    case 'success':
      return status.successful;
    case 'failed':
      return status.error;
    case 'pending':
      return status.pending;
    default:
      return status.pending;
  }
}

export function getInitialLetter(word: string | null): string {
  return (word ?? '')?.charAt(0).toUpperCase();
}

export function initialLetterToUppercase(word: string | null) {
  const initialLetter = word?.charAt(0).toUpperCase();
  const remainingWords = word?.slice(1);
  return `${initialLetter}${remainingWords}`;
}

export function datesAreEqual(firstDate: string, secondDate: string): boolean | null {
  const first = new Date(firstDate).toDateString();
  const second = new Date(secondDate).toDateString();
  console.log('FIRST DATE is ', first);
  console.log('SECOND DATE is ', second);
  const theyAreEqual = isEqual(first, second);
  if (theyAreEqual) return true;
  else return false;
}
export function monthsAreEqual(date: string): boolean {
  const currentMonth = new Date().getMonth();
  const month = new Date(date).getMonth();
  console.log('current month is ', currentMonth);
  return isSameMonth(month, currentMonth);
}

export function yearIsEqual(date: string): boolean {
  const currentYear = new Date().getFullYear();
  const year = new Date(date).getFullYear();
  console.log('current year is ', currentYear);
  return isSameYear(year, currentYear);
}

export function calCashBackEarningMonth(cashbacks: Cashback[]) {
  let monthlyEarnings = 0;
  // cashbacks.
  cashbacks.forEach(cashback => {
    if (monthsAreEqual(cashback.created ?? '')) {
      monthlyEarnings = monthlyEarnings + parseFloat(cashback?.amount ?? '0');
    }
  });
  console.log('TOTAL MONTH EARNINGS', monthlyEarnings);
  return formatStringAmount({ amount: monthlyEarnings.toString() });
}

export function calCashBackEarningYear(cashbacks: Cashback[]) {
  let yearlyEarnings = 0;
  // cashbacks.
  cashbacks.forEach(cashback => {
    if (yearIsEqual(cashback.created ?? '')) {
      yearlyEarnings = yearlyEarnings + parseFloat(cashback?.amount ?? '0');
    }
  });
  console.log('TOTAL YEARLY EARNINGS', yearlyEarnings);
  return formatStringAmount({ amount: yearlyEarnings.toString() });
}

export function formatStringAmount({
  amount,
  formatterOptions,
}: {
  amount: string | null;
  formatterOptions?: Intl.NumberFormatOptions;
}) {
  const formatter = Intl.NumberFormat(
    'en-US',
    formatterOptions ?? { minimumFractionDigits: 2 },
  );
  return formatter.format(parseFloat(amount ?? '0'));
}
